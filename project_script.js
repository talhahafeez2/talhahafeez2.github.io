window.onload = function() {
    var projects = [];

    $.getJSON('./info_files/projects.json', function (data) {
        for (const key in data) {
            projects.push([key, data[key]]);
        }
        add_project(projects);
    });

    function add_project(projects) {
//         <div class="dropdown">
//   <span>Mouse over me</span>
//   <div class="dropdown-content">
//     <p>Hello World!</p>
//   </div>
// </div>
        var d = document.getElementById('main_div');
        var counter = 1;
        projects.forEach(element => {
            var project_info = element[0];
            var project_title = project_info.split(",")[0].split(":")[0];
            var project_duration = project_info.split(",")[0].split(":")[1];
            var project_company = project_info.split(",")[1].split(":")[0];
            var project_location = project_info.split(",")[1].split(":")[1] + ", " + project_info.split(",")[2];

            var main_div = "<div id='project" + counter  + "' onclick='display_points(" + counter + ")'>";
            var project1_div = "<div style='margin-left: 40px;margin-right:40px;margin-bottom:0;'>";
            project1_div += "<h5 style='text-align:left;width:45%;display:inline-block;margin-bottom:0;font-size:medium;'>" + project_title + "</h5>";
            project1_div += "<h5 style='text-align:right;width:45%;display:inline-block;margin-bottom:0;font-size:smallest;'>" + project_duration + "</h5>";
            project1_div += "</div>";
            main_div += project1_div;

            var project2_div = "<div style='margin-left: 40px;margin-right:40px;margin-top:0;'>";
            project2_div += "<h5 style='text-align:left;width:45%;display:inline-block;margin-top:0;font-size:smallest;'>" + project_company + "</h5>";
            project2_div += "<h5 style='text-align:right;width:45%;display:inline-block;margin-top:0;font-size:smallest;'>" + project_location + "</h5>";
            var down_div = "<i id='arrow" + counter + "' style='text-align:right;width:10%;display:inline-block'>&#x25BC;</i>";
            project2_div += down_div;
            project2_div += "</div>";
            main_div += project2_div;

            

            main_div += "</div>";
            d.innerHTML += main_div;


            var project_points = element[1];
            var hidden_div = "<div id='" + counter + "' style='display:none;margin-left: 50px;margin-right:50px;margin-bottom:20px;'>";
            var ul = document.createElement('ul');
            project_points.forEach(element => {
                var li = document.createElement("li");
                li.innerText = element;
                ul.appendChild(li);
            });
            hidden_div += ul.innerHTML += "</div>";
            d.innerHTML += hidden_div;
            counter += 1;
        });
    }
}

function display_points(id) {
    var hidden_div = document.getElementById("" + id);
    var arrow_div = document.getElementById("arrow" + id);
    if (hidden_div.style.display == "none") {
        hidden_div.style.display = "block";
        arrow_div.innerHTML = "&#x25B2;"
    } else {
        hidden_div.style.display = "none";
        arrow_div.innerHTML = "&#x25BC;"
    }
}
    