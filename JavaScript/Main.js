$(document).ready(function() {
    //------------------------------------------------------------------------------------------------------------------------------------------
    //Theme

    var theme = localStorage.getItem("theme_color");
    if (theme == "black") {
        $("#theme_button").attr("value", "White Theme");
        $("#theme").attr("href", "CSS/black_style.css");
    } else if (theme == "white") {
        $("#theme_button").attr("value", "Black Theme");
        $("#theme").attr("href", "CSS/white_style.css");
    }

    //--------------------------------------------------
    var t_color;
    //Theme color
    if (localStorage.getItem("theme_color") == undefined || localStorage.getItem("theme_color") == null) {
        t_color = "white";
    } else {
        t_color = theme;
    }
    var theme_button = $("#theme_button");
    theme_button.click(function() {
        if (t_color == "white") {
            theme_button.attr("value", "White Theme");
            $("#theme").attr("href", "CSS/black_style.css");
            t_color = "black";
        } else if (t_color == "black") {
            theme_button.attr("value", "Black Theme");
            $("#theme").attr("href", "CSS/white_style.css");
            t_color = "white";
        }
        localStorage.setItem("theme_color", t_color);
    });


    //------------------------------------------------------------------------------------------------------------------------------------------
    //almacenate data in the local storage
    $("#side1").submit(function() {
        var user_name = $("#l_name").val();
        localStorage.setItem("username", user_name);
        var user_pass = $("#l_password").val();
        localStorage.setItem("password", user_pass);
        location.reload();
    });

    var username_l = localStorage.getItem("username");
    var password_l = localStorage.getItem("password");

    if (username_l != null && username_l != undefined) {
        var name_login = $("#side2 h4");
        name_login.html("<div id='logged'>Welcome  <br>" + "<span id = 'username_l'> " + username_l + "</span> <br> <br> <a href='#' id='logout'> Log out </a> </div>");
        $("#side1").hide();
        $("#logged #logout").click(function() {
            localStorage.clear();
            location.reload();
        });
    }


    //------------------------------------------------------------------------------------------------------------------------------------------
    //Toggle function 
    var menu_toggle = $("#menu_toogle");
    var nav_menu_action = $("#nav_bar");
    var showing = false;
    menu_toggle.click(function() {
        if (showing) {
            menu_toggle.html("<i class='fas fa-ellipsis-v'></i>")
            nav_menu_action.slideUp();
            showing = false;
        } else {
            menu_toggle.html("<i class='fas fa-times-circle'></i>")
            nav_menu_action.slideDown();
            showing = true;
        }
    });

});