$(document).ready(function() {
    $("#postComment").click(function() {
        var myobj = { Name: $("#name").val(), Comment: $("#comment").val() };
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
        var url = "comment";
        $.ajax({
            url: url,
            type: "POST",
            data: jobj,
            contentType: "application/json; charset=utf-8",
            success: function(data, textStatus) {
                $("#done").html(textStatus);
            }
        })
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
        })
    })
    var url = "https://raw.githubusercontent.com/bcbooks/scriptures-json/master/book-of-mormon.json";
    console.log(url);
    $.getJSON(url, function(data) {
        console.log(data);
        var reference = '';
        var random = Math.floor((Math.random() * 62));
        var randomV = Math.floor((Math.random() * 9));
        console.log("Chapter: " + random);
        console.log("Verse: " + randomV)
        reference += "<h1>" + data.books[8].chapters[random].verses[randomV].reference + "<br>" + "</h1>";
        reference += "<p>" + data.books[8].chapters[random].verses[randomV].text + "<br>" + "</p>";
        console.log(reference);
        $("#scripture").html(reference);
    })

});
