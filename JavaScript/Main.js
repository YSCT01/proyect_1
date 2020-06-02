$(document).ready(function() {



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

    //Theme color
    var t_color = "black";
    var theme_button = $("#theme_button");
    theme_button.click(function() {


        if (t_color == "black") {
            theme_button.text("Black Theme");
            $("#theme").attr("href", "CSS/white_style.css");
            t_color = "white";
        } else if (t_color == "white") {
            theme_button.text("White Theme");
            $("#theme").attr("href", "CSS/black_style.css");
            t_color = "black";
        }
    });

    //almacenate data in the local storage
    $("#side1").submit(function() {
        var user_name = $("#l_name").val();
        console.log(user_name);
        localStorage.setItem("username", user_name);
        var user_pass = $("#l_password").val();
        localStorage.setItem("password", user_pass)
    });

    var username = localStorage.getItem("username");
    var password = localStorage.getItem("password");
    console.log(username);
});