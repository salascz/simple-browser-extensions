javascript:(function() {
  const data = document.querySelector('span[class="ref branch"] span[class="name"]').innerText;
  const titleElem = document.querySelector('.pull-request-details .text');
  const descElem = document.querySelector('#pull-request-description');

  if (titleElem && descElem) {
    const message = titleElem.value;
    titleElem.value = data[0].toUpperCase() + data.slice(1);

    if (descElem.value === "") {
      descElem.value = message;
    } else {
      descElem.value = message + '\r\n' + descElem.value;
    }
  }
})();