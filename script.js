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
        const todo = document.getElementById("todo0").value;
        if (todo != "") {
            document.getElementById("todo0").value = '';
            addtodo(todo);
        }
    }
});

function addtodo(todo) {
    const ul = document.getElementById("p_list");
    const tb = document.createElement("table");
    const tr = document.createElement("tr");
    const thl = document.createElement("th");
    const thr = document.createElement("th");
    const li = document.createElement("li");
    const hr = document.createElement("hr");
    const deleteBtn = document.createElement('button');
    const dlImg = document.createElement("img");

    tb.style.width = "100%";
    thl.style.width = "90%";
    thr.style.width = "10%";
    thr.style.textAlign = "right";
    dlImg.src = "icon-cross.svg";
    hr.classList.add("hr_class");
    thl.innerText = todo;

    thr.appendChild(deleteBtn);
    deleteBtn.appendChild(dlImg);
    tr.appendChild(thl);
    tr.appendChild(thr);
    tb.appendChild(tr);
    li.appendChild(tb);
    ul.appendChild(li);
    ul.appendChild(hr);

    deleteBtn.addEventListener('click', () => {
        li.remove();
        hr.remove();
    });
}