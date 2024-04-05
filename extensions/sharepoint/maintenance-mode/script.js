javascript: (function() {
  const urlHashParts = location.href.split("#");
  const originalHashParams = urlHashParts.length === 2 ? "#" + urlHashParts[1] : "";

  const urlQueryParts = urlHashParts[0].split("?");
  const originalQueryParams = urlQueryParts.length === 2 ? "&" + urlQueryParts : ""

  const url = urlQueryParts[0] + "?maintenancemode=true" + originalQueryParams + originalHashParams;
  window.location.assign(url);
})();
