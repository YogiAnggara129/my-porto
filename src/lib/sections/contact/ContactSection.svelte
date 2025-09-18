<script lang="ts">
	let name = '';
	let email = '';
	let msg = '';

	function handleSubmit(e: Event) {
		e.preventDefault();

		const subject = encodeURIComponent('Pesan dari ' + name);
		const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${msg}`);

		window.location.href = `mailto:yogianggara129@gmail.com?subject=${subject}&body=${body}`;

		// reset form
		name = '';
		email = '';
		msg = '';
	}
</script>

<section id="contact" class="px-6 py-20" data-aos="fade-up" data-aos-delay="650">
	<div
		class="mx-auto max-w-xl rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg backdrop-filter"
	>
		<h2 class="mb-6 text-center text-3xl font-bold text-white" data-i18n="contact_title">
			Contact Me
		</h2>
		<form on:submit={handleSubmit} class="space-y-4">
			<input
				id="name"
				type="text"
				placeholder="Name"
				data-i18n-placeholder="contact_name"
				bind:value={name}
				class="w-full rounded-lg bg-white/30 p-3 text-white placeholder-white focus:outline-none"
				required
			/>

			<input
				id="email"
				type="email"
				placeholder="Email"
				data-i18n-placeholder="contact_email"
				bind:value={email}
				class="w-full rounded-lg bg-white/30 p-3 text-white placeholder-white focus:outline-none"
				required
			/>

			<textarea
				id="msg"
				rows="4"
				placeholder="Message"
				data-i18n-placeholder="contact_message"
				bind:value={msg}
				class="w-full rounded-lg bg-white/30 p-3 text-white placeholder-white focus:outline-none"
				required
			></textarea>

			<button
				type="submit"
				class="w-full rounded-lg bg-purple-200/30 py-3 text-white transition hover:bg-purple-200/50"
				data-i18n="contact_button"
			>
				Send Message
			</button>
		</form>
	</div>
</section>
