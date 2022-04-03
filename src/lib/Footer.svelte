<script lang="ts">
	import Email from 'virtual:icons/ic/outline-email';

	let isShowFeedbackForm = false;
</script>

<footer class="relative bg-gray-300 pt-8 pb-6">
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
			<polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
		</svg>
	</div>
	<div class="max-w-[850px] m-auto text-center mb-6 px-4">
		Jika anda memiliki saran dan/atau kritik baik untuk website ini ataupun untuk pengurus Masjid
		Baiturrahmaan. Silahkan klik tombol di bawah ini kemudian isi form yang muncul. Setiap saran dan
		kritik yang anda berikan sangat berarti bagi peningkatan kualitas pelayanan di Masjid
		Baiturrahmaan. Terima kasih.
	</div>
	<div class="w-full flex justify-center">
		{#if isShowFeedbackForm}``
			<iframe
				title="Saran dan Kritik Form"
				src="https://docs.google.com/forms/d/e/1FAIpQLSeVYGdykWvQrtjKkgCDd44J6s4tImqubzC5YpEd-dhzdbEDbA/viewform?embedded=true"
				width="640"
				height="1000"
				frameborder="0"
				marginheight="0"
				marginwidth="0">Loading…</iframe
			>
		{:else}
			<button class="btn btn-primary flex gap-2" on:click={() => (isShowFeedbackForm = true)}>
				<Email class="text-xl" />
				Saran dan Kritik
			</button>
		{/if}
	</div>
	<div class="container mx-auto px-4">
		<!-- <div class="flex flex-wrap">
			<div class="w-full lg:w-6/12 px-4"></div>
			<div class="w-full lg:w-6/12 px-4">
				<div class="flex flex-wrap items-top mb-6">
					<div class="w-full lg:w-4/12 px-4 ml-auto">
						<span class="block uppercase text-gray-600 text-sm font-semibold mb-2"
							>Useful Links</span
						>
						<ul class="list-unstyled">
							<li>
								<a
									class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
									href="https://www.creative-tim.com/presentation">About Us</a
								>
							</li>
							<li>
								<a
									class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
									href="https://www.creative-tim.com/bootstrap-themes/free">Contact Us</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div> -->
		<!-- <hr class="my-6 border-gray-400" /> -->
		<div class="flex flex-wrap items-center md:justify-between justify-center mt-12">
			<div class="w-full md:w-4/12 px-4 mx-auto text-center">
				<div class="text-sm text-gray-600 font-semibold py-1">
					Copyright © {new Date().getFullYear()} Masjid Baiturrahmaan
				</div>
			</div>
		</div>
	</div>
</footer>
