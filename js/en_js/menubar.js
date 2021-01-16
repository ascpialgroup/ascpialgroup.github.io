toReplace = '<a href="simpletrack.html">' +
    '<li>Simple Track</li>' +
    '</a>' +
    '<a href="members.html">' +
    '<li>Members</li>' +
    '</a>' +
    '<a href="https://github.com/ascpialgroup/">' +
    '<li>ASCPIAL Group on GitHub</li>' +
    '</a>';

menubarElem = document.getElementById('menubar');
menubarElem.innerHTML = toReplace;