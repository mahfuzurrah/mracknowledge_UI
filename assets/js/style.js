function activateSection(section) {
  var caddy = document.querySelector('.caddy');
  var golfer = document.querySelector('.golfer');

  if (section === 'caddy') {
    caddy.classList.add('active');
    golfer.classList.remove('active');
  } else if (section === 'golfer') {
    caddy.classList.remove('active');
    golfer.classList.add('active');
  }
}

const listItems = document.querySelectorAll(".list");

listItems.forEach((item) => {
  const payer = item.querySelector(".payer");

  payer.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      item.querySelector(".fa-circle-check").style.display = "none";
    } else {
      listItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".fa-circle-check").style.display = "none";
      });

      item.classList.add("active");
      item.querySelector(".fa-circle-check").style.display = "inline-block";
    }
  });
});
