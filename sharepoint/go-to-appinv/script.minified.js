javascript:%20(function()%20%7B%0A%20%20let%20webUrl%20%3D%20%27%27%3B%0A%20%20if%20(typeof%20_spPageContextInfo%20!%3D%3D%20%27undefined%27)%20%7B%0A%20%20%20%20webUrl%20%3D%20_spPageContextInfo.webAbsoluteUrl%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20const%20siteUrl%20%3D%20location.protocol%20%2B%20%27%2F%2F%27%20%2B%20location.host%20%2B%20location.pathname%3B%0A%20%20%20%20const%20parts%20%3D%20siteUrl.toLowerCase().split(%27%2F%27)%3B%0A%20%20%20%20const%20indexOfSites%20%3D%20parts.indexOf(%22sites%22)%3B%0A%20%20%20%20webUrl%20%3D%20parts.slice(0%2C%20indexOfSites%20%2B%202).join(%27%2F%27)%3B%0A%20%20%7D%0A%20%20window.location.assign(webUrl%20%2B%20%22%2F_layouts%2F15%2Fappinv.aspx%22)%3B%0A%7D)()%3B