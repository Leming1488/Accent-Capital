import { animate, inView, stagger } from "motion";
import SplitType from 'split-type';
import Swiper from 'swiper';
import 'swiper/css';


const modalAnimation = (modal) => {
    animate(modal, {
        opacity: [0, 1],
        transform: ['translateY(100%)', 'translateY(0)']
    }, {
        duration: 0.4, // продолжительность анимации в секундах
        easing: 'ease-out' // тип смягчения анимации
    });
    modal.style.display = 'flex'; // Установка display до начала анимации
};

const modalCloseAnimation = (modal) => {
  animate(modal, {
    opacity: [1, 0],
    transform: ['translateY(0)', 'translateY(100%)']
  }, {
    duration: 0.4, // продолжительность анимации в секундах
    easing: 'ease-in' // тип смягчения анимации
  }).finished.then(() => {
    modal.style.display = 'none'; // Скрытие модального окна после окончания анимации
  });
};

const modalServices = document.querySelectorAll('[modal="services"]');


if(modalServices.length) {

    const modal = document.querySelector('.modal-services');
    const modalBg = document.querySelector('.modal-bg');
    modal.addEventListener('click', function(event) {
        if (event.target === modalBg || event.target === modal) {
            modalCloseAnimation(modal);
        }
    });
    modalServices.forEach(function(button) {
        button.addEventListener('click', function() {
            modalAnimation(modal);
        });
    });
};


const modalSupport = document.querySelectorAll('[modal="support"]');

if(modalSupport.length) {

    const modal = document.querySelector('.modal-support');
    const modalBg = document.querySelector('.modal-bg');
    modal.addEventListener('click', function(event) {
        if (event.target === modalBg || event.target === modal) {
            modalCloseAnimation(modal);
        }
    });
    modalSupport.forEach(function(button) {
        button.addEventListener('click', function() {
            modalAnimation(modal);
        });
    });
};

const modalSupportCloseButton = document.querySelector('.modal-support-close');

if(modalSupportCloseButton) {
    modalSupportCloseButton.addEventListener('click', function() {
        var modal = document.querySelector('.modal-support');
        modalCloseAnimation(modal);
});
};

const modalServicesCloseButton = document.querySelector('.modal-services-close');

if(modalServicesCloseButton) {
modalServicesCloseButton.addEventListener('click', function() {
  var modal = document.querySelector('.modal-services');
    modalCloseAnimation(modal);
});
};

// Инициализация Swiper слайдеров
if (document.querySelector(".swiper-default")) {
    const swiper = new Swiper(".swiper-default", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 18,
        freeMode: true,
        direction: "horizontal",
        loop: true,
        grabCursor: true,
        breakpoints: {
            1440: {
                slidesPerView: 3,
            },
        },
    });
}

if (document.querySelector(".team-slider")) {
    const swiper21 = new Swiper(".team-slider", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 18,
        freeMode: true,
        direction: "horizontal",
        loop: true,
        grabCursor: true,
    });
}

const animateText = (selector, delay = 0.1, duration = 0.6) => {
    const text = new SplitType(selector);
    // Предварительно устанавливаем clip-path для всех строк.
    text.lines.forEach((line) => {
        line.style.clipPath = "inset(0 100% 0 0)"; // Начальное состояние анимации
        line.style.transition = 'clip-path 0.3s ease-out';
        // Запускаем анимацию clip-path для всех строк одновременно с анимацией слов.
        setTimeout(() => {
            line.style.clipPath = 'inset(0 0 -20% 0)';
        }, delay * 100); // Вы можете настроить задержку, чтобы синхронизировать с анимацией слов.
    });

    text.words.forEach((word) => {
        word.style.transform = "translateY(100%)";
    });
    text.words.forEach((word, index) => {
        animate(word, { opacity: [0, 1], translateY: ["100%", "0%"] }, { delay: delay + index * delay, ease: [.25, 1, .5, 1], duration});
    });
};


if (window.innerWidth > 991) {

    const achievementBLock = document.querySelectorAll('.achievement-tile');
    achievementBLock.forEach((block, index) => {
        block.style.opacity = 0;
    });
    inView(".div-block-9", (_) => {
        animate( ".achievement-tile", { opacity: [ 1] , y: [40, 0] }, { delay: stagger(0.3), duration: 1});
    });



    inView(".main-block", (_) => {
        animateText('.main-title-animation');
    });

    inView(".about-company-block", (_) => {
        animateText('.title-about-company');
    });

    const blocks = document.querySelectorAll('.text-block-4');
    blocks.forEach((block) => {
        inView(block, (_) => {
            animateText(block);
        });
    });

    inView(".team-block", (_) => {
        animateText('.team-block-title');
    });

    inView(".contact-block", (_) => {
        animateText('.contact-title');
    });


    const items = document.querySelectorAll('.service-card-cms ');
    let columns = window.innerWidth > 1279 ? 3 : 2; // 3 колонки для широких экранов, 2 для узких
    const delayPerItem = 0.2; // Задержка между анимациями
    const row = Math.ceil(items.length / columns);
    const rows = new Array(row).fill().map(() => []);


    items.forEach((item, index) => {
        item.style.opacity = 0; // Устанавливаем начальное значение прозрачности
        const currentRow = index % row;
        rows[currentRow].push({item}); // Добавляем элемент в соответствующую строку
    });


    rows.forEach((currentRow) => {
        inView(currentRow[0].item, (_) => {
            currentRow.forEach((element , indexRow) => {
                animate( element.item, { opacity: [1] , y: [40, 0] }, { delay: delayPerItem * indexRow, duration: 0.5});
            });

        });
    })
}


window.addEventListener('load', function () {
    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
        'cmsnest',
        (listInstances) => {

  document.querySelectorAll('.service-submit-button').forEach(function(button) {
  button.addEventListener('click', function() {
    var modal = document.querySelector('.modal-services');
    // Использование Motion JS для анимации открытия
    animate(modal, {
      opacity: [0, 1],
      transform: ['translateY(100%)', 'translateY(0)']
    }, {
      duration: 0.4, // продолжительность анимации в секундах
      easing: 'ease-out' // тип смягчения анимации
    });
    modal.style.display = 'flex'; // Установка display до начала анимации
  });
});

  const dropdowns = document.querySelectorAll('[card-dropdown]');
  dropdowns.forEach(dropdown => {
    let isOpen = false; // Состояние открытости аккордеона
    const textBlock = dropdown.closest('[service-card]').querySelector('[card-text]');
    const vectorsWrapper = dropdown.querySelector('.vectors-wrapper-5');
                if (!textBlock.textContent.trim()) {
                    dropdown.style.display = 'none';
                    return;
                } 
      textBlock.style.maxHeight = '0';
      textBlock.style.overflow = 'hidden';
      textBlock.style.transition = 'max-height 0.3s ease-out';
      dropdown.style.cursor = 'pointer';

      dropdown.addEventListener('click', function () {
        if (!isOpen) {
            textBlock.style.maxHeight = textBlock.scrollHeight + 'px';
            vectorsWrapper.style.transform = 'rotate(180deg)';
            isOpen = true;
        } else {
            textBlock.style.maxHeight = '0';
            vectorsWrapper.style.transform = 'rotate(0deg)';
            isOpen = false;
        }
        });

  });

        },
    ]);
});

