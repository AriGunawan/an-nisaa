<script>
	import Coins from 'virtual:icons/wpf/coins';
	import Mosque from 'virtual:icons/whh/mosque';
	import Book from 'virtual:icons/ic/twotone-menu-book';
	import Kaaba from 'virtual:icons/fa-solid/kaaba';
	import Grave from 'virtual:icons/mdi/grave-stone';
	import ActiveEvents from './ActiveEvents.svelte';
	import Calendar from 'virtual:icons/bi/calendar3';
	import Clock from 'virtual:icons/gala/clock';
	import Place from 'virtual:icons/ic/baseline-place';
	import Shirt from 'virtual:icons/ph/t-shirt-fill';
	import Food from 'virtual:icons/mdi/food-fork-drink';
	import Day from 'virtual:icons/bi/calendar2-week-fill';
	import Notes from 'virtual:icons/uil/notes';
</script>

<section class="pb-20 bg-gray-300 -mt-24">
	<div class="container mx-auto px-4">
		<div class="flex flex-wrap justify-center">
			<div class="lg:pt-6 w-full md:w-4/12 px-4 text-center">
				<div
					class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg active:bg-gray-100"
				>
					<div class="p-8 flex-auto">
						<div
							class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
						>
							<Book class="text-white" />
						</div>
						<h6 class="text-xl font-semibold">Kajian Pekan Studi Islam XXIII</h6>
						<div class="text-left mt-6 flex flex-col gap-2">
							<div class="flex gap-2">
								<Day />
								<span>Senin - Ahad</span>
							</div>
							<div class="flex gap-2">
								<Calendar />
								<div class='flex flex-col'>
									<span>4-10 April 2022</span>
									<span>2-8 Ramadhan 1443 H</span>
								</div>
							</div>
							<div class="flex gap-2">
								<Clock />
								<span>09.00 - 11.00 WIB</span>
							</div>
							<div class="flex gap-2">
								<Place />
								<span>Masjid Baiturrahmaan TKI 1</span>
							</div>
							<div class="flex gap-2">
								<Notes />
								<span
									><i>Live Streaming</i> di Instagram
									<a
										class="underline text-green-900"
										href="https://www.instagram.com/kajian.annisaa">Kajian.Annisaa</a
									></span
								>
							</div>
						</div>
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
							<Shirt class="text-white" />
						</div>
						<h6 class="text-xl font-semibold">Bazaar Ramadhan</h6>
						<div class="text-left mt-6 flex flex-col gap-2">
							<div class="flex gap-2">
								<Day />
								<span>Jum'at - Ahad</span>
							</div>
							<div class="flex gap-2">
								<Calendar />
								<div class='flex flex-col'>
									<span>8-10 April 2022</span>
									<span>6-8 Ramadhan 1443 H</span>
								</div>
							</div>
							<div class="flex gap-2">
								<Clock />
								<span>08.00 - 11.00 WIB</span>
							</div>
							<div class="flex gap-2">
								<Place />
								<span>Masjid Baiturrahmaan TKI 1</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-wrap justify-center">
			<div class="lg:pt-6 w-full md:w-4/12 px-4 text-center">
				<div
					class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg active:bg-gray-100"
				>
					<div class="p-8 flex-auto">
						<div
							class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
						>
							<Food class="text-white" />
						</div>
						<h6 class="text-xl font-semibold">Berbagi Paket Sembako Berkah untuk Dhuafa</h6>
						<div class="text-left mt-6 flex flex-col gap-2">
							<div class="flex gap-2">
								<Day />
								<span>Selasa</span>
							</div>
							<div class="flex gap-2">
								<Calendar />
								<div class='flex flex-col'>
									<span>12 April 2022</span>
									<span>10 Ramadhan 1443 H</span>
								</div>
							</div>
							<div class="flex gap-2">
								<Place />
								<span>Gedung Balai RW XV Taman Kopo Indah 1</span>
							</div>
							<div class="flex gap-2">
								<Notes />
								<span>Pembagian 100 paket sembako untuk dhuafa</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="lg:pt-6 w-full md:w-4/12 px-4 text-center">
				<div
					class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg active:bg-gray-100"
				>
					<div class="p-8 flex-auto">
						<div
							class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-600"
						>
							<Coins class="text-white" />
						</div>
						<h6 class="text-xl font-semibold">
							Donasi ke Pondok Pesantren, Panti Asuhan, dan Lembaga lainnya
						</h6>
						<div class="text-left mt-6 flex flex-col gap-2">
							<div class="flex gap-2">
								<Day />
								<span>Senin - Ahad</span>
							</div>
							<div class="flex gap-2">
								<Calendar />
								<div class='flex flex-col'>
									<span>4-10 April 2022</span>
									<span>2-8 Ramadhan 1443 H</span>
								</div>
							</div>
							<div class="flex gap-2">
								<Place />
								<div>
									<ul>
										<li>- Masjid Baiturrahmaan</li>
										<li>- Panti Asuhan Baraya Taman Kopo Indah</li>
										<li>- Pondok Pesantren Darul Atsar (Soreang)</li>
										<li>- ITMI</li>
										<li>- Program Persistri (Ustadzah Isoh)</li>
										<li>- Pondok Pesantren Lemoray</li>
									</ul>
								</div>
							</div>
							<div class="flex gap-2">
								<Notes />
								<span
									>Donasi dalam bentuk uang</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <ActiveEvents /> -->
	</div>
</section>
