var chars = 5;
var input = "";
var button = "";
var website = "https://google.com";
var delay = 5000;
var autoRefresh = false;
function loadURL() {
var getURL = document.getElementById("address").value;

document.getElementById("webview").src = getURL;

}
function changeChars() {
var getChars = document.getElementById("chars").value;

chars = getChars;
    website = document.getElementById("webview").src;

    alert("Random Chars Length: " + chars)
}
function changeInput() {
var getInput = document.getElementById("input").value;

input = getInput;
    website = document.getElementById("webview").src;
    alert("Input: " + input)
}
function changeButton() {
var getButton = document.getElementById("button").value;

button = getButton
    website = document.getElementById("webview").src;
alert("Button: " + button);
}
function makeChar(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function toggleAutoRefresh() {
autoRefresh = !autoRefresh;
alert("Auto Refresh: " + autoRefresh);
}