import { results, mbtis } from "./data.js";

// http://127.0.0.1:5500/results.html?mbti=isfj
const mbti = new URLSearchParams(location.search).get("mbti"); // ?mbti=isfj
console.log(mbti);

const result = results[mbtis[mbti]];

// 자바스크립트를 통해 html 요소를 검색해놓은 상태 -> 채워주기만 하면 됨
const titleEl = document.querySelector(".page-title");
const characterEl = document.querySelector(".character");
const boxEls = document.querySelectorAll(".box");
const jobEls = document.querySelectorAll(".job");
const lectureEl = document.querySelector(".lecture");
const lectureImgEl = document.querySelector(".lecture img");

titleEl.innerHTML = result.title;
characterEl.src = result.character;
boxEls.forEach(function (boxEl, index) {
  // index :: 0,1,2,3
  boxEl.innerHTML = result.results[index];
});
jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index];
});
lectureEl.href = result.lectureUrl;
lectureImgEl.src = result.lectureImg;
