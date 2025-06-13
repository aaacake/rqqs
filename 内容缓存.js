// 保存所有可编辑区域内容
document.getElementById("saveBtn").addEventListener("click", function() {
  const contentElements = document.querySelectorAll(".editable");
  const contents = {};
  contentElements.forEach((el, index) => {
    contents[`content${index}`] = el.innerHTML; // 存储HTML内容
  });
  localStorage.setItem("websiteData", JSON.stringify(contents)); // 转为JSON存储
  alert("内容已保存到本地！");
});
window.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("websiteData");
  if (savedData) {
    const contents = JSON.parse(savedData);
    document.querySelectorAll(".editable").forEach((el, index) => {
      if (contents[`content${index}`]) {
        el.innerHTML = contents[`content${index}`]; // 填充内容
      }
    });
  }
});
// 管理员面板添加按钮
<button id="clearStorage">清除本地数据</button>

// JavaScript逻辑
document.getElementById("clearStorage").addEventListener("click", () => {
  localStorage.removeItem("websiteData");
  alert("本地存储已清空！");
});