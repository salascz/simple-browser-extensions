javascript:(function() {
  const branchNameInput = document.querySelector('input[id*="branchName"]');
  if (!branchNameInput) {
    alert('Branch name element not found.');
    return;
  }
  const workItemLink = document.querySelector('div[class="la-primary-data"] a');
  if (!workItemLink) {
    alert('Work item link not found.');
    return;
  }
  const workItemName = workItemLink.innerText.toLowerCase();
  branchNameInput.value = 'feature/' + workItemName.replace(/ /ig, "-");;
})();
