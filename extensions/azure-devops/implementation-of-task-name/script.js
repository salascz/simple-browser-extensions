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

  const textBox = getInputByTitle('Title');
  // const textBox = document.querySelector('input[id*="dialog-label"]');
  if (!textBox) {
    alert('Title text box not found.');
    return;
  }
  const workItemTitle = document.querySelector('input[aria-label="Title field"]');
  if (!workItemTitle) {
    alert('Work item title not found.');
    return;
  }
  textBox.value = 'Implementation of ' + workItemTitle.value;
})();
