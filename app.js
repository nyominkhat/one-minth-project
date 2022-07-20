const items = document.querySelectorAll(".item");
const totalItems = items.length; //5

const menuIcon = document.querySelector(".menu-icon");

let itemNo = 0;

document.querySelector(".prev-btn").addEventListener("click", movePrevItem);
document.querySelector(".next-btn").addEventListener("click", moveNextItem);

function hideItems() {
  for (let item of items) {
    item.classList.remove("visible-item");
  }
}

function moveNextItem() {
  hideItems();
  if (itemNo === totalItems - 1) {
    itemNo = 0;
  } else {
    itemNo++;
  }
  items[itemNo].classList.add("visible-item");
}

function movePrevItem() {
  hideItems();
  if (itemNo === 0) {
    itemNo = totalItems - 1;
  } else {
    itemNo--;
  }
  items[itemNo].classList.add("visible-item");
}

menuIcon.addEventListener("click", () => {
  document.querySelector(".menuList").classList.toggle("visible");
});
