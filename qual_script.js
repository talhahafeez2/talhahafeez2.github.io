window.onload = function() {
    var bio = {};

    $.getJSON('./info_files/bio.json', function (data) {
        for (const key in data) {
            bio[key] = data[key];
        }
        add_skills(bio);
    });

    function add_skills(bio) {
        var d = document.getElementById('bio');
        var d2 = document.getElementById('skills');
        var ul = document.createElement("ul");
        var ul2 = document.createElement("ul");
        for (const element in bio) {
            var l = document.createElement("li");
            l.innerText = element;
            l.classList.add("main_li");
            ul2.appendChild(l);
            if (bio[element] != "") {
                var l2 = document.createElement("li");
                l2.innerText = bio[element];
                l2.classList.add("inner_li1");
                ul2.appendChild(l2);
            } else {
                ul.appendChild(l);
            }
        }
        d.appendChild(ul);
        d2.appendChild(ul2);
    }
    
}
