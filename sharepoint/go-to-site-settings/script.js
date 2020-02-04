javascript:(function() {
  let webUrl = '';
  if (typeof _spPageContextInfo !== 'undefined') {
    webUrl = _spPageContextInfo.webAbsoluteUrl + '/';
  } else {
    const parts = window.location.href.toLowerCase().split('/');
    const indexOfSites = parts.indexOf("sites");

    for (var i = 0; i <= indexOfSites + 1; i++ ) {
      webUrl  = parts[i] + "/";
    }
  }
  window.location.assign(webUrl + "_layouts/15/settings.aspx");
})();