$(function() {
    $("#start").click(start);

    function start() {
        let hitSomeWall = false;
        cleanStart();

        $(".boundary").mouseover(function() {
            hitSomeWall = true;
            $(this).addClass("youlose");
        });

        $("#end").mouseover(function(event) {
            if(hitSomeWall) {
                $("#status").text("Sorry, you lost, :[");
            } else {
                $("#status").text("You Won!");
            }
        });

        $("#maze").mouseleave(function() {
            hitSomeWall = true;
            $(".boundary").addClass("youlose");
            $("#status").text("Sorry, you lost, :[");
        });
    };

    function cleanStart() {
        $(".boundary").removeClass("youlose");
        $("#end").off("mouseover");
        $("#status").text("Click the \"S\" to begin.")
    }
});
