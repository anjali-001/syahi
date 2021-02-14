console.log("background script running");

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    let msg = {
        txt: "button clicked"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}