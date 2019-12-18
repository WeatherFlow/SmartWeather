$(document).ready(function () {
    console.log("ready");
    attachEventHandlers();
});

function attachEventHandlers() {
    console.log("attach event handlers");
    $("#generate-code-verifier").on("click touchend", function () {
        console.log("generate code");
        $("#code-verifier").val(random_string(48));

        return false;
    });

    $("#code-verifier").on("change", function () {
        console.log("on change");
        var verifier = $("#code-verifier").val();
        var challenge = base64_urlencode(sha256bin(verifier));

        $("#code-challenge").html(challenge);
    });
}