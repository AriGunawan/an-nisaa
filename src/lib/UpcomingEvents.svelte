<script>
	import { goto } from '$app/navigation';
</script>

<section class="pb-20 relative block bg-gray-900">
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
			<polygon class="text-gray-900 fill-current" points="2560 0 2560 100 0 100" />
		</svg>
	</div>
	<div class="container mx-auto px-4 pt-12 lg:pt-24 lg:pb-24">
		<div class="flex flex-wrap text-center justify-center mb-12">
			<div class="w-full lg:w-6/12 px-4">
				<h2 class="text-4xl font-semibold text-white">Kegiatan yang akan datang</h2>
			</div>
		</div>
		<div class="max-w-3xl mx-auto flex flex-col gap-6">
			<div class="card shadow-xl image-full">
				<figure>
					<img src="/pengajian3.jpg" alt="pengajian" />
				</figure>
				<div
					class="justify-end card-body hover:cursor-pointer"
					on:click={(e) => {
						goto('/pages/events/ramadhan-1443h/agenda');
					}}
				>
					<h2 class="card-title">Agenda Ramadhan</h2>
					<p>Berbagai agenda yang akan dilaksanakan di bulan Ramadhan. Klik di sini untuk melihat detail kegiatan-kegiatannya.</p>
				</div>
			</div>
			<div class="card shadow-xl image-full">
				<figure>
					<img src="/pengajian.jpeg" alt="pengajian" />
				</figure>
				<div class="justify-end card-body">
					<h2 class="card-title">Pengajian Kitab Bulughul Maram</h2>
					<p>
						Pengajian rutin membahas kitab Bulughul Maram yang diadakan setiap selasa ba'da maghrib.
					</p>
				</div>
			</div>
			<div class="card shadow-xl image-full">
				<figure>
					<img src="/pengajian2.jpg" alt="pengajian" />
				</figure>
				<div class="justify-end card-body">
					<h2 class="card-title">Pengajian Sabtu Ba'da Subuh</h2>
					<p>Pengajian rutin membahas tema-tema umum yang diadakan setiap sabtu ba'da subuh.</p>
				</div>
			</div>
			<div class="card shadow-xl image-full">
				<figure>
					<img src="/pengajian3.jpg" alt="pengajian" />
				</figure>
				<div class="justify-end card-body">
					<h2 class="card-title">Pengajian Minggu Ba'da Subuh</h2>
					<p>Pengajian rutin membahas tema-tema umum yang diadakan setiap minggu ba'da subuh.</p>
				</div>
			</div>
		</div>
	</div>
</section>
