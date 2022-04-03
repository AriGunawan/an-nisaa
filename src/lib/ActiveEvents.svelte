<div class="flex flex-wrap items-center mt-16 justify-center">
	<div class="flex flex-wrap justify-center text-center mb-24">
		<div class="w-full px-4 mb-16">
			<h2 class="text-4xl font-semibold">Kegiatan yang sedang berlangsung</h2>
		</div>
		<div class="px-4">
			<div class="card lg:card-side">
				<figure>
					<img alt="ambulans" src="/ambulans.jpg" />
				</figure>
				<div class="card-body bg-white flex justify-between">
          <div>
            <h2 class="card-title">Pembangunan Garasi Ambulans</h2>
            <p>
              Pembangunan garasi untuk ambulans yayasan yang bertempat di halaman Masjid Baiturrahmaan
            </p>
						<div class='text-left mt-6'>
							<div>Target <strong>Rp. 100.000.0000</strong></div>
							<div class='relative h-8 flex items-center'>
								<progress class="progress progress-primary align-middle" value="73" max="100" />
								<span style='left: calc({73.5}% - 35px)' class="bg-primary text-primary-content rounded-md p-1 absolute w-[70px] text-center">73,5%</span>
							</div>
							<div>Terkumpul <strong>Rp. 73.500.000</strong></div>
						</div>
          </div>
					<div class="card-actions flex justify-end">
						<button class="btn btn-outline" on:click="{e => window.location.href = '/pages/events/pembangunan-garasi/detail'}">Detail</button>
						<button class="btn btn-primary" on:click="{e => window.location.href = '/pages/events/pembangunan-garasi/donasi'}">Ikut berdonasi</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
