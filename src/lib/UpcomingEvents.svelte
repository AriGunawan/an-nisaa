<script lang="ts">
	import { goto } from '$app/navigation';
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
	import Person from 'virtual:icons/ion/person';

	let items = [
		{
			title: 'Ramadhan Ku Rindu',
			day: 'Senin',
			date: '4 April 2022/2 Ramadhan 1443 H',
			time: '08.30 - 11.00 WIB',
			speaker: `Ustadz Toni Mas'ud, S.Pd.I`
		},
		{
			title: 'Kiat Sukses Menghadapi Ujian',
			day: 'Selasa',
			date: '5 April 2022/3 Ramadhan 1443 H',
			time: '09.00 - 11.00 WIB',
			speaker: `Ustadz Abu Zulfah Kurniawan, S.H.I, M.H.I`
		},
		{
			title: `Jadi Sahabat Al Qur'an`,
			day: 'Rabu',
			date: '6 April 2022/4 Ramadhan 1443 H',
			time: '09.00 - 11.00 WIB',
			speaker: `Ustadz Ambya Abu Fathin`
		},
		{
			title: 'Membedah Rute Menuju Surga',
			day: 'Kamis',
			date: '7 April 2022/5 Ramadhan 1443 H',
			time: '09.00 - 11.00 WIB',
			speaker: `Ustadz Roni Abdul Fattah`
		},
		{
			title: 'Mengelola Fitrah Wanita di Bulan Suci',
			day: `Jum'at`,
			date: '8 April 2022/6 Ramadhan 1443 H',
			time: '08.00 - 10.00 WIB',
			speaker: `Ustadz Ucu Najmuddin`
		},
		{
			title: 'Ketika Hati Tak Lagi Peka',
			day: 'Sabtu',
			date: '9 April 2022/7 Ramadhan 1443 H',
			time: '09.00 - 11.00 WIB',
			speaker: `Ibu Khairati`
		},
		{
			title: 'Nasihat Kematian',
			day: 'Ahad',
			date: '10 April 2022/8 Ramadhan 1443 H',
			time: '08.30 - 11.00 WIB',
			speaker: `Ustadz Ali Abu Khatib, Lc.`
		}
	];

	const getBackgroundImageByIndex = (index: number) => {
		switch (index % 3) {
			case 0:
				return '/background1.jpg';
			case 1:
				return '/background2.jpg';
			case 2:
				return '/background3.jpg';
		}
	};
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
				<h2 class="text-4xl font-semibold text-white">Jadwal Pekan Studi Islam XXIII</h2>
			</div>
		</div>
		<div class="max-w-3xl mx-auto flex flex-col gap-6">
			{#each items as item, index}
				<div class="shadow-xl">
					<!-- <figure class='absolute z-0'> -->
					<!-- <img class='absolute' src={getBackgroundImageByIndex(index)} alt="pengajian" /> -->
					<!-- </figure> -->
					<div
						class="justify-end card-body rounded-xl"
						style={`background-image: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('${getBackgroundImageByIndex(
							index
						)}')`}
					>
						<h2 class="card-title text-3xl">{item.title}</h2>
						<div class="text-left mt-2 flex flex-col gap-2">
							<div class="flex gap-2">
								<Day />
								<span>{item.day}</span>
							</div>
							<div class="flex gap-2">
								<Calendar />
								<span>{item.date}</span>
							</div>
							<div class="flex gap-2">
								<Clock />
								<span>{item.time}</span>
							</div>
							<div class="flex gap-2">
								<Person />
								<span>{item.speaker}</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
