window.onload = function() {
    var edu = {};

    $.getJSON('./info_files/edu.json', function (data) {
        for (const key in data) {
            edu[key] = data[key];
        }
        console.log(edu);
        add_edu(edu);
    });

    function add_edu(edu) {
        var d = document.getElementById('edu');
        var d2 = document.getElementById('certs');
        var ul = document.createElement('ul');
        var ul2 = document.createElement('ul');
        var count = 0;
        for (const element in edu) {
            var li = document.createElement("li");
            li.innerText = element;
            li.classList.add("main_li");
            if (count == 0) {
                ul.appendChild(li);
            } else {
                ul2.appendChild(li);
            }
            console.log(edu[element]);
            for (const val in edu[element]) {
                var li2 = document.createElement("li");
                
                li2.innerText = edu[element][val];
                li2.classList.add("inner_li1");
                if (count == 0) {
                    ul.appendChild(li2);
                } else {
                    ul2.appendChild(li2);
                }
            }

            count += 1;

        }
        d.appendChild(ul);
        d2.appendChild(ul2);
        // edu.forEach(element => {
        //     var ul = document.createElement('ul');
        //     d.innerHTML += "<h3>My " + element[0] + " Include:</h3>"
        //     element[1].forEach(element2 => {
        //         var li = document.createElement("li");
        //         li.innerText = element2;
        //         ul.appendChild(li);
        //     });
        //     d.appendChild(ul);
        // });
    }
    
}
