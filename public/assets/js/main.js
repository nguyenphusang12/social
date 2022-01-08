const sst = document.querySelectorAll(".topbar-setting__item.show");

sst.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      const itemActive = document.querySelector(".active");
      if (itemActive) {
        itemActive.classList.remove("active");
      }

      item.classList.add("active");
    }
  });
});

document.querySelector(".topbar-menu-seting").onclick = function () {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    const itemActive = document.querySelector(".active");
    if (itemActive) {
      itemActive.classList.remove("active");
    }
    this.classList.add("active");
  }
};

document.addEventListener("click", (event) => {
  const specifiedElement = document.querySelector(".active");
  let isClickInside;
  if (specifiedElement) {
    isClickInside = specifiedElement.contains(event.target);
  }
  if (!isClickInside && isClickInside !== undefined) {
    specifiedElement.classList.remove("active");
  }
});
