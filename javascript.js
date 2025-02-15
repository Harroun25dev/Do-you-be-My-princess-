const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// تغيير موقع زر "No" عشوائيًا داخل حدود السؤال
noBtn.addEventListener("mouseover", () => {
  const containerWidth = questionContainer.offsetWidth - noBtn.offsetWidth;
  const containerHeight = questionContainer.offsetHeight - noBtn.offsetHeight;

  const newX = Math.random() * containerWidth;
  const newY = Math.random() * containerHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// وظيفة زر "Yes"
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";   // إخفاء السؤال
  heartLoader.style.display = "flex";         // إظهار الـ loader

  setTimeout(() => {
    heartLoader.style.display = "none";       // إخفاء الـ loader
    resultContainer.style.display = "flex";   // عرض نتيجة الحب
    gifResult.play();                         // تشغيل الفيديو
  }, 3000);
});
