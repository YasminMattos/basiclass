var body = document.getElementById('body');
body.setAttribute('style', 'background-color: #A9F5F2');


var container = document.getElementById('container');

var title = document.createElement('h1');
title.textContent = 'Live Australia!';
title.style.fontFamily = 'Pacifico, cursive';
title.style.textAlign = 'center';
container.appendChild(title);

var figure = document.createElement('figure');
figure.style.textAlign = 'center';
container.appendChild(figure);

var img = document.createElement('img');
img.setAttribute('src', 'assets/images/koala.jpg');
img.setAttribute('alt', 'koala');
img.style.width = '500px'
figure.appendChild(img);

var description = document.createElement('figcaption');
description.textContent = 'The koala is a very cute and little animal found in Autralia';
figure.appendChild(description);

function changeImage() {
    img.setAttribute('src', 'http://www.lavanguardia.com/r/GODO/LV/p3/WebSite/2016/09/22/Recortada/img_cvillalonga_20160125-143449_imagenes_lv_getty_cebra_leon-kt8D--656x436@LaVanguardia-Web.jpg');
}

img.addEventListener('click', changeImage);
