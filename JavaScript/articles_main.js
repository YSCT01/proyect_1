//------------------------------------------------------------------------------------------------------------------------------------------

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
});