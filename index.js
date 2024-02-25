import { animate, inView, stagger } from "motion";
import SplitType from 'split-type';


const animateText = (selector, delay = 0.1, duration = 0.6) => {
    const text = new SplitType(selector);
    text.lines.forEach((line) => {
        line.style.overflow = "hidden";
    });
    text.words.forEach((word) => {
        word.style.transform = "translateY(100%)";
    });
    text.words.forEach((word, index) => {
        animate( word, { opacity: [0, 1] , translateY: ["100%", "0%"] }, { delay: delay + index * delay, ease: [.25, 1, .5 ,1], duration}).finished.then(() => {
            const parentLine = word.closest('.line');
            if (parentLine) {
                parentLine.style.overflow = "initial";
            }
        });
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




