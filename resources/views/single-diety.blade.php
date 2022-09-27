@extends('layouts.app')

@section('content')

<div class="container w-10/12">
	<div class="section-1">
		<div class="md:mx-16 lg:mx-32">

			
			@layouts('elastyczne_tresc')


			<div>

			</div>

		</div>
			@layout('sekcja1')
			@group('sekcja')
		
	<div class="flex flex-col container md:flex-row w-full justify-between items-center mx-auto mt-5">
			@php
					$obrazek1 = get_field('elastyczne_tresc')[2]['obrazek'];
				@endphp
		<div class="md:w-1/2 w-10/12 mb-4 md:mb-0">
			@image($obrazek1, 'large', ['class' => 'object-cover', 'alt' => get_the_title($obrazek1)])
		</div>
		<div class="md:w-[46%] w-10/12">
			<div class="wrapper-top justify-between flex-col md:flex-row flex mx-auto">
				<div>
					<h2 class="font-bold text-[39px] leading-[49px]">
						@sub('tytul')
					</h2>
					<h2 class="font-semibold text-[18px] text-[#0B8344] leading-[49px]">
						@sub('kalorycznosc')
					</h2>
				</div>
				<div class="flex justify-center flex-col">
					<a href="https://zamow.dietering.com/index.php/zamowienie/#/" class="flex items-center justify-center border-2 border-[#A6CD39] w-[167px] h-[44px] mb-[15px] rounded-sm " target="_blank">
					<span class="text-base font-semibold">Zamów</span>
					</a>
					<a href="https://zamow.dietering.com/index.php/zamowienie/#/" class="flex items-center justify-center text-white bg-[#0B8344] w-[167px] h-[44px] rounded-sm " target="_blank">
					<span class="text-base font-semibold ">Zapytaj dietetyka</span>
					</a>
				</div>
			</div>
			<div class="pt-[33px] text-base text-[#696969]">
				@sub('opis')
			</div>
		</div>
	</div>
</div>
		<div class="menu flex flex-col container md:flex-row justify-between w-10/12 items-start mt-[83px] mx-auto">
			<div class="menu-wrapper md:w-[46%] w-full">
				@php
					$przykladowe_menu = get_field('elastyczne_tresc')[4]['przykladowe_menu'];
				@endphp
				@foreach($przykladowe_menu as $menu)
					
						<h2 class="font-bold text-[31px] leading-[49px]">
							@php
								echo $menu['tytul'];
							@endphp
						</h2>
						<div class="menu-wrapper2 mt-[15px]">
						<h3 class="menu-title">
							@php
								echo $menu['sniadanie'];
							@endphp
						</h3>
						<div class="menu-list">
							@php
								echo $menu['menu'];
							@endphp
						</div>
		
						<h3 class="menu-title">
							@php
								echo $menu['drugie_sniadanie'];
							@endphp
						</h3>
						<div class="menu-list">
							@php
								echo $menu['menu2'];
							@endphp
						</div>
						<h3 class="menu-title">
							@php
								echo $menu['obiad'];
							@endphp
						</h3>
						<div class="menu-list">
							@php
								echo $menu['menu3'];
							@endphp
						</div>
						<h3 class="menu-title"> 
							@php
								echo $menu['podwieczorek'];
							@endphp
						</h3>
						<div class="menu-list">
							@php
								echo $menu['menu4'];
							@endphp
						</div>
						<h3 class="menu-title">
							@php
								echo $menu['kolacja'];
							@endphp
						</h3>
						<div class="menu-list">
							@php
								echo $menu['menu5'];
							@endphp
						</div>
					</div>
				@endforeach
				
				@php
					$obrazek2 = get_field('elastyczne_tresc')[5]['obrazek'];
				@endphp
				
			</div>
			<div class=" md:w-1/2 h-auto w-full mb-6 md:mb-0">
				@image($obrazek2, 'large', ['class' => 'object-cover', 'alt' => get_the_title($obrazek2)])
			</div>
		</div>
		
		@endgroup
		@endlayout

</div>

<div>

	@php
	$obrazek3 = get_field('elastyczne_tresc')[6]['obrazek'];
	@endphp
	@layout('obrazek3')
	<div class="flex flex-col md:flex-row container w-full mx-auto justify-between items-center md:mt-[83px] mt-5">
			<div class="md:w-1/2 w-full ">
				@image($obrazek3, 'large', ['class' => 'object-cover', 'alt' => get_the_title($obrazek3)])
			</div>
			<div class=" md:w-[46%] w-10/12 mt-6 md:mt-0">
				<h3 class="font-bold text-[39px] leading-[49px]">
					@php
						echo get_field('elastyczne_tresc')[7]['sekcja2'][0]['tytul'];
					@endphp
				</h3>
			
				<div class="pt-4 text-base text-[#696969]">
					@php
						echo get_field('elastyczne_tresc')[7]['sekcja2'][0]['opis'];
					@endphp
				</div>
			</div>
		</div>
		@endlayout
		@layout('sekcja2')
			@group('sekcja2')
			@endgroup
		@endlayout
		
 
		
		@endlayouts

		<div class="flex flex-col md:flex-row justify-between items-center w-1/3 mt-12 mx-auto mb-6">
					<a href="https://zamow.dietering.com/index.php/zamowienie/#/" class="flex items-center justify-center border-2 border-[#A6CD39] w-[167px] h-[44px] mb-[15px] md:mb-0 rounded-sm " target="_blank">
					<span class="text-base font-semibold">Zamów</span>
					</a>
					<a href="/kontakt/" class="flex items-center justify-center text-white bg-[#0B8344] w-[167px] h-[44px] rounded-sm " target="_blank">
					<span class="text-base font-semibold">Zapytaj dietetyka</span>
					</a>
				</div>
		

    </div>

</div>
	  
	  
	  
	  
  </div>


 

<!--  -->
	  
   

<!-- <div class="container">
<div class="bg-[#e7e7e7] mt-8 px-8 pb-8">
        <div class="pt-4 content">
<!-- 			 @field('akapit') -->
			<!-- <h4 class="text-sm text-black font-bold uppercase">ALERGENY:</h4>
			<ul style="list-style-type:none;">
				<li>1. Zboża zawierające gluten</li>
				<li>2. Skorupiaki i produkty pochodne</li>
				<li>3. Jaja i produkty pochodne</li>
				<li>4. Ryby i produkty pochodne</li>
				<li>5. Orzeszki ziemnie i produkty pochodne</li>
				<li>6. Soja i produkty pochodne</li>
				<li>7. Mleko i produkty pochodne (łącznie z laktozą)</li>
				<li>8. Orzechy</li>
				<li>9. Seler i produkty pochodne</li>
				<li>10. Gorczyca i produkty pochodne</li>
				<li>11. Nasiona sezamu i produkty pochodne</li>
				<li>12. Dwutlenek siarki i siarczyny</li>
				<li>13. Łubin i produkty pochodne</li>
				<li>14. Mięczaki i produkty pochodne</li>
			</ul>
		  </div>
      </div>
	</div> -->


@endsection
