$(document).ready(function () {
    attachEventHandlers();
});

function attachEventHandlers() {

    $("#generate-code-verifier").on("click touchend", function () {
        $("#code-verifier").val(random_string(48));

        return false;
    });

    $("#code-verifier").on("change", function () {
        var verifier = $("#code-verifier").val();
        var challenge = base64_urlencode(sha256bin(verifier));

        $("#code-challenge").html(challenge);
    });
}