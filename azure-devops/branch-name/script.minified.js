javascript:(function()%7B%0A%20%20const%20branchNameInput%20%3D%20document.querySelector(%27input%5Bid*%3D%22branchName%22%5D%27)%3B%0A%20%20if%20(!branchNameInput)%20%7B%0A%20%20%20%20alert(%27Branch%20name%20element%20not%20found.%27)%3B%0A%20%20%20%20return%3B%0A%20%20%7D%0A%20%20const%20workItemLink%20%3D%20document.querySelector(%27div%5Bclass%3D%22la-primary-data%22%5D%20a%27)%3B%0A%20%20if%20(!workItemLink)%20%7B%0A%20%20%20%20alert(%27Work%20item%20link%20not%20found.%27)%3B%0A%20%20%20%20return%3B%0A%20%20%7D%0A%20%20const%20workItemName%20%3D%20workItemLink.innerText.toLowerCase()%3B%0A%20%20branchNameInput.value%20%3D%20%27feature%2F%27%20%2B%20workItemName.replace(%2F%20%2Fig%2C%20%22-%22)%3B%0A%20%20const%20button%20%3D%20document.querySelector(%27button%5Bid*%3D%22ok%22%5D%27)%3B%0A%20%20button.disabled%20%3D%20false%3B%0A%7D)();