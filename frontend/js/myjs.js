/* Javascript */
//----------------------------------------------------------------------------------------------------------------------
/* Header */
$(document).ready(function(){
    $('#booking_title').css("margin-left","-100%").animate({"margin-left": "0%"},1000)
    $('#nav li img').hide().fadeIn(2000)
    $('#site-header').hide().toggle(2000)
    // $('#booking_title').animate({width:'toggle'},4000)


    //about is also in the viewport on refresh
    $('#aboutDiv').css("margin-left","-100%").animate({"margin-left": "0%"},3500)
    $('#aboutDiv').addClass('start')

    //Events
    //$('#container_past_events').css("margin-left","-200%").animate({"margin-left": "0%"},1000)

    //contact us
    //$('#contactBox').css("margin-right","-200%").animate({"margin-right": "0%"},1000) //yes this is perfectly correct behaviour lol

    //book a table
    //$('#bookTableInner').css("margin-right","-200%").animate({"margin-right": "0%"},1000)


    //contact
    //$('#opening').css("margin-right","-200%").animate({"margin-right": "0%"},1500)
    //$('#contactInfo').css("margin-left","-200%").animate({"margin-left": "0%"},1500)


});

//checks when there is a scrollevent if the element we are interessted in is in the viewport
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

//this is such an ugly hack to have an extra function for each

// Check if it's time to start the animation.
function checkAnimationPastEvents() {
    var $elem = $('#container_past_events');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {

        // Get initial margin
        var margin_left =  Math.round(parseFloat($elem.css("margin-left"))/$elem.parent().width()*100)

        // Start the animation
        $elem.addClass('start') //this makes it possible for the animationt to only run once
        $('#container_past_events').css("margin-left","-100%").animate({"margin-left":  margin_left +"%"},2000)
    }
}

function checkAnimationContact() {
    var $elem = $('#contactBox');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start')
        $('#contactBox').css("margin-right","-100%").animate({"margin-right": "0%"},2000) //yes this is perfectly correct behaviour lol
    }
}

function checkAnimationBook() {
    var $elem = $('#bookTableInner');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start')
        $('#bookTableInner').css("margin-right","-200%").animate({"margin-right": "0%"},2000)
    }
}

function checkAnimationInfo() {
    var $elem = $('#contactInfo');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start')
        $('#opening').css("margin-left","-100%").animate({"margin-left": "0%"},1500)
        $('#contactInfo').css("margin-left","1000%").animate({"margin-left": "0%"},1500)
    }
}
function checkAnimationMenu() {
    var $elem = $('#menu');
    var menuHeight = $elem.height();
    if (isElementInViewport($elem)) {

        // Get the scroll position of the page.
        var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        var viewportTop = $(scrollElem).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        var viewportMid = (viewportTop + viewportBottom) / 2;

        // Get the position of the element on the page.
        var elemTop = Math.round( $elem.offset().top );
        //position of midpoints
        var appetizers = elemTop + menuHeight/8;
        var pasta = elemTop + (3*menuHeight)/8;
        var meat = elemTop + (5*menuHeight)/8;
        var dessert = elemTop + (7*menuHeight)/8;

        //display appetizers
        if(viewportMid < pasta){
            //highlight appetizers
            $('#appetizers').css("background-color","rgba(0, 100, 0,0.4)");
            $('#pasta').css("background-color","#443333");
            $('#meat').css("background-color","#443333");
            $('#dessert').css("background-color","#443333");
            //change images (necessary when scrolling back up)
            $('#pic01').css({"background":"url(../images/pic01.jpg) no-repeat center / cover",
            "background-size":"100% 100%",
            "border-radius":"5px"});
            $('#pic01text').html("<a id= pic01text href=#popup1> Bruschette with Tomatoes </a>");
            $('#pic02').css({"background":"url(../images/pic03.jpg) no-repeat center / cover",
                "background-size":"100% 100%",
                "border-radius":"5px"});
            $('#pic02text').html("<a id= pic02text href=#popup2> Eggplants </a>");
            $('#pic03').css({"background":"url(../images/pic05.jpg) no-repeat center / cover",
                "background-size":"100% 100%",
                "border-radius":"5px"});
            $('#pic03text').html("<a id= pic03text href=#popup3> Meatballs </a>");
            $('#pic04').css({"background":"url(../images/pic02.jpg) no-repeat center / cover",
                "background-size":"100% 100%",
                "border-radius":"5px"});
            $('#pic04text').html("<a id= pic04text href=#popup4> Green Rolls </a>");
            $('#pic05').css({"background":"url(../images/pic04.jpg) no-repeat center / cover",
                "background-size":"100% 100%",
                "border-radius":"5px"});
            $('#pic05text').html("<a id= pic05text href=#popup5> Bruschette </a>");
            $('#pic06').css({"background":"url(../images/pic06.jpg) no-repeat center / cover",
                "background-size":"100% 100%",
                "border-radius":"5px"});
            $('#pic06text').html("<a id= pic06text href=#popup6> Spicy Beans </a>");
            //update pop-up
            $('#popupPic1').attr("src","../images/pic01.jpg");
            $('#popupPic2').attr("src","../images/pic03.jpg");
            $('#popupPic3').attr("src","../images/pic05.jpg");
            $('#popupPic4').attr("src","../images/pic02.jpg");
            $('#popupPic5').attr("src","../images/pic04.jpg");
            $('#popupPic6').attr("src","../images/pic06.jpg");
            $('#popup1 h2').html("<h2 id= pic01text> Bruschette with Tomatoes </h2>");
            $('#popup2 h2').html("<h2 id= pic02text> Eggplants </h2>");
            $('#popup3 h2').html("<h2 id= pic03text> Meatballs </h2>");
            $('#popup4 h2').html("<h2 id= pic04text> Green Rolls </h2>");
            $('#popup5 h2').html("<h2 id= pic05text> Bruschette </h2>");
            $('#popup6 h2').html("<h2 id= pic06text> Spicy Beans </h2>");
            $('#popup1 p').html("<p>Italian dish consisting of grilled bread rubbed with garlic and topped with olive oil, salt, and tomatoes.</p>");
            $('#popup2 p').html("<p>Baked eggplants stuffed with cheese and chicken and topped with cheese.</p>");
            $('#popup3 p').html("<p>Italian-inspired meatballs baked and tossed in a marinara sauce..</p>");
            $('#popup4 p').html("<p>A tartar of yellowfin tuna with avocado and purple potatoes.</p>");
            $('#popup5 p').html("<p>Italian dish consisting of grilled bread rubbed with garlic and topped with olive oil and salt.</p>");
            $('#popup6 p').html("<p>Crisp garlic Edamame with Sichuan pepper.</p>");
        }
        //display pasta
        else if(viewportMid >= pasta && viewportMid < meat){
            //highlight appetizers
            $('#pasta').css("background-color","rgba(0,100,0,0.4)");
            $('#appetizers').css("background-color","#443333");
            $('#meat').css("background-color","#443333");
            $('#dessert').css("background-color","#443333");
            //change images
            $('#pic01').css({"background":"url(../images/farfalle.jpg) no-repeat center / cover",
                "background-size":"100% 100%",
                "border-radius":"5px"});
            $('#pic01text').html("<a id= pic01text href=#popup1> Farfalle </a>");
            $('#pic02').css("background","url(../images/penne.jpg)");
            $('#pic02text').html("<a id= pic02text href=#popup2> Penne </a>");
            $('#pic03').css("background","url(../images/campanelle.png)");
            $('#pic03text').html("<a id= pic03text href=#popup3> Campanelle </a>");
            $('#pic04').css("background","url(../images/acinidipepe.jpg)");
            $('#pic04text').html("<a id= pic04text href=#popup4> Acini di Pepe </a>");
            $('#pic05').css("background","url(../images/angelhair.jpg)");
            $('#pic05text').html("<a id= pic05text href=#popup5> Angel Hair </a>");
            $('#pic06').css("background","url(../images/orecchiette.jpg)");
            $('#pic06text').html("<a id= pic06text href=#popup6> Orecchiette </a>");
            //update popup
            $('#popupPic1').attr("src","../images/farfalle.jpg");
            $('#popupPic2').attr("src","../images/penne.jpg");
            $('#popupPic3').attr("src","../images/campanelle.png");
            $('#popupPic4').attr("src","../images/acinidipepe.jpg");
            $('#popupPic5').attr("src","../images/angelhair.jpg");
            $('#popupPic6').attr("src","../images/orecchiette.jpg");
            $('#popup1 h2').html("<h2 id= pic01text> Farfalle </h2>");
            $('#popup2 h2').html("<h2 id= pic02text> Penne </h2>");
            $('#popup3 h2').html("<h2 id= pic03text> Campanelle </h2>");
            $('#popup4 h2').html("<h2 id= pic04text> Acini di Pepe </h2>");
            $('#popup5 h2').html("<h2 id= pic05text> Angel Hair </h2>");
            $('#popup6 h2').html("<h2 id= pic06text> Orecchiette </h2>");
            $('#popup1 p').html("<p>Farfalle with tomato and cheese sauce.</p>");
            $('#popup2 p').html("<p>Penne topped with marinara sauce and parmesan.</p>");
            $('#popup3 p').html("<p>Campanelle with sauteed asparagus and tomatoes.</p>");
            $('#popup4 p').html("<p>Acini di Pepe with parsley topped with parmesan.</p>");
            $('#popup5 p').html("<p>Lemon-parmesan angel hair pasta.</p>");
            $('#popup6 p').html("<p>Brocolli with Orecchiette.</p>");
        }
        //display meat
        else if(viewportMid >= meat && viewportMid < dessert){
            //hightlight meat
            $('#meat').css("background-color","rgba(0,100,0,0.4)");
            $('#pasta').css("background-color","#443333");
            $('#dessert').css("background-color","#443333");
            $('#appetizers').css("background-color","#443333");
            //change images
            $('#pic01').css("background","url(../images/filettodimanzo.jpg)");
            $('#pic02').css("background","url(../images/anatraalforno.jpg)");
            $('#pic03').css("background","url(../images/filettodibarramundi.jpg)");
            $('#pic04').css("background","url(../images/ricettedicarne.jpg)");
            $('#pic05').css("background","url(../images/arrosto.jpg)");
            $('#pic06').css("background","url(../images/ricettaorata.jpg)");
            $('#pic01text').html("<a id= pic01text href=#popup1> Filetto di Manzo </a>");
            $('#pic02text').html("<a id= pic02text href=#popup2> Anatra al Forno </a>");
            $('#pic03text').html("<a id= pic03text href=#popup3> Filetto di Barramundi </a>");
            $('#pic04text').html("<a id= pic04text href=#popup4> Ricette di Carne </a>");
            $('#pic05text').html("<a id= pic05text href=#popup5> Arrosto di Vitello </a>");
            $('#pic06text').html("<a id= pic06text href=#popup6> Ricetta Orata </a>");
            //update popup
            $('#popupPic1').attr("src","../images/filettodimanzo.jpg");
            $('#popupPic2').attr("src","../images/anatraalforno.jpg");
            $('#popupPic3').attr("src","../images/filettodibarramundi.jpg");
            $('#popupPic4').attr("src","../images/ricettedicarne.jpg");
            $('#popupPic5').attr("src","../images/arrosto.jpg");
            $('#popupPic6').attr("src","../images/ricettaorata.jpg");
            $('#popup1 h2').html("<h2 id= pic01text> Filetto di Manzo </h2>");
            $('#popup2 h2').html("<h2 id= pic02text> Anatra al Forno </h2>");
            $('#popup3 h2').html("<h2 id= pic03text> Filetto di Barramundi </h2>");
            $('#popup4 h2').html("<h2 id= pic04text> Ricette di Carne </h2>");
            $('#popup5 h2').html("<h2 id= pic05text> Arrosto di Vitello </h2>");
            $('#popup6 h2').html("<h2 id= pic06text> Ricetta Orata </h2>");
            $('#popup1 p').html("<p>Filetto di Manzo with a red wine sauce.</p>");
            $('#popup2 p').html("<p>Anatra al Forno with orange marmalade peppers.</p>");
            $('#popup3 p').html("<p>Filetto di Barramundi served with onions.</p>");
            $('#popup4 p').html("<p>Ricette di Carne served with peas and potatoes.</p>");
            $('#popup5 p').html("<p>Arrosto di Vitello ai carcioti served with potatoes and mushrooms.</p>");
            $('#popup6 p').html("<p>Ricetta Orata con maionese al prezzemolo.</p>");
        }
        //display dessert
        else if(viewportMid >= dessert){
            //highlight dessert
            $('#dessert').css("background-color","rgba(0,100,0,0.4)");
            $('#meat').css("background-color","#443333");
            $('#appetizers').css("background-color","#443333");
            $('#pasta').css("background-color","#443333");
            //change images
            $('#pic01').css("background","url(../images/sgroppino.jpg)");
            $('#pic02').css("background","url(../images/trifle.jpg)");
            $('#pic03').css("background","url(../images/amaretti.jpg)");
            $('#pic04').css("background","url(../images/melonsalad.jpg)");
            $('#pic05').css("background","url(../images/tiramisu.jpg)");
            $('#pic06').css("background","url(../images/affogato.jpg)");
            $('#pic01text').html("<a id= pic01text href=#popup1> Venetian Sgroppino </a>");
            $('#pic02text').html("<a id= pic02text href=#popup2> Italian trifle </a>");
            $('#pic03text').html("<a id= pic03text href=#popup3> Amaretti Tortoni </a>");
            $('#pic04text').html("<a id= pic04text href=#popup4> Melon Salad </a>");
            $('#pic05text').html("<a id= pic05text href=#popup5> Tiramisu </a>");
            $('#pic06text').html("<a id= pic06text href=#popup6> Italian Affogato </a>");
            //pop-up updates
            $('#popupPic1').attr("src","../images/sgroppino.jpg");
            $('#popupPic2').attr("src","../images/trifle.jpg");
            $('#popupPic3').attr("src","../images/amaretti.jpg");
            $('#popupPic4').attr("src","../images/melonsalad.jpg");
            $('#popupPic5').attr("src","../images/tiramisu.jpg");
            $('#popupPic6').attr("src","../images/affogato.jpg");
            $('#popup1 h2').html("<h2 id= pic01text> Venetian Sgroppino </h2>");
            $('#popup2 h2').html("<h2 id= pic02text> Italian trifle </h2>");
            $('#popup3 h2').html("<h2 id= pic03text> Amaretti Tortoni </h2>");
            $('#popup4 h2').html("<h2 id= pic04text> Melon Salad </h2>");
            $('#popup5 h2').html("<h2 id= pic05text> Tiramisu </h2>");
            $('#popup6 h2').html("<h2 id= pic06text> Italian Affogato </h2>");
            $('#popup1 p').html("<p>Venetian Sgroppino made with lemon ice cream, strawberries and sparkling wine.</p>");
            $('#popup2 p').html("<p>Italian trifle made with sponge soaded in espresso and layered with custard.</p>");
            $('#popup3 p').html("<p>Amaretti tortoni with orange brandy snaps.</p>");
            $('#popup4 p').html("<p>Melon salad made with water melon, cantaloupe and honeydew.</p>");
            $('#popup5 p').html("<p>Tiramisu with blueberries and raspberries.</p>");
            $('#popup6 p').html("<p>Italian Affogato topped with espresso and chocolate.</p>");
        }
    }
    // General setup
    $('[id^=pic]').css({"background-repeat":"no-repeat",
        "background-position": "center",
        "background-size":"100% 100%",
        "border-radius":"5px"});
}

function checkAnimationAbout() {
    var $elem = $('#aboutDiv');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start')

        $('#aboutDiv').css("margin-left","-100%").animate({"margin-left": "0%"},4500)
        }

}

function checkAnimationCuisin() {
    var $elem = $('#cuisineDiv');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start')

        $('#cuisineDiv').css("margin-left","-100%").animate({"margin-left": "0%"},2500)


    }

}

function checkAnimationIngredients() {
    var $elem = $('#ingredientsDiv');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start')

        $('#ingredientsDiv').css("margin-left","-100%").animate({"margin-left": "0%"},2500)


    }

}

function checkAnimationOurEvents() {
    var $elem = $('#ourEventsDiv');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start')

        $('#ourEventsDiv').css("margin-left","-100%").animate({"margin-left": "0%"},2500)


    }

}

function checkAnimationEventsBig() {
    var $elem = $('#container_future_events');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start')

        $('#container_future_events').css("margin-left","-100%").animate({"margin-left": "0%"},2500)


    }

}

// Capture scroll events
$(window).scroll(function(){
    checkAnimationPastEvents();
    checkAnimationContact();
    checkAnimationBook();
    checkAnimationInfo();
    checkAnimationMenu();
    checkAnimationAbout();
    checkAnimationCuisin();
    checkAnimationIngredients();
    checkAnimationOurEvents();
    checkAnimationEventsBig();
});
//----------------------------------------------------------------------------------------------------------------------
