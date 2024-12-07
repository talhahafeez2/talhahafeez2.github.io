window.onload = function() {
    var edu = [];

    $.getJSON('./info_files/edu.json', function (data) {
        for (const key in data) {
            edu.push([key, data[key]]);
        }
        add_edu(edu);
    });

    function add_edu(edu) {
        var d = document.getElementById('edu');
        edu.forEach(element => {
            var ul = document.createElement('ul');
            d.innerHTML += "<h3>My " + element[0] + " Include:</h3>"
            element[1].forEach(element2 => {
                var li = document.createElement("li");
                li.innerText = element2;
                ul.appendChild(li);
            });
            d.appendChild(ul);
        });
    }
    
}
