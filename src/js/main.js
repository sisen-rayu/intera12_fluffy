

import '../scss/style.scss';

const $animationItems = [...document.querySelectorAll(".js-animation")];

//具体的にいつ発動させるのかを決めるオプション
const options = {
  rootMargin: "0px", //デフォルトで０.marginとほぼ同じ。
  threshold: 0.5, //閾値は0.2。これが１になると完全に画面におさまってから発動する
};

//ある特定の位置を超えると作動する関数
const toggleActiveClass = (entries) => {
  console.log(entries);
  entries.map((entry) => {
    //mapは返り値を持つ（新しく配列を生成する）、forEachは返り値を持たない。
    // console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("is-active");
    } else {
      entry.target.classList.remove("is-active");
    }
  });
};

const observer = new IntersectionObserver(toggleActiveClass, options); //交差の監視して、閾値を過ぎたらコールバック関数が呼ばれる


$animationItems.map((e) => {
  observer.observe(e);
});

