<script lang="ts">
	import '../app.css';
	import Hero from '$lib/Hero.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 ">
	<div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
		<div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
			<a
				class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
				href="/">Yayasan An Nisaa</a
			>
		</div>
	</div>
</nav>
<main>
	<Hero />
	<slot />
</main>
<Footer />
