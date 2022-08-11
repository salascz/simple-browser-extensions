javascript:(function() {
  const textBox = document.querySelector('input[id*="dialog-label"]');
  if (!textBox) {
    alert('Title text box not found.');
    return;
  }
  const workItemLink = document.querySelector('div[class*="link-dialog"] div[class="la-primary-data"] a');
  if (!workItemLink) {
    alert('Work item link not found.');
    return;
  }
  textBox.value = 'Implementation of ' + workItemLink.innerText;
})();
