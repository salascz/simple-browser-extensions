javascript:(function()%7B%0A%20%20const%20branchNameInput%20%3D%20document.querySelector%28%27input%5Bclass%2A%3D%22item-name-input%22%5D%27%29%3B%0A%20%20if%20%28%21branchNameInput%29%20%7B%0A%20%20%20%20alert%28%27Branch%20name%20element%20not%20found.%27%29%3B%0A%20%20%20%20return%3B%0A%20%20%7D%0A%20%20const%20featureName%20%3D%20prompt%28%27Enter%20name%20of%20feature%20you%20are%20working%20on%3A%27%29%0A%20%20const%20workItemName%20%3D%20featureName.toLowerCase%28%29%3B%0A%20%20const%20workItemNameNormalized%20%3D%20workItemName%0A%20%20%20%20.replace%28%2F%20%2Fig%2C%20%22-%22%29%0A%20%20%20%20.replace%28%2F%27%2Fig%2C%20%22%22%29%0A%20%20branchNameInput.value%20%3D%20%27feature%2F%27%20%2B%20workItemNameNormalized%3B%0A%20%20const%20button%20%3D%20document.querySelector%28%27button%5Bid%2A%3D%22create-dialog-confirm%22%5D%27%29%3B%0A%20%20button.disabled%20%3D%20false%3B%0A%7D)();
