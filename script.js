const area = document.getElementById('input');
const pressedKeys = {};

onkeyup = function(e) {
      delete pressedKeys[e.code];
    };
 
const loop = () => {
  return Object.keys(pressedKeys).join("")
} 

init();
function init() {
  document.onkeydown = function (event) {
    event.preventDefault()
    if(event.code in pressedKeys) return;
       pressedKeys[event.code] = true;
    const callLoop = loop()
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
      event.code !== 'ControlLeft' &&
      event.code !== 'Space' &&
      event.code !== 'Tab' &&
      event.code !== 'Enter'
    ) {
      const setCaps = document.querySelector('.CapsLock')
      const setClass = document.querySelector('.eng')
      let newComputedStyle = getComputedStyle(setClass)
      if (!setCaps.classList.contains('active') && newComputedStyle.display == 'block') {
        const prev = document.querySelector(`.${event.code} > .eng > .caseDown`).innerText
        area.value += prev;
        document.querySelector(`.${event.code}`).classList.add('active');
        setTimeout(() => {
        document.querySelector(`.${event.code}`).classList.remove('active');
        }, 200);
      } else if (!setCaps.classList.contains('active') && newComputedStyle.display == 'none') {
        const prev2 = document.querySelector(`.${event.code} > .rus > .caseDown`)
        area.value += prev2.innerText;
        document.querySelector(`.${event.code}`).classList.add('active');
        setTimeout(() => {
        document.querySelector(`.${event.code}`).classList.remove('active');
        }, 200);
      }
      else if (setCaps.classList.contains('active') && newComputedStyle.display == 'block') {
        const prev3 = document.querySelector(`.${event.code} > .eng > .caseUp`)
        area.value += prev3.innerText;
        document.querySelector(`.${event.code}`).classList.add('active');
        setTimeout(() => {
        document.querySelector(`.${event.code}`).classList.remove('active');
        }, 200);
      }
      else if (setCaps.classList.contains('active') && newComputedStyle.display == 'none') {
        const prev4 = document.querySelector(`.${event.code} > .rus > .caseUp`)
        area.value += prev4.innerText;
        document.querySelector(`.${event.code}`).classList.add('active');
        setTimeout(() => {
        document.querySelector(`.${event.code}`).classList.remove('active');
        }, 200);
      }
    } else if (event.code === 'Backspace') {
      let values = document.getElementById('input').value;
      let str
      str = values.slice(0, values.length - 1);
      area.value = str;
      document.querySelector('.Backspace').classList.add('active');
      setTimeout(() => {
        document.querySelector('.Backspace').classList.remove('active');
      }, 200);
    } else if (callLoop === 'ControlLeftAltLeft' || callLoop === 'AltLeftControlLeft') {
      let displays = document.querySelector('.eng')
      let computedStyle = getComputedStyle(displays);
      if (computedStyle.display === 'block') {
        document.querySelector('.ControlLeft').classList.add('active');
        document.querySelector('.AltLeft').classList.add('active');
        document.querySelectorAll('.eng').forEach((el) => (el.style.display = 'none'));
        document.querySelectorAll('.rus').forEach((el) => (el.style.display = 'block'));
        setTimeout(() => {
          document.querySelector('.ControlLeft').classList.remove('active');
          document.querySelector('.AltLeft').classList.remove('active');
        }, 200);
      } else if (computedStyle.display === 'none') {
        document.querySelector('.ControlLeft').classList.add('active');
        document.querySelector('.AltLeft').classList.add('active');
        document.querySelectorAll('.eng').forEach((el) => (el.style.display = 'block'));
        document.querySelectorAll('.rus').forEach((el) => (el.style.display = 'none'));
        setTimeout(() => {
          document.querySelector('.ControlLeft').classList.remove('active');
          document.querySelector('.AltLeft').classList.remove('active');
        }, 200);
      } 
    } else if (event.code === 'Space') {
      document.querySelector('.Space').classList.add('active');
      area.value += ' ';
      setTimeout(() => {
        document.querySelector('.Space').classList.remove('active');
      }, 200);
    } else if (event.code === 'Tab') {
      document.querySelector('.Tab').classList.add('active');
      area.value += '    ';
      setTimeout(() => {
        document.querySelector('.Tab').classList.remove('active');
      }, 200);
    } else if (event.code === 'Enter') {
      document.querySelector('.Enter').classList.add('active');
      area.value += '\n';
      setTimeout(() => {
        document.querySelector('.Enter').classList.remove('active');
      }, 200);
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
    if (!el.classList.contains('CapsLock')) {
      el.addEventListener('click', function () {
        if (this.classList.contains('Space')) {
          this.classList.add('active');
          area.value += ' ';
          setTimeout(() => {
            this.classList.remove('active');
            document.getElementById('input').focus();
          }, 200);
        } else if (this.classList.contains('Tab')) {
          this.classList.add('active');
          area.value += '    ';
          setTimeout(() => {
            this.classList.remove('active');
            document.getElementById('input').focus();
          }, 200);
        } else if (this.classList.contains('Enter')) {
          this.classList.add('active');
          area.value += '\n';
          setTimeout(() => {
            this.classList.remove('active');
            document.getElementById('input').focus();
          }, 200);
        } else {
          this.classList.add('active');
          area.value += this.innerText;
          setTimeout(() => {
            this.classList.remove('active');
            document.getElementById('input').focus();
          }, 200);
        }
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
