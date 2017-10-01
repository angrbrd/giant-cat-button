// Event listener for our cat-button
$("#kitty-svg").on("click", function() {
    // Store our giphy API URL for a random cat image
    if ($("#grumpy-checkbox").is(":checked")) { // get random grumpy cat
        var queryURL = "http://api.giphy.com/v1/gifs/random?tag=grumpy%20cat&api_key=dc6zaTOxFJmzC&limit=1";
    } else { // get random cat
        var queryURL = "http://api.giphy.com/v1/gifs/random?tag=cat&api_key=dc6zaTOxFJmzC&limit=1";
    }

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Updating the image displayed
        $("#kitty-img").attr("src", imageUrl);
        $("#kitty-img").show();
        $("#click-instructions").hide();
    });

    // Generate random hex color code
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

    // Modify kitty svg color
    $(this).css("fill", randomColor);
});
