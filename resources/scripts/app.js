import {domReady} from '@roots/sage/client';
import Swiper, {Pagination} from 'swiper';

Swiper.use([Pagination]);
import IMask from 'imask';

/**
 * app.main
 */
const main = async (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  const menu = document.querySelector('.nav1');
  menu.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    document.querySelector('.nav1').classList.toggle.active();
  });

  const postcode = document.getElementById('postcode');
  const city = document.getElementById('city');
  const data = document.getElementById('data');
  const diet = document.querySelectorAll('.diet');
  const error404 = document.getElementById('error404');

  if (data) {
    IMask(postcode, {mask: '00-000'});
    let timeout = false;
    const search = () => {
      if(timeout) clearTimeout(timeout);
      document.querySelector('#data .yes').style.display = 'none';
      document.querySelector('#data .no').style.display = 'none';
      document.querySelector('#data .loading').style.display = 'block';
      data.classList.remove('hidden');
      timeout = setTimeout(() => {
        if (postcode.value || city.value) {
          const form = new FormData();
  
          form.append('action', 'check');
          form.append('postcode', postcode.value);
          form.append('city', city.value);
  
          fetch('/wp-admin/admin-ajax.php', {
            method: 'post',
            body: form
          })
          .then((response) => response.json())
          .then(data=>{
             document.querySelector('#data .loading').style.display = 'none';
            if(data.postcode || data.city){
              document.querySelector('#data .yes').style.display = 'block';
            } else {
              document.querySelector('#data .no').style.display = 'block';
            }
          })
          .catch((error) => {
            console.error(error);
          });
        }
      }, 500);
      //   diet.forEach(value => {
      //     if (value.dataset.postcode.includes(postcode.value) && value.dataset.city.includes(city.value)) {
      //       value.classList.remove('hidden');
      //     } else {
      //       value.classList.add('hidden');
      //     }
      //   });
      // } else {
      //   diet.forEach(value => value.classList.add('hidden'));
      // }
      // const visibility = [];
      // diet.forEach(value => visibility.push(value.classList.contains('hidden') ? true : false));
      // if (visibility.every(value => value === true)) {
      //   data.classList.add('hidden');
      //   error404.classList.remove('hidden');
      // } else {
      //   data.classList.remove('hidden');
      //   error404.classList.add('hidden');
      // }
    }
    postcode.addEventListener('keyup', ()=>{
      city.value = '';
      search();
    });
    city.addEventListener('keyup', ()=>{
      postcode.value = '';
      search();
    });
  }

  document.querySelectorAll('[data-nav]').forEach(value => {
    value.addEventListener('click', () => {
      document.getElementById('nav').classList.toggle('active');
    });
  });

  if (document.getElementById('swiper')) {
    new Swiper('#swiper', {
      modules: [Pagination],
      pagination: {
        el: '#pagination',
        clickable: true
      },
      loop: true,
		spaceBetween: 32,
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  }

  if (document.getElementById('swiper-comment')) {
    new Swiper('#swiper-comment', {
      modules: [Pagination],
      pagination: {
        el: '#pagination',
        clickable: true
      },
      loop: true,
		spaceBetween: 20,
      breakpoints: {
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      }
    });
  }

  if (document.getElementById('diety')) {
    new Swiper('#diety', {
      modules: [Pagination],
      pagination: {
        el: '#diety-pagination',
        clickable: true
      },
      loop: true,
		spaceBetween: 32,
      breakpoints: {
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1400: {
          slidesPerView: 4
        }
      }
    });
  }
    document.querySelectorAll('.diet.block .content, #diety .content-diet .content').forEach(element => {
      const content = element.querySelector('p');
      const toggle = document.createElement('span');
      toggle.classList.add('opis-toggle');
      content.style.display = 'none';
      toggle.innerText = 'Rozwiń opis';
      element.append(toggle);
      toggle.addEventListener('click', (e)=>{
        e.preventDefault();
        if(toggle.classList.contains('on')){
          content.style.display = 'none';
          toggle.innerText = 'Rozwiń opis';
        } else {
          content.style.display = 'block';
          toggle.innerText = 'Zwiń opis';
        }
        toggle.classList.toggle('on');
        return false;
      });
    });
  

  // application code
};

let faq = document.querySelectorAll(".faq-list .faq");
faq.forEach((event) => {
   event.addEventListener('click', () => {
      if (event.classList.contains("active")) {
         event.classList.remove("active");
      } else {
         event.classList.add("active");
      }
   })
})

let menu = document.querySelectorAll(".menu-title");
menu.forEach((event) => {
   event.addEventListener('click', () => {
      if (event.classList.contains("active")) {
         event.classList.remove("active");
      } else {
         event.classList.add("active");
      }
   })
})

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
import.meta.webpackHot?.accept(main);
