javascript:(function() {
  // common functions
  function getInputByTitle(title) {
    const labels = document.getElementsByTagName('label');
    let label = undefined;
    for (let i = 0; i < labels.length; i++) {
      const labelToTest = labels[i];
      if (labelToTest.innerText === title) {
        label = labelToTest;
        break;
      }
    }
    if (!label) {
      alert('Label with "' + title + '" title not found.');
      return undefined;
    }
    return document.querySelector('input[aria-labelledby="' + label.id +'"]');
  }

  const branchNameInput = getInputByTitle('Name *');
  if (!branchNameInput) {
    alert('Branch name element not found.');
    return;
  }
  const workItemTitle = document.querySelector('input[aria-label="Title field"]');
  if (!workItemTitle) {
    alert('Work item link not found.');
    return;
  }
  const workItemName = workItemTitle.value.toLowerCase();
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
