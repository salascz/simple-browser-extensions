javascript:(function() {
  const branchNameInput = document.querySelector('input[class*="item-name-input"]');
  if (!branchNameInput) {
    alert('Branch name element not found.');
    return;
  }
  const featureName = prompt('Enter name of feature you are working on:')
  const workItemName = featureName.toLowerCase();
  const workItemNameNormalized = workItemName
    .replace(/ /ig, "-")
    .replace(/'/ig, "")
  branchNameInput.value = 'feature/' + workItemNameNormalized;
  const button = document.querySelector('button[id*="create-dialog-confirm"]');
  button.disabled = false;
})();
