<script>
	import Back from 'virtual:icons/ic/baseline-arrow-back-ios';
</script>

<div class="mt-3 pt-2 pb-20 px-5 relative">
	<div
		class="top-0 bottom-auto -mt-20 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
		style="height: 70px;"
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
	<div class="max-w-3xl mx-auto markdown">
		<slot />
		<div class='mt-10'>
			<button class="btn btn-primary" on:click={(e) => history.back()}><Back />Kembali</button>
		</div>
	</div>
</div>
