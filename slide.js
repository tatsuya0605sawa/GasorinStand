var slideItems,
  slideItemWidth,
  slidePrev,
  slideNext,
  slideItemNum,
  slideCurrent;

// マッチしたid・class名を持つ要素を取得、変数の定義
slideItems = document.querySelectorAll('.slide-list-item');
slideItemWidth = document.querySelectorAll('.slide-list-item')[0].clientWidth;
console.log(slideItemWidth);
slideItemNum = 0;
slideCurrent = 0;

// スライド表示位置やスライドの初期表示
for (var i = 0; i < slideItems.length; i++) {
  slideItems[i].style.left = slideItemWidth + 'px';
  if (slideItemNum === slideCurrent) {
    slideItems[i].style.left = 0 + 'px';
  }
  slideItemNum++;
}

setInterval(() => {
  slide(slideCurrent + 1);
}, 2000);

// スライド関数
function slide(next) {
  // 現在のスライドの値と次のスライドの値を比較し、positionで調整
  var pos;

  if (slideCurrent < next) {
    pos = -slideItemWidth;
  } else {
    pos = slideItemWidth;
  }
  // 最初に戻る
  if (next === slideItemNum) {
    next = 0;
  } else if (next === -1) {
    next = (slideItemNum - 1);
  }
  // 最後に戻る

  for (var i = 0; i < slideItems.length; i++) {
    slideItems[i].style.transition = 'initial';
  }
  // 次のスライドを現在のスライドの進行方向後ろに移動させる
  slideItems[next].style.left = -pos + 'px';
  setTimeout(function () {
    slideItems[next].style.transition = 'all 0.5s';
    slideItems[next].style.left = 0 + 'px';
  }, 30);
  slideItems[slideCurrent].style.transition = 'all 0.5s';
  slideItems[slideCurrent].style.left = pos + 'px';

  slideCurrent = next;
}
