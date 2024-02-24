import { animate, inView, stagger } from "motion";
import SplitType from 'split-type';


if (window.innerWidth > 991) {

    const achievementBLock = document.querySelectorAll('.achievement-tile');

    achievementBLock.forEach((block, index) => {
        block.style.opacity = 0;
    });

    inView(".div-block-9", (_) => {
        animate( ".achievement-tile", { opacity: [ 1] , y: [40, 0] }, { delay: stagger(0.3), duration: 1});
    });


    const blocks = document.querySelectorAll('.text-block-4');

    // Итерируем через каждый блок
    blocks.forEach((block) => {
        // Применяем функцию inView к каждому блоку отдельно
        inView(block, (_) => {
            // Инициализируем SplitType для текущего блока
            const text = new SplitType(block);
            text.lines.forEach((line, index) => {
                // Анимируем каждую линию с учетом индивидуальной задержки и продолжительности
                animate(line, { opacity: [0, 1], y: [40, 0] }, { delay: 0.2 + index * 0.2, duration: 0.4 });
            });
        });
    });

    inView(".main-block", (_) => {
        const text = new SplitType('.main-title-animation');
        text.lines.forEach((line, index) => {
            animate( line, { opacity: [0, 1] , y: [40, 0] }, { delay: 0.2 + index * 0.2, duration: 0.8});
        });
    });

    inView(".about-company-block", (_) => {
        const text = new SplitType('.title-about-company');
        text.lines.forEach((line, index) => {
            animate( line, { opacity: [0, 1] , y: [40, 0] }, { delay: 0.2 + index * 0.2, duration: 0.8});
        });
    });

    inView(".team-block", (_) => {
        const text = new SplitType('.team-block-title');
        text.lines.forEach((line, index) => {
            animate( line, { opacity: [0, 1] , y: [40, 0] }, { delay: 0.2 + index * 0.2, duration: 0.8});
        });
    });

    inView(".contact-block", (_) => {
        const text = new SplitType('.contact-title');
        text.lines.forEach((line, index) => {
            animate( line, { opacity: [0, 1] , y: [40, 0] }, { delay: 0.2 + index * 0.2, duration: 0.8});
        });
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




