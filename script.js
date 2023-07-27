// const accordionItemHeaders = document.querySelectorAll("accordion-item-header");
// accordionItemHeaders.forEach((accordionItemHeader) => {
//   accordionItemHeader.addEventListener("click", (event) => {
//     accordionItemHeader.classList.toggle("active");
//   });
// });
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
accordionItemHeaders.forEach((el) => {
  el.addEventListener("click", (event) => {
    const currentActive = document.querySelector(
      ".accordion-item-header.active"
    );
    if (currentActive && currentActive !== el) {
      currentActive.classList.toggle("active");
      currentActive.nextElementSibling.style.maxHeight = 0;
    }
    el.classList.toggle("active");
    const accordionBody = el.nextElementSibling;
    if (el.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });
});
