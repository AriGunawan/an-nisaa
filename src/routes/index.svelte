<script context="module" lang="ts">
	import sortBy from 'just-sort-by';

	export async function load({ fetch }) {
		const res = await fetch('/api/news.json');
		const { news } = await res.json();
		return {
			props: { news: sortBy(news, (p: any) => p.date).reverse() }
		};
	}
</script>

<script lang="ts">
	import Divisions from '$lib/Divisions.svelte';
	import News from '$lib/News.svelte';
	import UpcomingEvents from '$lib/UpcomingEvents.svelte';

	export let news: Array<any>;
</script>

<svelte:head>
	<title>Yayasan An Nisaa</title>
</svelte:head>

<Divisions />
<UpcomingEvents />
<News news={news} />