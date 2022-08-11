javascript: (function() {
  let webUrl = '';
  if (typeof _spPageContextInfo !== 'undefined') {
    webUrl = _spPageContextInfo.webAbsoluteUrl;
  } else {
    const siteUrl = location.protocol + '//' + location.host + location.pathname;
    const parts = siteUrl.toLowerCase().split('/');
    const indexOfSites = parts.indexOf("sites");
    webUrl = parts.slice(0, indexOfSites + 2).join('/');
  }
  window.location.assign(webUrl + "/_layouts/15/appinv.aspx");
})();
