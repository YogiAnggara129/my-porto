#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# === Load FTP configuration ===
CONFIG_FILE=".ftpconfig"

if [ ! -f "$CONFIG_FILE" ]; then
  echo "❌ Configuration file '$CONFIG_FILE' not found!"
  exit 1
fi

source "$CONFIG_FILE"

# === Build the SvelteKit project ===
echo "🔧 Building SvelteKit project..."
npm run build

# === Define local build output directory ===
LOCAL_BUILD_DIR="build"

if [ ! -d "$LOCAL_BUILD_DIR" ]; then
  echo "❌ Build folder '$LOCAL_BUILD_DIR' not found!"
  exit 1
fi

# === Upload to FTP server using lftp ===
echo "🚀 Uploading to $FTP_HOST..."
lftp -e "
set ssl:verify-certificate no;
set ftp:list-options -a;
open $FTP_HOST;
user $FTP_USER $FTP_PASS;
mirror -R --delete --verbose $LOCAL_BUILD_DIR $FTP_TARGET_DIR;
bye
"

echo "✅ Build and upload completed successfully!"
