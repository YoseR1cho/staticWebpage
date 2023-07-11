//电梯导航
(function () {
  const section = document.querySelector(".recommend_section");
  const elevator = document.querySelector(".floor-nav-box");

  window.addEventListener("scroll", function () {
    const n = document.documentElement.scrollTop;
    elevator.style.opacity = n >= section.offsetTop ? 1 : 0;
  });
})();
//点击小盒子控制页面滚动
(function () {
  const list = document.querySelector(".floor-nav-box-list");
  list.addEventListener("click", function (e) {
    let i = 0;
    if (
      e.target === "a" ||
      ("span" && (e.target.dataset.name || e.target.parentNode.dataset.name))
    ) {
      const k = e.target === "span" ? (k = e.target.parentNode) : e.target;
      const old = document.querySelector(".floor-nav-box-list .activing");
      if (old) old.classList.remove("activing");

      k.classList.add("activing");
      const li = document.querySelector(`.goods_${k.dataset.name}`);
      const span = li.childNodes[1].childNodes[1];
      document.documentElement.scrollTop = li.offsetTop;
      if (span) {
        span.classList.add("moving");
        e.preventDefault()
      }
    }
  });
  // 3.页面滚动，可以根据大盒子，选取小盒子
  window.addEventListener("scroll", function () {
    const old = document.querySelector(".floor-nav-box-list .activing");
    if (old) old.classList.remove("activing");
    const move = document.querySelector(".products_category .moving");
    if (move) move.classList.remove("moving");

    const recommend = document.querySelector(".goods_recommend");
    const computer = document.querySelector(".goods_computer");
    const laptop = document.querySelector(".goods_laptop");
    const phone = document.querySelector(".goods_phone");
    const peripheral = document.querySelector(".goods_peripheral");
    const camera = document.querySelector(".goods_camera");
    const new1 = document.querySelector(".goods_new");
    const crazy = document.querySelector(".goods_crazy");
    const n = document.documentElement.scrollTop;

    if (n >= recommend.offsetTop && n < computer.offsetTop) {
      document.querySelector("[data-name=recommend]").classList.add("activing");
    } else if (n >= computer.offsetTop && n < laptop.offsetTop) {
      document.querySelector("[data-name=computer]").classList.add("activing");
    } else if (n >= laptop.offsetTop && n < phone.offsetTop) {
      document.querySelector("[data-name=laptop]").classList.add("activing");
    } else if (n >= phone.offsetTop && n < peripheral.offsetTop) {
      document.querySelector("[data-name=phone]").classList.add("activing");
    } else if (n >= peripheral.offsetTop && n < camera.offsetTop) {
      document
        .querySelector("[data-name=peripheral]")
        .classList.add("activing");
    } else if (n >= camera.offsetTop && n < new1.offsetTop) {
      document.querySelector("[data-name=camera]").classList.add("activing");
    } else if (n >= new1.offsetTop && n < crazy.offsetTop) {
      document.querySelector("[data-name=new]").classList.add("activing");
    } else if (n >= crazy.offsetTop) {
      document.querySelector("[data-name=crazy]").classList.add("activing");
    }
  });
})();
