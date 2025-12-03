document.addEventListener('DOMContentLoaded', function () {
    const variantNumber = 7;
    const firstIndex = (variantNumber % 10) + 1;
    const secondIndex = firstIndex + 1;

    const firstElement = document.getElementById('elem' + firstIndex);
    const secondElement = document.querySelector('#elem' + secondIndex);

    function toggleColors(element) {
        if (!element) {
            return;
        }

        const toggled = element.dataset.toggled === '1';

        if (toggled) {
            element.style.backgroundColor = '';
            element.style.color = '';
            element.dataset.toggled = '0';
        } else {
            element.style.backgroundColor = '#1f73d0';
            element.style.color = '#ffffff';
            element.dataset.toggled = '1';
        }
    }

    if (firstElement) {
        firstElement.addEventListener('click', function () {
            toggleColors(firstElement);
        });
    }

    if (secondElement) {
        secondElement.addEventListener('click', function () {
            toggleColors(secondElement);
        });
    }

    const btnAdd = document.getElementById('btnAdd');
    const btnIncrease = document.getElementById('btnIncrease');
    const btnDecrease = document.getElementById('btnDecrease');
    const btnDelete = document.getElementById('btnDelete');
    const cityLink = document.getElementById('cityLink');
    const imageSrc = 'https://uamedtours.com.ua/storage/images/0b72f48967d33b504c7b742bba050f4d-778w.jpg';

    function getImage() {
        return document.getElementById('cityImage');
    }

    btnAdd.addEventListener('click', function () {
        if (!getImage()) {
            const img = document.createElement('img');
            img.id = 'cityImage';
            img.src = imageSrc;
            img.alt = 'Одеса';
            img.width = 500;
            cityLink.appendChild(img);
        }
    });

    btnIncrease.addEventListener('click', function () {
        const img = getImage();
        if (img) {
            img.width = img.width + 50;
        }
    });

    btnDecrease.addEventListener('click', function () {
        const img = getImage();
        if (img && img.width > 100) {
            img.width = img.width - 50;
        }
    });

    btnDelete.addEventListener('click', function () {
        const img = getImage();
        if (img) {
            img.remove();
        }
    });
});
