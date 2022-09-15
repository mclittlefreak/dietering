{{--
  Template Name: FAQ
--}}

@extends('layouts.app')

@section('content')

<div class="w-10/12 container mx-auto lg:mb-6 mb-4">

<h1 class="h1 font-bold mt-8"> FAQ - najczęściej zadawane pytania
</h1>
    <div class="faq-list">
 
        @foreach (get_field('faq') as $faq)

            <div class="faq relative pt-8 after:h-px after:w-full after:my-8 after:absolute after:block after:top-full after:bg-gray-400 after:content-[""]">
                <p class="font-semibold my-9 h1 leading-8 text-[#028523] ">{{ $faq['row']['pytanie'] }}</p>
                <p class="answer">{{ $faq['row']['odpowiedz'] }}</p>
        </div>    
        @endforeach
    </div>
</div>

@endsection