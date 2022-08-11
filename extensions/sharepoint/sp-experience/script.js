javascript:(function() {
  const oldEnabled = document.cookie.indexOf('splnu=0') > -1;
  if (oldEnabled) {
    document.cookie = 'splnu=1; max-age=session; path=/';
  } else {
    document.cookie = 'splnu=0; max-age=session; path=/';
  }
  window.location.reload();
} )();