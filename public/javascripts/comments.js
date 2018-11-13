$(document).ready(function() {
    $("#postComment").click(function() {
        var myobj = { Name: $("#name").val(), Comment: $("#comment").val() };
        jobj = JSON.stringify(myobj);
        //$("#json").text(jobj);
        var url = "comment";
        $.ajax({
            url: url,
            type: "POST",
            data: jobj,
            contentType: "application/json; charset=utf-8",
            success: function(data, textStatus) {
                //$("#done").html(textStatus);
                var name = "Name: "+$("#name").val()+"<br>"+"Comment: "+$("#comment").val();
                $("#json").html(name);
            }
        });
    });
    $("#getComments").click(function() {
        $.getJSON('comment', function(data) {
            console.log(data);
            var everything = "<ul>";
            for (var comment in data) {
                com = data[comment];
                everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
            }
            everything += "</ul>";
            $("#comments").html(everything);
        });
    });

    var url = "https://raw.githubusercontent.com/bcbooks/scriptures-json/master/book-of-mormon.json";
    console.log(url);
    $.getJSON(url, function(data) {
        console.log(data);
        var reference = '';
        var books = 15;
        var chapters = [21, 32, 6, 0, 0, 0, 0, 28, 62, 15, 29, 0, 8, 14, 9];
        var randomB = Math.floor((Math.random() * 14));
        books = randomB;
        var randomC = Math.floor((Math.random() * chapters[books]));
        var randomV = Math.floor((Math.random() * data.books[randomB].chapters[randomC].verses.length));
        console.log(data.books[randomB].chapters[randomC].verses.length);
        console.log("Chapter: " + randomC);
        console.log("Verse: " + randomV);
        reference += "<h1>" + data.books[randomB].chapters[randomC].verses[randomV].reference + "<br>" + "</h1>";
        reference += "<p>" + "\"" +data.books[randomB].chapters[randomC].verses[randomV].text + "\"" + "<br>" + "</p>";
        console.log(reference);
        $("#scripture").html(reference);
    });
});
