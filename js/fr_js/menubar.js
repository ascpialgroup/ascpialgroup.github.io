toReplace = '<a href="simpletrack.html">' +
    '<li>Simple Track</li>' +
    '</a>' +
    '<a href="membres.html">' +
    '<li>Membres</li>' +
    '</a>' +
    '<a href="https://github.com/ascpialgroup/">' +
    '<li>ASCPIAL Group sur GitHub</li>' +
    '</a>';

menubarElem = document.getElementById('menubar');
menubarElem.innerHTML = toReplace;