javascript:(function() %7B%0D%0Aconst data %3D document.querySelector('span%5Bclass%3D"ref branch"%5D span%5Bclass%3D"name"%5D').innerText%0D%0Aconst titleElem %3D document.querySelector('.pull-request-details .text')%3B%0D%0Aconst descElem %3D document.querySelector('%23pull-request-description')%3B%0D%0Aif (titleElem %26%26 descElem) %7B%0D%0A%09const message %3D titleElem.value%3B%0D%0A%09titleElem.value %3D data%5B0%5D.toUpperCase() + data.slice(1)%3B%0D%0A%09if(descElem.value %3D%3D "")%7B%0D%0A%09%09descElem.value %3D message%3B%0D%0A%09%7Delse%7B%0D%0A%09%09descElem.value %3D message + '%5Cr%5Cn' + descElem.value%3B%0D%0A%09%7D%0D%0A%7D%0D%0A%7D )();