setInterval(doTheThing,delay);

function doTheThing() {
    if (chars != "") {
        var webview = document.getElementById("webview");
        var code = makeChar(chars);
        if (website.includes("discord.com")) {
            webview.selectAll();
            webview.insertText("https://discord.gift/" + code);
        } else {
            if (input != "") {
                webview.executeJavaScript("document.getElementsByClassName('" + input + "')[0].value = '" + code + "'");
            }
            if(button != "") {
webview.executeJavaScript("document.getElementsByClassName('" + button + "')[0].click()");

}
        }


        }
    if (autoRefresh == true) {
        webview.src = website;
    }
}
//gLFyf INPUT
//gNO89b BUTTOn

