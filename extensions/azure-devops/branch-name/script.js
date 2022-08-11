javascript:(function() {
  const branchNameInput = document.querySelector('input[class*="item-name-input"]');
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
  const workItemNameNormalized = workItemName
    .replace(/ /ig, "-")
    .replace(/'/ig, "")
  branchNameInput.value = 'feature/' + workItemNameNormalized;
  const button = document.querySelector('button[id*="create-dialog-confirm"]');
  button.disabled = false;
})();
