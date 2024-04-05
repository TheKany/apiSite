const $navListItemButtonList = document.querySelectorAll(
  ".nav__api-listItemButton"
);
const $navListItemButton = document.querySelector(".nav__api-listItemButton");
const $contentsContainer = document.querySelector(".contents-container");

$navListItemButtonList.forEach((button) => {
  if (!button.hasAttribute("clicked")) {
    document.querySelector("#api01").setAttribute("clicked", "true");
    onClickPage("api01");

    document.querySelector("#api01").setAttribute("clicked", "");
    document.querySelector("#api01").parentElement.style.backgroundColor =
      "#aad0ec";
  }

  button.addEventListener("click", () => {
    $navListItemButtonList.forEach((otherButton) => {
      otherButton.removeAttribute("clicked");
      otherButton.style.backgroundColor = "";
      otherButton.parentElement.style.backgroundColor = "";
    });

    button.setAttribute("clicked", "");
    button.parentElement.style.backgroundColor = "#aad0ec";
  });
});

function onClickPage(id) {
  // 스크립트 삭제
  const $scriptList = document.querySelectorAll(".apiPage");
  $scriptList.forEach((script) => script.remove());

  // 커스텀 엘리먼트 삭제
  while ($contentsContainer.firstChild) {
    $contentsContainer.removeChild($contentsContainer.firstChild);
  }

  // depth 확인
  let customEl = "";
  let customSrc = "";

  if (id.includes("_")) {
    customEl = id.replace("_", "-");

    const prefix = id.slice(0, id.indexOf("_"));
    const suffix = id.slice(id.indexOf("_") + 1);

    customSrc = `./page/${prefix}/${suffix}/index.js`;
  } else {
    const prefix = id.slice(0, 3);
    const suffix = id.slice(3);

    customEl = `${prefix}-${suffix}`;
    customSrc = `./page/${id}/index.js`;
  }

  // 커스텀 엘리먼트 스크립트 src 추가
  const $script = document.createElement("script");
  $script.type = "module";
  $script.src = customSrc;
  $script.className = "apiPage";
  document.body.appendChild($script);

  // 커스텀 엘리먼트 추가
  const $apiElements = document.createElement(`${customEl}`);
  $contentsContainer.appendChild($apiElements);
}

// 토글 메뉴
const $toggleBtnList = document.querySelectorAll(
  ".nav__api-listItem-toggleBtn"
);

$toggleBtnList.forEach((button) => {
  button.addEventListener("click", () => {
    const isParentClicked = button.parentElement.classList.contains("clicked");

    const hasClickedChild = button.parentElement.querySelector(
      ".nav__api-listItemButton[clicked]"
    );

    if (isParentClicked && hasClickedChild) {
      return;
    } else if (isParentClicked) {
      button.parentElement.classList.remove("clicked");
    } else {
      button.parentElement.classList.add("clicked");
    }
  });
});
