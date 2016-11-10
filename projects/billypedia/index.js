/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-discography').css('background-color', '#635ACC').css;
        $('#section-discography').css('color', 'white');
        $('#section-discography').css('padding-right', '10px').css('padding-left', '10px');
        $('#section-discography').css('padding-bottom', '2px');
        
        $('#section-quotes').css('background-color', '#635ACC').css;
        $('#section-quotes').css('color', 'white');
        $('#section-quotes').css('padding-right', '10px').css('padding-left', '10px');
        $('#section-quotes').css('padding-bottom', '2px');
        $('.quote').css('color', 'white').css('font-style', 'italic');
        
        $('#section-praise').css('background-color', '#635ACC').css;
        $('#section-praise').css('padding-right', '10px').css('padding-left', '10px');
        $('#section-praise').css('padding-bottom', '2px');
        $('#section-praise').css('color', 'white');
        
        $('#section-bio').css('background-color', '#635ACC').css;
        $('#section-bio').css('padding-right', '10px').css('padding-left', '10px');
        $('#section-bio').css('padding-bottom', '2px');
        $('#section-bio').css('color', 'white')
        
        $('#section-bio p:last-child').remove();





        
    




        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


