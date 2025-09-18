<script>
	import { m } from '$lib/paraglide/messages';
	import FooterIcon from './components/FooterIcon.svelte';
</script>

<footer
	class="relative overflow-hidden bg-gradient-to-tr from-slate-800 to-slate-900 py-16 text-white"
	data-aos="fade-up"
	data-aos-delay="750"
>
	<div
		class="absolute inset-0 bg-gradient-to-br from-purple-700 to-blue-500 opacity-20 mix-blend-overlay"
	></div>
	<div class="relative mx-auto max-w-4xl px-6">
		<h3 class="mb-6 text-center text-3xl font-bold">{m.footer__title()}</h3>
		<p class="mb-10 text-center text-gray-300">{m.footer__subtitle()}</p>

		<div class="mb-10 flex justify-center space-x-6">
			<FooterIcon href="mailto:yogianggara129@gmail.com" label="Email">
				<svg
					class="h-6 w-6 text-white"
					fill="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M2.01 4.992A2 2 0 014 3h16a2 2 0 011.99 1.992L12 13 2.01 4.992z" />
					<path d="M22 6.327v11.177A2 2 0 0120 19H4a2 2 0 01-2-2V6.327l10 8.2 10-8.2z" />
				</svg>
			</FooterIcon>
			<FooterIcon href="https://www.linkedin.com/in/yogi-anggara" target="_blank" label="LinkedIn">
				<svg
					class="h-6 w-6 text-white"
					fill="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11.75 20h-2.5v-9h2.5v9zm-1.25-10.3a1.45 1.45 0 110-2.9 1.45 1.45 0 010 2.9zm13 10.3h-2.5v-4.5c0-1.1-.4-1.8-1.3-1.8s-1.5.8-1.5 1.8v4.5h-2.5v-9h2.5v1.2c.5-.8 1.4-1.2 2.3-1.2 2.1 0 3.5 1.4 3.5 3.8v5.2z"
					/>
				</svg>
			</FooterIcon>
			<FooterIcon href="https://github.com/YogiAnggara129" target="_blank" label="Github">
				<svg
					class="h-6 w-6 text-white"
					fill="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.22-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.681-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0112 6.844c.851.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.099 2.647.64.697 1.028 1.59 1.028 2.681 0 3.841-2.337 4.688-4.566 4.937.36.309.679.917.679 1.852 0 1.337-.012 2.418-.012 2.747 0 .269.18.58.688.481C19.135 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
						clip-rule="evenodd"
					/>
				</svg>
			</FooterIcon>
		</div>

		<p class="mb-6 text-center text-sm text-gray-400">{m.footer__subtitle_2()}</p>
		<p class="text-center text-sm text-gray-500">{m.footer__copyright()}</p>
	</div>
</footer>
