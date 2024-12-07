window.onload = function() {
    var bio = [];

    $.getJSON('./info_files/bio.json', function (data) {
        var tech_skills = [];
        for (const key in data) {
            if (key.includes("Technical Skills: ")) {
                for (const i in data[key]) {
                    tech_skills.push([i, data[key][i]]);
                }
            }
            bio.push(key);
        }
        add_skills(bio, tech_skills);
    });

    function add_skills(bio, tech_skills) {
        var d = document.getElementById('bio');
        var ul = document.createElement("ul");
        var ul2 = document.createElement("ul");
        bio.forEach(element => {
            var l = document.createElement("li");
            ul.appendChild(l);
            l.innerText = element;
            l.classList.add("main_li");
            if (element.includes("Technical Skills: ")) {
                tech_skills.forEach(element2 => {
                    var ul3 = document.createElement("ul");
                    var l2 = document.createElement("li");
                    l2.innerText = element2[0];
                    l2.classList.add("inner_li1");
                    ul2.appendChild(l2);
                    if (element2[1] != "") {
                        ul2.appendChild(ul3);
                        var l3 = document.createElement("li");
                        l3.innerText = element2[1];
                        l3.classList.add("inner_li2");
                        ul3.appendChild(l3);
                    }
                    ul.appendChild(ul2);
                });
            }
        });
        d.appendChild(ul);
    }
    
}
