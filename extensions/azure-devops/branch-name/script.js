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
  const workItemNameNormalized = workItemName
    // remove non-alphanumeric
    .replace(/[^a-z0-9 ]+/ig, " ")
    // replace space to -
    .replace(/ /ig, "-")
    // remove sequence of - to one - only
    .replace(/(-)\1+/ig, "-")
    // remove - if in the beginning
    .replace(/^-/ig, "")
    // remove - if in the end
    .replace(/-$/ig, "");
  branchNameInput.value = 'feature/' + workItemNameNormalized;
  const button = document.querySelector('button[id*="create-dialog-confirm"]');
  button.disabled = false;
})();
