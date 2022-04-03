<script>
	import Coins from 'virtual:icons/wpf/coins';
	import Mosque from 'virtual:icons/whh/mosque';
	import Book from 'virtual:icons/ic/twotone-menu-book';
	import Kaaba from 'virtual:icons/fa-solid/kaaba';
	import Grave from 'virtual:icons/mdi/grave-stone';
	import ActiveEvents from './ActiveEvents.svelte';
</script>

<section class="pb-20 bg-gray-300 -mt-24">
	<div class="container mx-auto px-4">
		<div class="flex flex-wrap">
			<div class="lg:pt-12 w-full md:w-4/12 px-4 text-center">
				<div
					class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg active:bg-gray-100"
				>
					<div class="p-8 flex-auto">
						<div
							class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
						>
							<Mosque class="text-white" />
						</div>
						<h6 class="text-xl font-semibold">Dewan Kemakmuran Masjid (DKM)</h6>
						<p class="mt-4 mb-4 text-gray-600">
							Unit kegiatan yang mengelola kegiatan peribadatan di Masjid Baiturrahmaan seperti
							penyelenggaraan sholat Jum'at, kegiatan majelis ta'lim, kegiatan bulan Ramadhan, Idul
							Fitri dan Idul Adha, serta kegiatan-kegiatan masjid lainnya.
						</p>
					</div>
				</div>
			</div>
			<div class="lg:pt-6 w-full md:w-4/12 px-4 text-center">
				<div
					class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg active:bg-gray-100"
				>
					<div class="p-8 flex-auto">
						<div
							class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
						>
							<Book class="text-white" />
						</div>
						<h6 class="text-xl font-semibold">Madrasah Diniyah Takmiliyah Awaliyah (MDTA)</h6>
						<p class="mt-4 mb-4 text-gray-600">
							Unit kegiatan yang menyelenggarakan pendidikan agama Islam untuk anak usia TK-SD yang sudah resmi terdaftar di KEMENAG Kab.Bandung.
						</p>
					</div>
				</div>
			</div>
			<div class="lg:pt-12 w-full md:w-4/12 px-4 text-center">
				<div
					class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg active:bg-gray-100"
				>
					<div class="p-8 flex-auto">
						<div
							class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
						>
							<Coins class="text-white" />
						</div>
						<h6 class="text-xl font-semibold">Baitul Maal wa Tamwil (BMT)</h6>
						<p class="mt-4 mb-4 text-gray-600">
							Unit kegiatan yang menyelenggarakan penyaluran dana pinjaman berbasis syariah untuk nasabah.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-wrap justify-center">
			<div class="lg:pt-12 w-full md:w-4/12 px-4 text-center">
				<div
					class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg active:bg-gray-100"
				>
					<div class="p-8 flex-auto">
						<div
							class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black"
						>
							<Kaaba class="text-white" />
						</div>
						<h6 class="text-xl font-semibold">Kelompok Bimbingan Ibadah Haji (KBIH) dan Umroh</h6>
						<p class="mt-4 mb-4 text-gray-600">
							Unit kegiatan yang bekerjasama dengan Qiblat Tour untuk menyelenggarakan ibadah haji dan umroh bagi jamaah.
						</p>
					</div>
				</div>
			</div>
			<div class="lg:pt-12 w-full md:w-4/12 px-4 text-center">
				<div
					class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg active:bg-gray-100"
				>
					<div class="p-8 flex-auto">
						<div
							class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-400"
						>
							<Grave class="text-white" />
						</div>
						<h6 class="text-xl font-semibold">Pengelola Pemulasaran dan Pemakaman Jenazah (P3J)</h6>
						<p class="mt-4 mb-4 text-gray-600">
							Unit kegiatan yang memberikan pelayanan pemulasaran dan pemakaman jenazah jemaah serta mengelola tanah makam wakaf. 
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- <ActiveEvents /> -->
	</div>
</section>
