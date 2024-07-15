document.addEventListener("DOMContentLoaded", function () {
  const mainPage = document.getElementById("main-page");
  const writePage = document.getElementById("write-page");
  const writtenPage = document.getElementById("written-page");
  const writeButton = document.getElementById("write-button");
  const saveButton = document.getElementById("save-button");
  const writtenButton = document.getElementById("written-button");

  let writings;

  writeButton.addEventListener("click", () => {
    mainPage.style.display = "none";
    writePage.style.display = "block";
  });

  saveButton.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;

    writings.push({ title, content });

    event.target.reset();

    renderWritings();

    mainPage.style.display = "block";
    writePage.style.display = "none";
  });

  function renderWritings() {}

  writtenButton.addEventListener("click", () => {
    mainPage.style.display = "none";
    writePage.style.display = "none";
  });
});
