<script lang="ts">
	import { onMount } from 'svelte';
	import Calendar from 'virtual:icons/ic/outline-calendar-month';

	// Properties
	export let imageUrls: Array<string>;
	export let title: string;
	export let date: string;
	export let summary: string;

	let Carousel; // for saving Carousel component class
	let carousel; // for calling methods of the carousel instance
	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});
</script>

<div>
	<svelte:component
		this={Carousel}
		autoplay
		autoplayDuration={5000}
		autoplayProgressVisible
		pauseOnFocus
		bind:this={carousel}
		let:showPrevPage
	>
		{#each imageUrls as imageUrl}
			<img src={imageUrl} alt={title} />
		{/each}
	</svelte:component>
	<div class="border border-gray-400 mx-[30px] -mt-5 pt-5 px-4 pb-4">
		<h3 class="text-2xl font-bold">{title}</h3>
		<div class="flex gap-2 mt-1">
			<Calendar />
			<div>{date}</div>
		</div>
		{#if summary}
			<p class="mt-2">{summary}</p>
		{/if}
	</div>
</div>
