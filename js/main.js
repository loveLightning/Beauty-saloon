const slider = document.querySelector('.mySwiper');
const sliderTwo = document.querySelector('mySwiper');
const headerBurger = document.querySelector('.header__burger');
const headerBurgerLineOne = document.querySelector('.header__burger_one');
const headerBurgerLineTwo = document.querySelector('.header__burger_two');
const headerBurgerLineThree = document.querySelector('.header__burger_three');
const headerNav = document.querySelector('.header__nav');
const headerWrapper = document.querySelector('.header__wrapper');
const logo = document.querySelector('.logo');
const headerSocial = document.querySelector('.header__social');
const body = document.querySelector('body');
const headerLink = document.querySelectorAll('.header__link');

const btnClose = document.querySelector('.person__modal-close');
const btnModalOpen = document.querySelector('.person__btn');
const modalWrapper = document.querySelector('.person__modal-wrapper');

const linkMore = document.querySelector('.reviews__more');
const linkMoreLink = document.querySelector('.reviews__more-link');
const contentHiddenOne = document.querySelector('.reviews__content_two');
const contentHiddenTwo = document.querySelector('.reviews__content_three');

const treatmentContent = document.querySelectorAll('.treatment__content');
const treatmentHidden = document.querySelectorAll('.treatment__hidden');
const treatmentDesc = document.querySelectorAll('.treatment__desc');

const status = document.querySelector('.status');
const statusClose = document.querySelector('.status__close');

const headerLoader = document.querySelector('.header__loader')

window.onload = () => {
  headerLoader.style.display = 'none';
}

// Слайдер 1
let swiper = new Swiper(slider, {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
        delay: 8000,
        enabled: true,
        elay: 1,
    },
    effect: 'fade',
    breakpoints: {
      0: {
        loop: false,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        autoplay: {
          enabled: false,
          elay: 1,
        },
      },
      1198: {
        enabled: true,
        loop: true,
      }, 
    }
});

// Слайдер 2
let swiperTwo = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true,
  speed: 500,
  freeMode: false,
  breakpoints: {
    0: {
      enabled: false,
    },
    1198: {
      enabled: true,
    }
  }
});

// Бургер
headerBurger.addEventListener('click', () => {
  burgerActive();
  showMenu();
  showWrapper();
  stopScroll();
  linkClose();
})

const burgerActive = () => {
  headerBurgerLineOne.classList.toggle('active');
  headerBurgerLineTwo.classList.toggle('active');
  headerBurgerLineThree.classList.toggle('active');
  logo.classList.toggle('active');
  headerBurger.classList.toggle('active');
  headerSocial.classList.toggle('active');
}

const showMenu = () => {
  headerNav.classList.toggle('active');
}

const showWrapper = () => {
  headerWrapper.classList.toggle('active');
}

const stopScroll = () => {
  body.classList.toggle('active');
}

const linkClose = () => {
  headerLink.forEach(el => {
      el.addEventListener('click', () => {
        burgerActive();
        showMenu();
        showWrapper();
        stopScroll();
        linkClose();
      })
  });
}

// Модальное окно
btnModalOpen.addEventListener('click', () => {
  openModal();
})

const openModal = () => {
  modalWrapper.style.display = 'block';
  body.style.overflow = 'hidden';
}

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  closeOpen();
})

const closeOpen = () => {
  
  modalWrapper.style.display = 'none';
  body.style.overflow = 'auto';
}

// Скрывающийся / раскрывающийся список
linkMore.addEventListener('click', (e) => {
  e.preventDefault();
  if (linkMoreLink.innerHTML == 'View more testimonials') {
    showMore();
  } else {
    showLess();
  }
})

const showMore = () => {
  contentHiddenOne.style.display = 'flex';
  contentHiddenTwo.style.display = 'flex';
  linkMoreLink.innerHTML = 'Hide reviews';
}

const showLess = () => {
  contentHiddenOne.style.display = 'none';
  contentHiddenTwo.style.display = 'none';
  linkMoreLink.innerHTML = 'View more testimonials';
}

// hover эффекты при нажатии

treatmentContent.forEach(el => {
    el.addEventListener('click', (e) => {
      let activeTreatmentContent = e.target.getAttribute("data-price");
      for (let i = 0; i < treatmentHidden.length; i++) {
        let activeTreatmentHidden = treatmentHidden[i].getAttribute('data-hid')
        if (activeTreatmentContent == activeTreatmentHidden) {
          el.classList.toggle('active');
          treatmentHidden[i].classList.toggle('active');
        }
      }
    })
})

// Закрытие кнопки формы

statusClose.addEventListener('click', (e) => {
  e.preventDefault();
  status.style.display = 'none'
})