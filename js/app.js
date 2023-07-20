const normal_div = document.querySelector(".n_count");
const throttle_div = document.querySelector(".t_count");

let n_count = 0;
let t_count = 0;

let isScrolling = true;

const normalCount = () => {
  n_count++;
  normal_div.innerHTML = `Normal Count ${n_count}`;
};

const throttleCount = () => {
  if (isScrolling) {
    t_count++;
    throttle_div.innerHTML = `Throttle Count ${t_count}`;
    isScrolling = false;
    setTimeout(() => {
      isScrolling = true;
    }, 1000);
  }
};

const showCount = () => {
  normalCount();
  throttleCount();
};
