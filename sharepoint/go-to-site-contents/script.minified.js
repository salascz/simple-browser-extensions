javascript:(function() %7Bvar webUrl %3D ""%3Bif (typeof _spPageContextInfo!%3D%3D'undefined') %7BwebUrl %3D _spPageContextInfo.webAbsoluteUrl + "%2F"%3B%7D else %7Bvar parts %3D window.location.href.toLowerCase().split('%2F')%3Bvar indexOfSites %3D parts.indexOf("sites")%3B%09for(var i %3D 0%3B i <%3D indexOfSites + 1%3B i++) %7BwebUrl +%3D parts%5Bi%5D + "%2F"%3B%7D%7Dwindow.location.assign(webUrl + "_layouts%2F15%2Fviewlsts.aspx%3Fview%3D14")%3B%7D)()%3B