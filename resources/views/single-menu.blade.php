@extends('layouts.app')

@section('content')
@field('data')
  <div class="container">
    <div class="relative mt-16 mb-8">
      <div class="flex flex-wrap -mx-4 justify-center">
        <div class="px-4 w-full md:w-1/2 lg:w-1/3">
          <div class="flex justify-center">
            <img src="{{ site_url() }}/wp-content/uploads/2022/06/oNUbCw7T92475Xh.png" class="h-24">
          </div>
          <div class="text-center pt-4 content">
            <p>
              Wybierasz dietę dostosowaną do Twoich potrzeb
            </p>
          </div>
        </div>
      </div>
      <div class="inset-x-0 absolute top-1/2 -translate-y-1/2 text-center text-[#f2f2f2] font-bold -z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
        Jak działa dieta z dostawą
      </div>
    </div>
  </div>
  <div class="container">
    <div class="flex flex-wrap -mx-4">
      <div class="px-4 w-full md:w-1/2">
        <div class="pt-4 content">
          <p class="font-bold">
            Dla kogo przeznaczona jest dieta pudełkowa
          </p>
          <ul>
            <li>dla osób aktywnych zawodowo</li>
          </ul>
        </div>
      </div>
      <div class="px-4 w-full md:w-1/2">
        <img src="{{ site_url() }}/wp-content/uploads/2022/06/postaw-na-diete.jpg" class="mt-8 mx-auto">
      </div>
    </div>
  </div>

@endsection
