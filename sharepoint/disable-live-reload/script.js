javascript: (function() {
  document.dispatchEvent(new CustomEvent('LiveReloadShutDown'));
  console.log('%c LiveReload disabled', 'color: #bada55');
})();