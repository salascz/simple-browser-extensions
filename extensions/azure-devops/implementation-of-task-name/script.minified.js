javascript:(function()%20%7B%0A%20%20%2F%2F%20common%20functions%0A%20%20function%20getInputByTitle(title)%20%7B%0A%20%20%20%20const%20labels%20%3D%20document.getElementsByTagName(%27label%27)%3B%0A%20%20%20%20let%20label%20%3D%20undefined%3B%0A%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20labels.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20const%20labelToTest%20%3D%20labels%5Bi%5D%3B%0A%20%20%20%20%20%20if%20(labelToTest.innerText%20%3D%3D%3D%20title)%20%7B%0A%20%20%20%20%20%20%20%20label%20%3D%20labelToTest%3B%0A%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20if%20(!label)%20%7B%0A%20%20%20%20%20%20alert(%27Label%20with%20%22%27%20%2B%20title%20%2B%20%27%22%20title%20not%20found.%27)%3B%0A%20%20%20%20%20%20return%20undefined%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20document.querySelector(%27input%5Baria-labelledby%3D%22%27%20%2B%20label.id%20%2B%27%22%5D%27)%3B%0A%20%20%7D%0A%0A%20%20const%20textBox%20%3D%20getInputByTitle(%27Title%27)%3B%0A%20%20%2F%2F%20const%20textBox%20%3D%20document.querySelector(%27input%5Bid*%3D%22dialog-label%22%5D%27)%3B%0A%20%20if%20(!textBox)%20%7B%0A%20%20%20%20alert(%27Title%20text%20box%20not%20found.%27)%3B%0A%20%20%20%20return%3B%0A%20%20%7D%0A%20%20const%20workItemTitle%20%3D%20document.querySelector(%27input%5Baria-label%3D%22Title%20field%22%5D%27)%3B%0A%20%20if%20(!workItemTitle)%20%7B%0A%20%20%20%20alert(%27Work%20item%20title%20not%20found.%27)%3B%0A%20%20%20%20return%3B%0A%20%20%7D%0A%20%20textBox.value%20%3D%20%27Implementation%20of%20%27%20%2B%20workItemTitle.value%3B%0A%7D)()%3B%0A