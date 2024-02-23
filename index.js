import { animate, inView, stagger } from "motion";

if (window.innerWidth > 991) {
    inView(".div-block-9", (_) => {
        animate( ".achievement-tile", { opacity: [0, 1] , y: [40, 0] }, { delay: stagger(0.3), duration: 1});
    });


    inView(".title-about-company", (_) => {
        animate( ".title-about-company", { opacity: [0, 1] , y: [40, 0] }, { delay: 0.3, duration: 1});
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




