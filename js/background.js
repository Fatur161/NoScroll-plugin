chrome.runtime.onInstalled.addListener(() => {
  console.log("Successful installated");
});

chrome.browserAction.onClicked.addListener(function (tab) {
  // Код для выполнения при клике на иконку расширения
  console.log("Scroll toggler is active");
});
