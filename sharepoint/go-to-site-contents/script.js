javascript: (function() {
  var webUrl = "";
  if (typeof _spPageContextInfo !== 'undefined') {
    webUrl = _spPageContextInfo.webAbsoluteUrl + "/";
  } else {
    var parts = window.location.href.toLowerCase().split('/');
    var indexOfSites = parts.indexOf("sites");
    for (var i = 0; i <= indexOfSites + 1; i++) {
      webUrl += parts[i] + "/";
    }
  }
  window.location.assign(webUrl + "_layouts/15/viewlsts.aspx?view=14");
})();