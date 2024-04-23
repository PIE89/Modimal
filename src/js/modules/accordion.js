function accordion() {
  const btns = document.querySelectorAll(".mobile-links__parent-btn");

  btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      const menu = btn.nextElementSibling;
      const icon = btn.querySelector(".icon--arrow-down");
      console.log(icon);
      const isOpen = btn.classList.toggle("active");

      if (isOpen) {
        menu.style.maxHeight = menu.scrollHeight + "px";
        menu.style.padding = "24px 0 16px";
        icon.classList.add("rotate180");
      } else {
        menu.style.maxHeight = "0px";
        menu.style.padding = "0px";
        icon.classList.remove("rotate180");
      }
    });
  });
}

export default accordion;
