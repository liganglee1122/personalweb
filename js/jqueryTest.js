$(function() {

    $catagory = $("#subCatagoryBox ul li:gt(3):not(:last)");
    $catagory.hide();

    console.log("Hello jquery");
    $("#cr").click(function() {
        var $check = $(this);
        console.log($check.prop('checked'));
        console.log($check.attr('checked'));
        console.log($check.is(':checked'));

    });

    $("p").mouseenter(function(event) {
        console.log("The mouse cursor is at (" +
            event.pageX + ", " + event.pageY +
            ")");
    });

    $("#button1").on('click', function(event) {

        console.log("The mouse cursor is at (" +
            event.pageX + ", " + event.pageY +
            ")");
    });

    $("#showMore a").on('click', function() {
        if ($catagory.is(':visible')) {
            $catagory.hide();
        } else {
            $catagory.show();
        }

        return false;
    });


    $("#highLight a").on('click', function() {
        $("#subCatagoryBox ul li a").highlight();
    });

});

function btnClick(e) {
    // console.log($("p:eq(1)"));
    // console.log($("p").eq(1));
    // console.log($("p:first"));
    // console.log($("p").first());
    // console.log($("p").get(0));
    // console.log($($("p").get(0));
    console.log(e);
    if (!e) {
        e = window.event;
    }

    console.log("The mouse cursor is at (" +
        event.pageX + ", " + event.pageY +
        ")");

}