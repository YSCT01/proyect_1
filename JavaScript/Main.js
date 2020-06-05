$(document).ready(function() {

    //------------------------------------------------------------------------------------------------------------------------------------------
    //Articles
    var js_articles = [{
            title: "Title 1",
            date: "Published " + moment().format("MMMM DD YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, quam accumsan iaculis malesuada, turpis magna tempor ex, at rhoncus ipsum elit at ligula. Nullam ut lacus a est efficitur imperdiet ut at elit. Donec in efficiturnte. Praesent tristique nunc at accumsan mattis. Aenean sit amet enim sodales, fringilla nisl quis, dignissim purus. Nulla molestie dolor id lacus egestas vulputate."
        },
        {
            title: "Title 2",
            date: "Published " + moment().format("MMMM DD YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, quam accumsan iaculis malesuada, turpis magna tempor ex, at rhoncus ipsum elit at ligula. Nullam ut lacus a est efficitur imperdiet ut at elit. Donec in efficiturnte. Praesent tristique nunc at accumsan mattis. Aenean sit amet enim sodales, fringilla nisl quis, dignissim purus. Nulla molestie dolor id lacus egestas vulputate."
        }, , {
            title: "Title 3",
            date: "Published " + moment().format("MMMM DD YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, quam accumsan iaculis malesuada, turpis magna tempor ex, at rhoncus ipsum elit at ligula. Nullam ut lacus a est efficitur imperdiet ut at elit. Donec in efficiturnte. Praesent tristique nunc at accumsan mattis. Aenean sit amet enim sodales, fringilla nisl quis, dignissim purus. Nulla molestie dolor id lacus egestas vulputate."
        },
        {
            title: "Title 4",
            date: "Published " + moment().format("MMMM DD YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, quam accumsan iaculis malesuada, turpis magna tempor ex, at rhoncus ipsum elit at ligula. Nullam ut lacus a est efficitur imperdiet ut at elit. Donec in efficiturnte. Praesent tristique nunc at accumsan mattis. Aenean sit amet enim sodales, fringilla nisl quis, dignissim purus. Nulla molestie dolor id lacus egestas vulputate."
        }
    ]

    js_articles.forEach((post, index) => {
        var p_article = `
        <article class="article">
                    <h2>${post.title}</h2>
                    <span class="date">${post.date}</span>
                    <p>${post.content} </p>
                    <a href="#" class="see_more"><button>See more</button></a>
                </article>
        `;

        $("#articles").append(p_article);
    });


    //------------------------------------------------------------------------------------------------------------------------------------------
    //Theme color
    var t_color = "white";
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
            nav_menu_action.slideUp();
            showing = false;
        } else {
            nav_menu_action.slideDown();
            showing = true;
        }
    });

});