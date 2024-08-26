const scrollBtn = document.getElementById("scrollPluginToggler");

const toggleScrollBtnClass = () => {
  const bntClassList = scrollBtn.classList;
  bntClassList.toggle("off");
  bntClassList.contains("off")
    ? (scrollBtn.textContent = "off")
    : (scrollBtn.textContent = "on");
};

const checkPluginStyles = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "checkPluginStyles" },
      (response) => {
        scrollBtn.textContent = response.status;
        if (response.status === "off") scrollBtn.classList.add("off");
      }
    );
  });
};

scrollBtn.addEventListener("click", () => {
  toggleScrollBtnClass();
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "toggleScroll" },
      (response) => {
        console.log(response.status);
      }
    );
  });
});

checkPluginStyles();
