﻿/*
    Created by WarOfDevil - 20/06/2020
*/

/* Set the width of the module list to 150px */
function openModList() {
    document.getElementById("sideModuleList").style.width = "150px";
    $("#menuToggle").removeClass("colapsed").addClass("open");
}

/* Set the width of the module list to 0px */
function closeModList() {
    document.getElementById("sideModuleList").style.width = "0";
    $("#menuToggle").removeClass("open").addClass("colapsed");
}

/* Set the width of the data menu to 250px */
function openDataMenu() {
    document.getElementById("sideDataMenu").style.width = "250px";
    document.getElementById("dbToggle").classList.add("dbToggleClose");
}

/* Set the width of the data menu to 0px */
function closeDataMenu() {
    document.getElementById("sideDataMenu").style.width = "0";
    document.getElementById("dbToggle").classList.remove("dbToggleClose");
}

/* Toggle the Data Bar icon */
function toggleDataBarIcon(bar) {
    var statusClose = bar.classList.contains("dbToggleClose");

    if (statusClose) {
        closeDataMenu();
    } else {
        openDataMenu();
    }  
} 

var editMode = false;
/* Toggle switch logic */
$(".checkbox").Sswitch({
    onSwitchChange: function() {
        console.log(editMode);
        if (editMode) {
            openDataMenu();
            closeModList();
            grid.disable();
            $("#menuToggle").removeClass("colapsed").removeClass("open");
            $("body").removeClass("edit-mode").addClass("view-mode");
            editMode = false;
        } else {
            openModList();
            closeDataMenu();
            grid.enable();
            $("body").removeClass("view-mode").addClass("edit-mode");
            editMode = true;
        }    
    }
  });

/* Init pie chart */
$(document).ready(function() {
    var ctx = $("#chart-line");
    var myLineChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Line Speed", "Congestion"],
            datasets: [{
                data: [80, 20],
                backgroundColor: [ "rgba(136, 173, 202, 1)","rgba(254, 176, 18, 1)"]
            }]
        },
        options: {
            legend: {
                
                display: true,
                position: "bottom",
                align: "center",
                labels: {
                    fontSize: 14
                }
            }
        }
    });
});