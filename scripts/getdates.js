var year = new Date().getFullYear();

    var copyright = document.getElementById('copyright');

    copyright.innerHTML = "&copy; " + year + " Johan Villarreal, California, United States";

    var lastModified = document.getElementById('lastModified');

    lastModified.innerHTML = "Last modified on " + document.lastModified;