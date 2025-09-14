FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Busybox httpd
FROM busybox:uclibc
COPY --from=builder /app/build /www
EXPOSE 80
# -f (foreground), -v (verbose), -p (port), -h (home dir)
CMD ["httpd", "-f", "-v", "-p", "80", "-h", "/www"]
