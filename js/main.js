
$(window).load(function() {
	$("#RP-slider").flexisel({
        visibleItems: 4,
        animationSpeed: 900,
        autoPlay: true,
        autoPlaySpeed: 7000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint:480,
                visibleItems: 1
            },
            landscape: {
                changePoint:640,
                visibleItems: 2
            },
            tablet: {
                changePoint:768,
                visibleItems: 3
            }
        }
    });
});

$(document).ready(function() {
//Событие по клику
    $("ul.top-menu a").click(function() {
        $("ul.top-menu a").removeClass("active"); //Удаление любого "active" класса
        $(this).addClass("active"); //Добавление "active" класса на категорию
    });
    $("#submitBtn").click(function(event) {
        event.preventDefault();
        var name = $("#name").val();
        var mail = $("#mail").val();
        $("#reply").text ("Thanks, " + name + " for sending us a messadge! We will send you a reply on your e-mail " + mail + ".");
});
});


