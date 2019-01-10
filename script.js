function edit() {
    var person = prompt("Please enter your name", "Harry Potter");

    if (person != null) {
        document.getElementById("h1name").innerHTML = '<b>' + person + '</b>';
    }
}
