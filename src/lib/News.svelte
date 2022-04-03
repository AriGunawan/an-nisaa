<script lang="ts">
	import format from 'date-fns/format/index.js';

	export let news: Array<any>;
</script>

<section class="relative pb-20">
	<div
		class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
		style="height: 80px;"
	>
		<svg
			class="absolute bottom-0 overflow-hidden"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
			version="1.1"
			viewBox="0 0 2560 100"
			x="0"
			y="0"
		>
			<polygon class="text-white fill-current" points="2560 0 2560 100 0 100" />
		</svg>
	</div>
	<div class="container mx-auto px-4 pt-12 lg:pt-24 lg:pb-24">
		<div class="flex flex-wrap justify-center text-center mb-12">
			<div class="w-full px-4">
				<h2 class="text-4xl font-semibold">Berita dan kabar terbaru</h2>
			</div>
		</div>
		<div class="mt-12 max-w-3xl mx-auto flex flex-col gap-6">
			{#each news as { title, summary, imageUrl, hasContent, date }}
				<div class="rounded-xl flex flex-col lg:flex-row shadow-2xl">
					<figure class="">
						<img
							src={imageUrl}
							class="object-cover w-full lg:w-[315px] lg:min-w-[315px] lg:h-full rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
							alt="gambar"
						/>
					</figure>
					<div class="card-body">
						<h2 class="card-title mb-1">{title}</h2>
						<h3 class="mb-4">{format(new Date(date), 'dd MMMM yyyy')}</h3>
						<p>{summary}</p>
						{#if hasContent}
							<div class="card-actions">
								<button class="btn btn-outline">Detail</button>`
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
