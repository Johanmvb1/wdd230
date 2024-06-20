window.onload = function(lastModified) {
    
    var lastModified = new Date(document.lastModified);

    var currentTime = new Date();

    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    var formattedLastModified = lastModified.toLocaleDateString('en-US', options);
    var formattedCurrentTime = currentTime.toLocaleDateString('en-US', options);


    document.getElementById('lastModified').textContent = "Last Modified: " + formattedLastModified;
    document.getElementById('currentTime').textContent = "Current Time: " + formattedCurrentTime;
}
