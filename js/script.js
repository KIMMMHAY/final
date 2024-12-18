$(document).ready(function () {});

function toggleButton1() {
  const button1Before = document.querySelector(".button1_before");
  const button1After = document.querySelector(".button1_after");

  if (button1Before.style.display === "none") {
    button1Before.style.display = "block";
    button1After.style.display = "none";
  } else {
    button1Before.style.display = "none";
    button1After.style.display = "block";
  }
}

function toggleButton2() {
  const before = document.querySelector(".button2_before");
  const after = document.querySelector(".button2_after");

  if (before.style.display === "none") {
    // 현재 after가 보이는 상태 -> before로 전환
    before.style.display = "block";
    after.style.display = "none";
  } else {
    // 현재 before가 보이는 상태 -> after로 전환
    before.style.display = "none";
    after.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const gaugePush = document.querySelector(".gaugepush_before");
  const gaugeBoxes = [
    document.querySelector(".gaugeboxone_after"),
    document.querySelector(".gaugeboxtwo_after"),
    document.querySelector(".gaugeboxthree_after"),
    document.querySelector(".gaugeboxfour_after"),
  ];
  const additionalBoxes = [
    document.querySelector(".gaugebox_after"),
    document.querySelector(".gaugepush_after"),
  ];
  const colorPush = document.querySelector(".colorpush_after");

  let intervalId;
  let currentIndex = 0;

  gaugePush.addEventListener("mousedown", function () {
    intervalId = setInterval(function () {
      if (currentIndex < gaugeBoxes.length) {
        gaugeBoxes[currentIndex].style.display = "block";
        currentIndex++;
      } else if (currentIndex === gaugeBoxes.length) {
        additionalBoxes.forEach((box) => (box.style.display = "block"));
        colorPush.style.display = "block";
        clearInterval(intervalId);
      }
    }, 600); // <- 이 값을 변경하여 시간을 조정할 수 있습니다 (예: 1000 = 1초, 3000 = 3초 등)
  });

  gaugePush.addEventListener("mouseup", function () {
    clearInterval(intervalId);
  });

  gaugePush.addEventListener("mouseleave", function () {
    clearInterval(intervalId);
  });
});

function toggleButton1() {
  const button1 = document.querySelector(".button1_after");
  const button2 = document.querySelector(".button2_after");
  const codebox = document.querySelector(".codebox");

  // 버튼 1이 나타나도록 설정
  if (button1.style.display === "none") {
    button1.style.display = "block";
  } else {
    button1.style.display = "none";
  }

  ///////////////////////////////
  if (button1.style.display === "block" && button2.style.display === "block") {
    codebox.style.display = "block";
  } else {
    codebox.style.display = "none";
  }
}

function toggleButton1() {
  const button1 = document.querySelector(".button1_after");
  button1.style.display = button1.style.display === "none" ? "block" : "none";
  checkAllElementsVisible();
}

function toggleButton2() {
  const button2 = document.querySelector(".button2_after");
  button2.style.display = button2.style.display === "none" ? "block" : "none";
  checkAllElementsVisible();
}

function checkAllElementsVisible() {
  const elements = [
    ".button1_after",
    ".button2_after",
    ".gaugebox_after",
    ".gaugepush_after",
    ".gaugeboxone_after",
    ".gaugeboxtwo_after",
    ".gaugeboxthree_after",
    ".gaugeboxfour_after",
  ];

  const allVisible = elements.every((selector) => {
    const el = document.querySelector(selector);
    return el && el.style.display === "block";
  });

  const cyberbox = document.querySelector(".cyberbox");
  cyberbox.style.display = allVisible ? "block" : "none";
  $(".cyberbox").css("animation-play-state", "running");
}

checkAllElementsVisible(); // 모든 요소가 보일 때 codebox도 보이도록 체크

//Math.random() * 100 - 0 ~ 1 사이의 랜덤한 실수(소수점)을 반환한다.
// 0 * 100 ~ 1 * 100 - 0 ~ 100 사이의 랜덤한 실수값을 반환한다.

// x좌표, y좌표를 랜덤으로 생성
// left와, top에 들어갈 숫자를 랜덤으로 생성

// div를 100개 만들고 싶어.
// 0 ~ 99 까지 반복되는 반복문 만들기
// 0부터 시작해서; 99까지; 숫자가 1씩 증가한다.;
// 반복문 안에서 div를 100개 만들기
// box-container 안에 div를 1개 만들기 * 100
