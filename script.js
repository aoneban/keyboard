const area = document.getElementById('input');

init();
function init() {
  document.onkeydown = function (event) {
    const capsLock = document.querySelector('.CapsLock');
    const caseDown = document.querySelectorAll('.caseDown');
    const caps = document.querySelectorAll('.caps');
    if (event.code === 'CapsLock' && !capsLock.classList.contains('active')) {
      capsLock.classList.add('active');
      caseDown.forEach(function (el) {
        el.style.display = 'none';
      });
      caps.forEach(function (el) {
        el.style.display = 'block';
      });
    } else if (
      event.code === 'CapsLock' &&
      capsLock.classList.contains('active')
    ) {
      capsLock.classList.remove('active');
      caps.forEach(function (el) {
        el.style.display = 'none';
      });
      caseDown.forEach(function (el) {
        el.style.display = 'block';
      });
    } else if (
      event.code !== 'CapsLock' &&
      event.code !== 'Backspace' &&
      event.code !== 'AltLeft' &&
      event.code !== 'ControlLeft'
    ) {
      area.value += event.key;
      const prev = document.querySelector(`.${event.code}`);
      prev.classList.add('active');
      setTimeout(() => {
        prev.classList.remove('active');
      }, 200);
    } else if (event.code === 'Backspace') {
      let values = document.getElementById('input').value;
      let str;
      str = values.slice(0, values.length - 1);
      area.value = str;
      document.querySelector('.Backspace').classList.add('active');
      setTimeout(() => {
        document.querySelector('.Backspace').classList.remove('active');
      }, 200);
    } else if (event.code == 'AltLeft') {
      document
        .querySelectorAll('.eng')
        .forEach((el) => (el.style.display = 'none'));
      document
        .querySelectorAll('.rus')
        .forEach((el) => (el.style.display = 'block'));
    }
  };
}

initMouseCapsLockEn();
function initMouseCapsLockEn() {
  const capsLock = document.querySelector('.CapsLock');
  capsLock.addEventListener('click', function () {
    const caseDown = document.querySelectorAll('.caseDown');
    const caps = document.querySelectorAll('.caps');
    if (
      capsLock.classList.contains('CapsLock') &&
      !capsLock.classList.contains('active')
    ) {
      capsLock.classList.add('active');
      caseDown.forEach(function (el) {
        el.style.display = 'none';
      });
      caps.forEach(function (el) {
        el.style.display = 'block';
      });
    } else {
      capsLock.classList.remove('active');
      caps.forEach(function (el) {
        el.style.display = 'none';
      });
      caseDown.forEach(function (el) {
        el.style.display = 'block';
      });
    }
  });
}

initMouse();
function initMouse() {
  const keys = document.querySelectorAll('.key');
  keys.forEach(function (el) {
    const item = document.querySelector('.eng');
    let computedStyle = getComputedStyle(item);
    if (!el.classList.contains('CapsLock')) {
      el.addEventListener('click', function () {
        this.classList.add('active');
        area.value += this.innerText;
        setTimeout(() => {
          this.classList.remove('active');
        }, 200);
      });
    }
  });
}

backSpaceForMouse();
function backSpaceForMouse() {
  const back = document.querySelector('.Backspace');
  back.addEventListener('click', () => {
    let values = document.getElementById('input').value;
    let str = values.replaceAll('Backspace', '');
    str = str.slice(0, str.length - 1);
    area.value = str;
  });
}
