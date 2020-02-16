const faders = document.querySelectorAll('.fade-in');
const left = document.querySelector('.left');

window.onscroll = () => {
  const scrollTop = document.documentElement.scrollTop;
  const firstContentH = document.documentElement.clientHeight;
  let leftToRight = (scrollTop/firstContentH) * 100; // % 단위
  left.style.width = 50 + leftToRight + '%';
}

const options = {
  // root: document.querySelector('.container'), // .container class를 가진 엘리먼트를 root로 설정. null일 경우 브라우저 viewport\
  rootMargin : '0px',
  threshold : 0.5
  // 타겟 엘리먼트가 교차영역에 진입했을 때, 교차영역에 타켓 엘리먼트의 50%가 있을 때, 교차 영역에 타켓 엘리먼트의 100%가 있을 때 observe가 반응한다.
}

const io = new IntersectionObserver((entries,observer) => {
  entries.forEach(entry => {
    //관찰 대상이 viewport 안에 들어온 경우 'appear' 클래스를 추가
    if(entry.intersectionRatio>0.3) {
      entry.target.classList.add('appear');
    }else {
      entry.target.classList.remove('appear');
    }
  });
},options);

// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
faders.forEach((el) => {
  io.observe(el);
});