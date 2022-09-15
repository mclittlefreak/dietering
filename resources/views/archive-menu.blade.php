@extends('layouts.app')

@section('content')
    <div class="container pt-16">
      <div class="px-8 pb-8 bg-white/75">
        <h1 class="font-bold title h1">
          Aktualne menu diet Dietering
        </h1>
		  @php
		  	$s = $_GET['date'] ?? date('d.m.Y');
		  @endphp
		  @query(['s' => $s, 'post_type' => 'menu'])
		  @hasposts
        <div class="content">
          <p>
			  @posts
			  @title
			  @endposts
          </p>
        </div>
		  @endhasposts
      </div>
    </div>
  </div>
  <div class="container">
    <div class="text-center pt-4 content">
      <p>
        Prezentujemy nasze jadłospisy, menu na poszczególne dni.
      </p>
    </div>
	  
	  
	  
	  
 		
		 
		 
		
 	  
	  
	  
	  
	  
    <div class="flex justify-center -mx-4">
		
		
		
		
		
		
		
		
		
		@php
		
		$from = isset($_GET['from']) ? $_GET['from'] : 'now';
		$to = isset($_GET['to']) ? $_GET['to'] : '+7 day';
 

$meta_query = ['data' => ['key' => 'data', 'value' => [date('Y-m-d', strtotime($from)), date('Y-m-d', strtotime($to))], 'compare' => 'BETWEEN', 'type' => 'DATE']];
 

@endphp
		
		
		
		
		@query(['post_type' => 'menu', 'posts_per_page' => -1, 'order' => 'ASC', 'orderby' => 'data', 'meta_query' => $meta_query])
			  @posts
		@php
		$date = explode(' ', get_the_title())[0];
		@endphp
			  
			  
      <a href="{{ get_post_type_archive_link('menu') }}?date={{ $date }}" class="mt-8 mx-4 text-sm duration-150 rounded-full p-4 font-bold @if($date === $s) bg-[#028523] text-white @else hover:text-white hover:bg-[#028523] bg-[#b7f15f] text-[#028523] @endif">{{ $date }}</a>
		@endposts
    </div>
  </div>
@query(['s' => $s, 'post_type' => 'menu'])
@hasposts
  <div class="bg-[#f2f2f2] mt-8">
    <div class="container pb-8">
		
		@posts
		@fields('ostatnie_wpisy')
      <h2 class="font-bold title h2">
		  @sub('tekst')  
      </h2>
      <div class="mt-8 px-8 pb-8 bg-white">
        <div class="flex flex-wrap -mx-4">
			@fields('pole_powtarzalne')
          <div class="px-4 w-full md:w-1/2 lg:w-1/5">
            <div class="pt-4 content">
              <p class="font-bold text-[#028523]">
				  @sub('tekst')
              </p>
              <p>
				  @sub('obszar_tekstowy')
              </p>
            </div>
            <div class="border-t border-[#f2f2f2] border-solid mt-4 pt-4 text-sm text-[#2d2d2d]">
				@sub('liczba')
            </div>
          </div>
			@endfields
        </div>
      </div>
		@endfields
      <div class="flex justify-center">
        <a href="https://zamow.dietering.com/index.php/zamowienie/#/" class="flex items-center mt-8 duration-150 bg-[#028523] p-4 rounded-full hover:bg-[#2d2d2d]" target="_blank">
          <span class="text-sm text-white font-bold uppercase">Zamów zestaw testowy</span>
        </a>
		  @if(is_user_logged_in())
		  <button class="ml-4 flex items-center mt-8 duration-150 bg-[#028523] p-4 rounded-full hover:bg-[#2d2d2d]" onclick="window.print();return false;">
          <span class="text-sm text-white font-bold uppercase">Drukuj</span>
        </button>
		  @endif
      </div>
      <div class="bg-[#e7e7e7] mt-8 px-8 pb-8">
        <div class="pt-4 content">
<!-- 			@field('akapit') -->
			<h4 class="text-sm text-black font-bold uppercase">ALERGENY:</h4>
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
		@endposts
    </div>
  </div>
@endhasposts
@endsection
