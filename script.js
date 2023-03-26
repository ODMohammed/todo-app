let dark = false;

function change_theme() {
    if (dark == false) {
        document.getElementById("h1").style.backgroundImage = "url('bg-desktop-dark.jpg')";
        document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
        document.getElementById("div1").style.backgroundColor = "hsl(235, 24%, 19%)";
        document.getElementById("div1").style.color = "white";
        document.getElementById("div2").style.backgroundColor = "hsl(235, 24%, 19%)";
        document.getElementById("div2").style.color = "white";
        document.getElementById("theme_icon").src = "icon-moon.svg"
        document.getElementById("todo0").style.color = "white";
        var hrs = document.getElementsByClassName("hr_class");
        for (var i = 0; i < hrs.length; i++) {
            hrs[i].style.backgroundColor = "#ffffff2d";
        }
        dark = true;
    } else {
        document.getElementById("h1").style.backgroundImage = "url('bg-desktop-light.jpg')";
        document.body.style.backgroundColor = "white";
        document.getElementById("div1").style.backgroundColor = "white";
        document.getElementById("div1").style.color = "black";
        document.getElementById("div2").style.backgroundColor = "white";
        document.getElementById("div2").style.color = "black";
        document.getElementById("theme_icon").src = "icon-sun.svg";
        document.getElementById("todo0").style.color = "black";
        var hrs = document.getElementsByClassName("hr_class");
        for (var i = 0; i < hrs.length; i++) {
            hrs[i].style.backgroundColor = "#0000002d";
        }
        dark = false;
    }
}
document.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        alert("to finish later");
    }
});