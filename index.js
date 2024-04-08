import { animate, inView, stagger } from "motion";
import SplitType from 'split-type';

// window.addEventListener('load', function () {
//     window.fsAttributes = window.fsAttributes || [];
//     window.fsAttributes.push([
//         'cmsnest',
//         (listInstances) => {

//   const dropdowns = document.querySelectorAll('.dropdown');
//   dropdowns.forEach(dropdown => {
//     let isOpen = false; // Состояние открытости аккордеона
//     const textBlock = dropdown.closest('.collection-item-4').querySelector('.text-block-13');
//     const vectorsWrapper = dropdown.querySelector('.vectors-wrapper-5');
//       textBlock.style.maxHeight = '0';
//       textBlock.style.overflow = 'hidden';
//       textBlock.style.transition = 'max-height 0.3s ease-out';
//       dropdown.style.cursor = 'pointer';

//       dropdown.addEventListener('click', function () {
//         if (!isOpen) {
//             textBlock.style.maxHeight = textBlock.scrollHeight + 'px';
//             vectorsWrapper.style.transform = 'rotate(180deg)';
//             isOpen = true;
//         } else {
//             textBlock.style.maxHeight = '0';
//             vectorsWrapper.style.transform = 'rotate(0deg)';
//             isOpen = false;
//         }
//         });

//   });

//         },
//     ]);
// });
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




