$(document).ready(function () {
    console.log("ready");
    attachEventHandlers();
});

function attachEventHandlers() {
    console.log("attach event handlers");
    $("#generate-code-verifier").on("click touchend", function () {
        $("#code-verifier").val(random_string(48));
        createCodeChallenge();


        return false;
    });

    $("#code-verifier").on("input paste", function () {
        createCodeChallenge();
    });
}

function createCodeChallenge() {
    var verifier = $("#code-verifier").val();
    var challenge = base64_urlencode(sha256bin(verifier));

    $("#code-challenge").html(challenge);
}