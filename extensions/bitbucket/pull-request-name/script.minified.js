javascript:(function()%20%7B%0A%20%20const%20data%20%3D%20document.querySelector(%27span%5Bclass%3D%22ref%20branch%22%5D%20span%5Bclass%3D%22name%22%5D%27).innerText%3B%0A%20%20const%20titleElem%20%3D%20document.querySelector(%27.pull-request-details%20.text%27)%3B%0A%20%20const%20descElem%20%3D%20document.querySelector(%27%23pull-request-description%27)%3B%0A%20%20if%20(titleElem%20%26%26%20descElem)%20%7B%0A%20%20%20%20const%20message%20%3D%20titleElem.value%3B%0A%20%20%20%20titleElem.value%20%3D%20data%5B0%5D.toUpperCase()%20%2B%20data.slice(1)%3B%0A%20%20%20%20if%20(descElem.value%20%3D%3D%3D%20%27%27)%20%7B%0A%20%20%20%20%20%20descElem.value%20%3D%20message%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20descElem.value%20%3D%20message%20%2B%20%27%5Cr%5Cn%27%20%2B%20descElem.value%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)()%3B