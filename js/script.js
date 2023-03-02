const aboutOptions = document.querySelectorAll(".about-option-text");

// console.log("aboutOptions", aboutOptions);

aboutOptions.forEach((option, optionIndex) => {
  option.addEventListener("click", () => {
    aboutOptions.forEach(function (item, selectedIndex) {
      document.querySelector(".about-index-text").innerHTML = `/ 0${
        selectedIndex + 1
      }`;

      if (optionIndex === selectedIndex) {
        item.classList.add("about-option-text_active");
      } else {
        item.classList.remove("about-option-text_active");
      }
    });
  });
});

function addClassList() {}
