window.onload = function() {
    var experience = [];

    $.getJSON('./info_files/experience.json', function (data) {
        for (const key in data) {
            experience.push([key, data[key]]);
        }
        add_experience(experience);
    });

    function add_experience(experience) {
//         <div class="dropdown">
//   <span>Mouse over me</span>
//   <div class="dropdown-content">
//     <p>Hello World!</p>
//   </div>
// </div>
        var d = document.getElementById('main_div');
        var counter = 1;
        experience.forEach(element => {
            var job_info = element[0];
            var job_title = job_info.split(",")[0].split(":")[0];
            var job_duration = job_info.split(",")[0].split(":")[1];
            var job_company = job_info.split(",")[1].split(":")[0];
            var job_location = job_info.split(",")[1].split(":")[1] + ", " + job_info.split(",")[2];

            var main_div = "<div id='job" + counter  + "' onclick='display_points(" + counter + ")'>";
            var job1_div = "<div style='margin-left: 40px;margin-right:40px;margin-bottom:0;'>";
            job1_div += "<h5 style='text-align:left;width:45%;display:inline-block;margin-bottom:0;font-size:medium;'>" + job_title + "</h5>";
            job1_div += "<h5 style='text-align:right;width:45%;display:inline-block;margin-bottom:0;font-size:smallest;'>" + job_duration + "</h5>";
            job1_div += "</div>";
            main_div += job1_div;

            var job2_div = "<div style='margin-left: 40px;margin-right:40px;margin-top:0;'>";
            job2_div += "<h5 style='text-align:left;width:45%;display:inline-block;margin-top:0;font-size:smallest;'>" + job_company + "</h5>";
            job2_div += "<h5 style='text-align:right;width:45%;display:inline-block;margin-top:0;font-size:smallest;'>" + job_location + "</h5>";
            var down_div = "<i id='arrow" + counter + "' style='text-align:right;width:10%;display:inline-block'>&#x25BC;</i>";
            job2_div += down_div;
            job2_div += "</div>";
            main_div += job2_div;

            

            main_div += "</div>";
            d.innerHTML += main_div;


            var job_points = element[1];
            var hidden_div = "<div id='" + counter + "' style='display:none;margin-left: 50px;margin-right:50px;margin-bottom:20px;'>";
            var ul = document.createElement('ul');
            job_points.forEach(element => {
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
    