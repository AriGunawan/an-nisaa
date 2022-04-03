<script lang="ts">
	import People from 'virtual:icons/fluent/people-team-24-filled';
	import Calendar from 'virtual:icons/ic/outline-calendar-month';
	import Food from 'virtual:icons/mdi/food-fork-drink';
	import Coins from 'virtual:icons/wpf/coins';
	import Book from 'virtual:icons/ic/baseline-menu-book';
	import Bag from 'virtual:icons/ion/bag-handle';
	import Communication from 'virtual:icons/fluent/communication-person-20-filled';
	import Clock from 'virtual:icons/gala/clock';

	interface agenda {
		title: string;
		date: string;
		time?: string;
		description: string;
		icon: string;
	}

	const items: Array<agenda> = [
		{
			title: 'Shalat Tarawih Berjamaah',
			date: 'Setiap hari',
			time: `Ba'da Isya`,
			description:
				'Kegiatan yang diawali dengan ceramah/kultum dari narasumber/ustadz. Kemudian dilanjutkan dengan shalat tarawih berjamaah 11 rakaat diimami oleh penceramah yang telah dijadwalkan.',
			icon: 'people'
		},
		{
			title: 'Buka Puasa Bersama',
			date: 'Setiap hari',
			time: `Menjelang berbuka puasa`,
			description:
				'Kegiatan penyediaan makanan dan minuman untuk ifthar jamaah di Masjid Baiturrahmaan. Makanan dan minuman yang disediakan merupakan donasi dari jamaah masjid yang telah dijadwalkan.',
			icon: 'food'
		},
		{
			title: 'Amil Zakat Infaq Shodaqoh',
			date: '10 hari terakhir',
			description:
				'Kegiatan penerimaan Zakat Infaq Shodaqoh dari muzakki dan mendistribusikannya kepada mustahik yang sudah terdaftar agar tepat sasaran.',
			icon: 'coins'
		},
		{
			title: `Tadarrus Bersama`,
			date: 'Setiap hari',
			time: `Ba'da tarawih`,
			description:
				'Kegiatan Tadarus Al Quran bersama di Masjid Baiturrahmaan dengan target 1 kali khotam selama bulan Ramadhan.',
			icon: 'book'
		},
		{
			title: 'Tahsin Corner',
			date: 'Setiap hari',
			time: `Ba'da tarawih`,
			description: `Kegiatan yang bertujuan untuk memfasilitasi jamaah yang ingin memperbaiki bacaan Al Quran, hukum-hukum tajwid, dan belajar langgam bacaan Al Quran. Kegiatan ini dilaksanakan berdampingan dengan kegiatan Tadarrus Bersama.`,
			icon: 'book'
		},
		{
			title: `I'tikaf`,
			date: '10 hari terakhir',
			description: `Kegiatan I'tikaf pada 10 hari terakhir Ramadhan terutama pada malam-malam ganjil. Diawali dengan kajian kemudian dilanjutkan dengan Qiyamul Lail berjamaah dengan tujuan menghidupkan malam-malam terakhir Ramadhan dan menjemput Lailatul Qodar.`,
			icon: 'people'
		},
		{
			title: 'Sahur Bersama',
			date: '10 hari terakhir',
			description: `Kegiatan sahur bersama yang termasuk dalam rangkaian acara I'tikaf. Makanan untuk Sahur merupakan shodaqoh dari para donatur yang sudah terdaftar.`,
			icon: 'food'
		},
		{
			title: 'Ramadhan Berbagi',
			date: 'Selama Bulan Ramadhan',
			description:
				'Kegiatan pengumpulan dana dari donatur yang akan dikonversikan menjadi paket-paket sembako, kemudian didistribusikan kepada kaum muslimin di lingkungan sekitar masjid yang layak menerima.',
			icon: 'bag'
		},
		{
			title: `Kultum Ba'da Subuh`,
			date: 'Setiap hari',
			time: `Ba'da Subuh`,
			description:
				`Kegiatan yang merupakan ajang pembelajaran bagi jamaah Masjid Baiturrahmaan dalam rangka kaderisasi aktivis masjid yang unggul dan terbiasa berbicara/tampil di depan jamaah/publik.`,
			icon: 'communication'
		},
		{
			title: `Kajian Ba'da Ashar`,
			date: 'Setiap Rabu',
			time: `Ba'da Ashar`,
			description:
				`Kajian rutin yang biasanya dilaksanakan setiap Rabu ba'da maghrib. Selama bulan Ramadhan, kajian ini akan dilaksanakan setiap Rabu ba'da ashar.`,
			icon: 'communication'
		},
		{
			title: `Kajian Sabtu Ba'da Subuh`,
			date: 'Setiap Sabtu',
			time: `Ba'da Subuh`,
			description:
				'Program kajian rutin yang sudah berjalan di luar Ramadhan. Selama Ramadhan kajian ini tetap dilaksanakan.',
			icon: 'communication'
		},
		{
			title: `Kajian Minggu Ba'da Subuh`,
			date: 'Setiap Minggu',
			time: `Ba'da Subuh`,
			description:
				'Program kajian rutin yang sudah berjalan di luar Ramadhan. Selama Ramadhan kajian ini tetap dilaksanakan.',
			icon: 'communication'
		},
		{
			title: 'Sholat Id',
			date: '1 Syawal',
			description:
				'Kegiatan yang merupakan puncak dari rangkaian program amaliyah Ramadhan. Kegiatan ini akan dilaksanakan pada 1 Syawal pada waktu Sholat Id dengan khotib dan Imam sholat oleh Ustadz yang sudah dijadwalkan.',
			icon: 'people'
		}
	];
</script>

<div
	class="flex flex-wrap mt-24 gap-6 justify-center flex-col md:flex-row items-center md:items-start"
>
	{#each items as item}
		<div class="rounded-xl shadow-2xl max-w-xs relative mt-16">
			<figure class="absolute -translate-x-1/2 left-1/2 top-[-65px] text-8xl">
				{#if item.icon === 'people'}
					<People />
				{:else if item.icon === 'food'}
					<Food />
				{:else if item.icon === 'coins'}
					<Coins />
				{:else if item.icon === 'book'}
					<Book />
				{:else if item.icon === 'bag'}
					<Bag />
				{:else if item.icon === 'communication'}
					<Communication />
				{/if}
			</figure>
			<div class="card-body">
				<h2 class="card-title">{item.title}</h2>
				{#if item.date}
					<div class="flex gap-2">
						<Calendar />
						<strong>{item.date}</strong>
					</div>
				{/if}
				{#if item.time}
					<div class="flex gap-2 mt-1">
						<Clock />
						<strong>{item.time}</strong>
					</div>
				{/if}
				<p class="mt-4">{item.description}</p>
			</div>
		</div>
	{/each}
</div>
