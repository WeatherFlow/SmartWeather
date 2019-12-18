$(document).ready(function () {
    attachEventHandlers();
});

function attachEventHandlers() {

    $("#generate-code-verifier").on("click touchend", function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        $("#code-verifier").val(text);
    });
}