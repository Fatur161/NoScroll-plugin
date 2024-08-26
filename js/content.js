chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case "toggleScroll":
      if (!document.getElementById("hideScrollStyle")) {
        const hideScrollStyles = document.createElement("style");
        hideScrollStyles.id = "hideScrollStyle";
        hideScrollStyles.innerHTML = `
      html {
        -ms-overflow-style: none; /* IE и Edge */
        scrollbar-width: none; /* Firefox */
        /* Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
      }
      `;
        document.head.appendChild(hideScrollStyles);
      } else
        document.head.removeChild(document.getElementById("hideScrollStyle"));
      sendResponse({ status: "Scroll was toggled" });
      break;
    case "checkPluginStyles":
      if (!document.getElementById("hideScrollStyle"))
        sendResponse({ status: "on" });
      else sendResponse({ status: "off" });
      break;
  }
});
