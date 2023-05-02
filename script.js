import { data } from "./data.js";

let language = localStorage.getItem('lang')

const genereteKeyboard = (lang) => {
const container = document.createElement('div');
container.classList.add('container');

const titleText = document.createElement('h1');
titleText.className = 'text-center';
titleText.textContent = 'Virtual keyboard';

const keyboardWrapper = document.createElement('div');
keyboardWrapper.className = 'keyboard__wrapper';

const textArea = document.createElement('textarea');
textArea.setAttribute('type', 'text');
textArea.setAttribute('name', 'text');
textArea.setAttribute('id', 'input');
textArea.setAttribute('cols', '30');
textArea.setAttribute('rows', '10');

const description = document.createElement('p');
description.className = 'description';
description.textContent = 'The keyboard was created in the Windows operating system. To switch the language combination: left ctrl + alt'

const row = document.createElement('div');
row.className = 'keyboard__row';

data.map((el) => {
  if (lang == 'none') {
    const key = document.createElement('div')
    key.classList.add('keyboard__key', 'key', `${el.keyCode}`);

    const eng = document.createElement('span');
    eng.className = 'eng';
    eng.style.display = 'block';
    const caseDownEn = document.createElement('span');
    caseDownEn.className = 'caseDown';
    caseDownEn.textContent = el.caseDownEn;
    const caseUpEn = document.createElement('span');
    caseUpEn.className = 'caseUp';
    caseUpEn.textContent = el.caseUpEn;
    const capsEn = document.createElement('span');
    capsEn.className = 'caps';
    capsEn.textContent = el.capsEn;
    const shiftCapsEn = document.createElement('span');
    shiftCapsEn.className = 'shiftcaps';
    shiftCapsEn.textContent = el.shiftcapsEn;
    eng.append(caseDownEn, caseUpEn, capsEn, shiftCapsEn)

    const rus = document.createElement('span');
    rus.className = 'rus';
    rus.style.display = 'none'
    const caseDownRu = document.createElement('span');
    caseDownRu.className = 'caseDown';
    caseDownRu.textContent = el.caseDownRu;
    const caseUpRu = document.createElement('span');
    caseUpRu.className = 'caseUp';
    caseUpRu.textContent = el.caseUpRu;
    const capsRu = document.createElement('span');
    capsRu.className = 'caps';
    capsRu.textContent = el.capsRu;
    const shiftCapsRu = document.createElement('span');
    shiftCapsRu.className = 'shiftcaps';
    shiftCapsRu.textContent = el.shiftcapsRu;
    rus.append(caseDownRu, caseUpRu, capsRu, shiftCapsRu)
    key.append(eng, rus)
    row.append(key)
  } else {
    const key = document.createElement('div')
    key.classList.add('keyboard__key', 'key', `${el.keyCode}`);

    const eng = document.createElement('span');
    eng.className = 'eng';
    eng.style.display = 'none';
    const caseDownEn = document.createElement('span');
    caseDownEn.className = 'caseDown';
    caseDownEn.textContent = el.caseDownEn;
    const caseUpEn = document.createElement('span');
    caseUpEn.className = 'caseUp';
    caseUpEn.textContent = el.caseUpEn;
    const capsEn = document.createElement('span');
    capsEn.className = 'caps';
    capsEn.textContent = el.capsEn;
    const shiftCapsEn = document.createElement('span');
    shiftCapsEn.className = 'shiftcaps';
    shiftCapsEn.textContent = el.shiftcapsEn;
    eng.append(caseDownEn, caseUpEn, capsEn, shiftCapsEn)

    const rus = document.createElement('span');
    rus.className = 'rus';
    rus.style.display = 'block'
    const caseDownRu = document.createElement('span');
    caseDownRu.className = 'caseDown';
    caseDownRu.textContent = el.caseDownRu;
    const caseUpRu = document.createElement('span');
    caseUpRu.className = 'caseUp';
    caseUpRu.textContent = el.caseUpRu;
    const capsRu = document.createElement('span');
    capsRu.className = 'caps';
    capsRu.textContent = el.capsRu;
    const shiftCapsRu = document.createElement('span');
    shiftCapsRu.className = 'shiftcaps';
    shiftCapsRu.textContent = el.shiftcapsRu;
    rus.append(caseDownRu, caseUpRu, capsRu, shiftCapsRu)
    key.append(eng, rus)
    row.append(key)
  }
})

keyboardWrapper.append(textArea, row)
container.append(titleText, keyboardWrapper, description)
document.body.append(container)
}
genereteKeyboard(language)

const area = document.getElementById('input');
const pressedKeys = {};

onkeyup = function(e) {
      delete pressedKeys[e.code];
    };
 
const loop = () => {
  return Object.keys(pressedKeys).join("")
} 

const initKeystroke = () => {
  document.onkeydown = function (event) {
    event.preventDefault()
    if(event.code in pressedKeys) return;
       pressedKeys[event.code] = true;
    const callLoop = loop()
    const capsLock = document.querySelector('.CapsLock');
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
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
      caseUp.forEach(function (el) {
        el.style.display = 'none';
      });
      caseDown.forEach(function (el) {
        el.style.display = 'block';
      });
    } else if (
      event.code !== 'CapsLock' &&
      event.code !== 'Backspace' &&
      event.code !== 'Space' &&
      event.code !== 'Tab' &&
      event.code !== 'Enter' &&
      event.code !== 'ShiftLeft' &&
      event.code !== 'ShiftRight' &&
      event.code !== 'ControlLeft' &&
      event.code !== 'ControlRight' &&
      event.code !== 'AltLeft' &&
      event.code !== 'AltRight' &&
      event.code !== 'MetaLeft' &&
      event.code !== 'Delete'
    ) {
      const setCaps = document.querySelector('.CapsLock')
      const setClass = document.querySelector('.eng')
      let newComputedStyle = getComputedStyle(setClass)
      if (!setCaps.classList.contains('active') && newComputedStyle.display == 'block') {
        const prev = document.querySelector(`.${event.code} > .eng > .caseDown`).innerText;
        const startPos = area.selectionStart;
        const endPos = area.selectionEnd;
        const text = area.value;
        const textBeforeCursor = text.substring(0, startPos);
        const textAfterCursor = text.substring(endPos, text.length);
        const newText = textBeforeCursor + prev + textAfterCursor;
        area.value = newText;
        const newCursorPos = startPos + 1;
        area.selectionStart = newCursorPos;
        area.selectionEnd = newCursorPos;
        document.querySelector(`.${event.code}`).classList.add('active');
        setTimeout(() => {
        document.querySelector(`.${event.code}`).classList.remove('active');
        }, 200);
      } else if (!setCaps.classList.contains('active') && newComputedStyle.display == 'none') {
        const prev2 = document.querySelector(`.${event.code} > .rus > .caseDown`).innerText;
        const startPos = area.selectionStart;
        const endPos = area.selectionEnd;
        const text = area.value;
        const textBeforeCursor = text.substring(0, startPos);
        const textAfterCursor = text.substring(endPos, text.length);
        const newText = textBeforeCursor + prev2 + textAfterCursor;
        area.value = newText;
        const newCursorPos = startPos + 1;
        area.selectionStart = newCursorPos;
        area.selectionEnd = newCursorPos;
        document.querySelector(`.${event.code}`).classList.add('active');
        setTimeout(() => {
        document.querySelector(`.${event.code}`).classList.remove('active');
        }, 200);
      }
      else if (setCaps.classList.contains('active') && newComputedStyle.display == 'block') {
        const prev3 = document.querySelector(`.${event.code} > .eng > .caseUp`).innerText;
        const startPos = area.selectionStart;
        const endPos = area.selectionEnd;
        const text = area.value;
        const textBeforeCursor = text.substring(0, startPos);
        const textAfterCursor = text.substring(endPos, text.length);
        const newText = textBeforeCursor + prev3 + textAfterCursor;
        area.value = newText;
        const newCursorPos = startPos + 1;
        area.selectionStart = newCursorPos;
        area.selectionEnd = newCursorPos;
        document.querySelector(`.${event.code}`).classList.add('active');
        setTimeout(() => {
        document.querySelector(`.${event.code}`).classList.remove('active');
        }, 200);
      }
      else if (setCaps.classList.contains('active') && newComputedStyle.display == 'none') {
        const prev4 = document.querySelector(`.${event.code} > .rus > .caseUp`).innerText;
        const startPos = area.selectionStart;
        const endPos = area.selectionEnd;
        const text = area.value;
        const textBeforeCursor = text.substring(0, startPos);
        const textAfterCursor = text.substring(endPos, text.length);
        const newText = textBeforeCursor + prev4 + textAfterCursor;
        area.value = newText;
        const newCursorPos = startPos + 1;
        area.selectionStart = newCursorPos;
        area.selectionEnd = newCursorPos;
        document.querySelector(`.${event.code}`).classList.add('active');
        setTimeout(() => {
        document.querySelector(`.${event.code}`).classList.remove('active');
        }, 200);
      }
    } else if (event.code === 'Backspace') {
      const cursorPosition = area.selectionStart;
      const values = area.value;
      if (values[cursorPosition - 1]) {
        event.preventDefault();
        area.value = values.substring(0, cursorPosition - 1) + values.substring(cursorPosition);
        area.selectionStart = cursorPosition - 1;
        area.selectionEnd = cursorPosition - 1;
      }
      document.querySelector('.Backspace').classList.add('active');
      setTimeout(() => {
        document.querySelector('.Backspace').classList.remove('active');
      }, 200);
    } else if (event.code === 'MetaLeft') {
      document.querySelector('.MetaLeft').classList.add('active');
      setTimeout(() => {
        document.querySelector('.MetaLeft').classList.remove('active');
      }, 200);
    } else if (event.code === 'Delete') {
      const cursorPosition = area.selectionStart;
      const values = area.value;
      if (values[cursorPosition - 1]) {
        event.preventDefault();
        area.value = values.substring(0, cursorPosition) + values.substring(cursorPosition + 1); 
        area.selectionStart = cursorPosition; 
        area.selectionEnd = cursorPosition;
      } else {
        event.preventDefault();
        area.value = values.substring(0, cursorPosition) + values.substring(cursorPosition + 1); 
        area.selectionStart = cursorPosition; 
        area.selectionEnd = cursorPosition;
      }
      document.querySelector('.Delete').classList.add('active');
      setTimeout(() => {
        document.querySelector('.Delete').classList.remove('active');
      }, 200);
    } else if (event.code == 'MetaLeft') {
      document.querySelector('.MetaLeft').classList.add('active');
      setTimeout(() => {
        document.querySelector('.MetaLeft').classList.remove('active');
      }, 200);
    } else if (callLoop === 'ControlLeftAltLeft' || callLoop === 'AltLeftControlLeft') {
      let displays = document.querySelector('.eng')
      let computedStyle = getComputedStyle(displays);
      if (computedStyle.display === 'block') {
        document.querySelector('.ControlLeft').classList.add('active');
        document.querySelector('.AltLeft').classList.add('active');
        document.querySelectorAll('.eng').forEach((el) => (el.style.display = 'none'));
        document.querySelectorAll('.rus').forEach((el) => (el.style.display = 'block'));
        localStorage.setItem('lang', 'block');
        setTimeout(() => {
          document.querySelector('.ControlLeft').classList.remove('active');
          document.querySelector('.AltLeft').classList.remove('active');
        }, 200);
      } else if (computedStyle.display === 'none') {
        document.querySelector('.ControlLeft').classList.add('active');
        document.querySelector('.AltLeft').classList.add('active');
        document.querySelectorAll('.eng').forEach((el) => (el.style.display = 'block'));
        document.querySelectorAll('.rus').forEach((el) => (el.style.display = 'none'));
        localStorage.setItem('lang', 'none');
        setTimeout(() => {
          document.querySelector('.ControlLeft').classList.remove('active');
          document.querySelector('.AltLeft').classList.remove('active');
        }, 200);
      } 
    } else if (callLoop === 'ControlRightAltRight' || callLoop === 'AltRightControlRight') {
      let displays = document.querySelector('.eng')
      let computedStyle = getComputedStyle(displays);
      if (computedStyle.display === 'block') {
        document.querySelector('.ControlRight').classList.add('active');
        document.querySelector('.AltRight').classList.add('active');
        document.querySelectorAll('.eng').forEach((el) => (el.style.display = 'none'));
        document.querySelectorAll('.rus').forEach((el) => (el.style.display = 'block'));
        setTimeout(() => {
          document.querySelector('.ControlRight').classList.remove('active');
          document.querySelector('.AltRight').classList.remove('active');
        }, 200);
      } else if (computedStyle.display === 'none') {
        document.querySelector('.ControlRight').classList.add('active');
        document.querySelector('.AltRight').classList.add('active');
        document.querySelectorAll('.eng').forEach((el) => (el.style.display = 'block'));
        document.querySelectorAll('.rus').forEach((el) => (el.style.display = 'none'));
        setTimeout(() => {
          document.querySelector('.ControlRight').classList.remove('active');
          document.querySelector('.AltRight').classList.remove('active');
        }, 200);
      } 
    } else if (event.code === 'Space') {
      event.preventDefault()
      const startPos = area.selectionStart;
      const endPos = area.selectionEnd;
      const text = area.value;
      const textBeforeCursor = text.substring(0, startPos);
      const textAfterCursor = text.substring(endPos, text.length);
      const newText = textBeforeCursor + event.key + textAfterCursor;
      area.value = newText;

      const newCursorPos = startPos + 1;
      area.selectionStart = newCursorPos;
      area.selectionEnd = newCursorPos;
      document.querySelector('.Space').classList.add('active');
      setTimeout(() => {
        document.querySelector('.Space').classList.remove('active');
      }, 200);
    } else if (event.code === 'Tab') {
      document.querySelector('.Tab').classList.add('active');
      const startPos = area.selectionStart;
      const endPos = area.selectionEnd;
      const text = area.value;
      const textBeforeCursor = text.substring(0, startPos);
      const textAfterCursor = text.substring(endPos, text.length);
      const newText = textBeforeCursor + '    ' + textAfterCursor;
      area.value = newText;

      const newCursorPos = startPos + 4;
      area.selectionStart = newCursorPos;
      area.selectionEnd = newCursorPos;
      document.querySelector('.Tab').classList.add('active');
      setTimeout(() => {
        document.querySelector('.Tab').classList.remove('active');
      }, 200);
    } else if (event.code === 'Enter') {
      document.querySelector('.Enter').classList.add('active');
      area.value += '\n';
      setTimeout(() => {
        document.querySelector('.Enter').classList.remove('active');
      }, 200);
    } else if (event.code === 'ControlLeft') {
      document.querySelector('.ControlLeft').classList.add('active');
      area.value += '';
      setTimeout(() => {
        document.querySelector('.ControlLeft').classList.remove('active');
      }, 200);
    } else if (event.code === 'AltLeft') {
      document.querySelector('.AltLeft').classList.add('active');
      area.value += '';
      setTimeout(() => {
        document.querySelector('.AltLeft').classList.remove('active');
      }, 200);
    } else if (event.code === 'AltRight') {
      document.querySelector('.AltRight').classList.add('active');
      area.value += '';
      setTimeout(() => {
        document.querySelector('.AltRight').classList.remove('active');
      }, 200);
    } else if (event.code === 'ControlRight') {
      document.querySelector('.ControlRight').classList.add('active');
      area.value += '';
      setTimeout(() => {
        document.querySelector('.ControlRight').classList.remove('active');
      }, 200);
    } else if (event.code === 'ShiftLeft' && !capsLock.classList.contains('active')) {
      document.querySelector('.ShiftLeft').classList.add('active');
        caseDown.forEach((el) => (el.style.display = 'none'));
        caseUp.forEach((el) => (el.style.display = 'block'));
        document.onkeyup = function (ev) {
          if(ev.code === 'ShiftLeft') {
            document.querySelector('.ShiftLeft').classList.remove('active');
            caseDown.forEach((el) => (el.style.display = 'block'));
            caseUp.forEach((el) => (el.style.display = 'none'));
          }
      }
    } else if (event.code === 'ShiftLeft' && capsLock.classList.contains('active')) {
      document.querySelector('.ShiftLeft').classList.add('active');
        caseDown.forEach((el) => (el.style.display = 'block'));
        caseUp.forEach((el) => (el.style.display = 'none'));
        caps.forEach((el) => (el.style.display = 'none'));
        document.onkeyup = function (ev) {
          if(ev.code === 'ShiftLeft') {
            document.querySelector('.ShiftLeft').classList.remove('active');
            caseDown.forEach((el) => (el.style.display = 'none'));
            caseUp.forEach((el) => (el.style.display = 'block'));
          }
      }
    } else if (event.code === 'ShiftRight' && !capsLock.classList.contains('active')) {
      document.querySelector('.ShiftRight').classList.add('active');
        caseDown.forEach((el) => (el.style.display = 'none'));
        caseUp.forEach((el) => (el.style.display = 'block'));
        document.onkeyup = function (ev) {
          if(ev.code === 'ShiftRight') {
            document.querySelector('.ShiftRight').classList.remove('active');
            caseDown.forEach((el) => (el.style.display = 'block'));
            caseUp.forEach((el) => (el.style.display = 'none'));
          }
      }
    } else if (event.code === 'ShiftRight' && capsLock.classList.contains('active')) {
      document.querySelector('.ShiftRight').classList.add('active');
        caseDown.forEach((el) => (el.style.display = 'block'));
        caseUp.forEach((el) => (el.style.display = 'none'));
        caps.forEach((el) => (el.style.display = 'none'));
        document.onkeyup = function (ev) {
          if(ev.code === 'ShiftRight') {
            document.querySelector('.ShiftRight').classList.remove('active');
            caseDown.forEach((el) => (el.style.display = 'none'));
            caseUp.forEach((el) => (el.style.display = 'block'));
          }
      }
    }
  };
}
initKeystroke();

const initMouseClickCapsLock = () => {
  const capsLock = document.querySelector('.CapsLock');
  capsLock.addEventListener('click', function () {
    const caseDown = document.querySelectorAll('.caseDown');
    const caps = document.querySelectorAll('.caps');
    const caseUp = document.querySelectorAll('.caseUp')
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
      caseUp.forEach(function (el) {
        el.style.display = 'none';
      });
      caseDown.forEach(function (el) {
        el.style.display = 'block';
      });
    }
  });
}
initMouseClickCapsLock();

const initMouseClick = () => {
  const keys = document.querySelectorAll('.key');
  keys.forEach(function (el) {
    if (!el.classList.contains('ShiftLeft') || !el.classList.contains('ShiftRight')) {
      if (!el.classList.contains('CapsLock')) {
        el.addEventListener('click', function () {
          if (this.classList.contains('Space')) {
            this.classList.add('active');
            const startPos = area.selectionStart;
            const endPos = area.selectionEnd;
            const text = area.value;
            const textBeforeCursor = text.substring(0, startPos);
            const textAfterCursor = text.substring(endPos, text.length);
            const newText = textBeforeCursor + ' ' + textAfterCursor;
            area.value = newText;

            const newCursorPos = startPos + 1;
            area.selectionStart = newCursorPos;
            area.selectionEnd = newCursorPos;
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          } else if (this.classList.contains('Tab')) {
            this.classList.add('active');
            const startPos = area.selectionStart;
            const endPos = area.selectionEnd;
            const text = area.value;
            const textBeforeCursor = text.substring(0, startPos);
            const textAfterCursor = text.substring(endPos, text.length);
            const newText = textBeforeCursor + '    ' + textAfterCursor;
            area.value = newText;

            const newCursorPos = startPos + 4;
            area.selectionStart = newCursorPos;
            area.selectionEnd = newCursorPos;
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
          } else if (this.classList.contains('MetaLeft')) {
            this.classList.add('active');
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          } else if (this.classList.contains('AltRight') || this.classList.contains('AltLeft') || this.classList.contains('ControlRight') || this.classList.contains('ControlLeft')) {
            this.classList.add('active');
            area.value += '';
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          } else if (this.classList.contains('Backspace')) {
            const cursorPosition = area.selectionStart;
            const values = area.value;
            if (values[cursorPosition - 1]) {
            area.value = values.substring(0, cursorPosition - 1) + values.substring(cursorPosition);
            area.selectionStart = cursorPosition - 1;
            area.selectionEnd = cursorPosition - 1;
          }
            this.classList.add('active');
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          } else if (this.classList.contains('Delete')) {
            const cursorPosition = area.selectionStart;
            const values = area.value;
            if (values[cursorPosition - 1]) {
            area.value = values.substring(0, cursorPosition) + values.substring(cursorPosition + 1); 
            area.selectionStart = cursorPosition; 
            area.selectionEnd = cursorPosition;
          } else {
            area.value = values.substring(0, cursorPosition) + values.substring(cursorPosition + 1); 
            area.selectionStart = cursorPosition; 
            area.selectionEnd = cursorPosition;
          }
            this.classList.add('active');
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          } else if (this.classList.contains('ShiftRight') || this.classList.contains('ShiftLeft'))  {
            area.value = '';
          } else {
            const item = this.innerText;
            this.classList.add('active');
            const startPos = area.selectionStart;
            const endPos = area.selectionEnd;
            const text = area.value;
            const textBeforeCursor = text.substring(0, startPos);
            const textAfterCursor = text.substring(endPos, text.length);
            const newText = textBeforeCursor + item + textAfterCursor;
            area.value = newText;

            const newCursorPos = startPos + 1;
            area.selectionStart = newCursorPos;
            area.selectionEnd = newCursorPos;
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
            setTimeout(() => {
              this.classList.remove('active');
              document.getElementById('input').focus();
            }, 200);
          }
        });
      }
    }
  });
}
initMouseClick();

const mouseHandlingShiftLeft = () => {
  document.querySelector('.ShiftLeft').addEventListener('mousedown', function () {
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
    const caps = document.querySelectorAll('.caps');
    const capsLock = document.querySelector('.CapsLock');
    
    if (!capsLock.classList.contains('active')) {
      document.querySelector('.ShiftLeft').classList.add('active');
      caseDown.forEach((el) => (el.style.display = 'none'));
      caseUp.forEach((el) => (el.style.display = 'block'));
    } else if (capsLock.classList.contains('active')) {
      document.querySelector('.ShiftLeft').classList.add('active');
      caseDown.forEach((el) => (el.style.display = 'block'));
      caseUp.forEach((el) => (el.style.display = 'none'));
      caps.forEach((el) => (el.style.display = 'none'));
    }
  })
  
  document.querySelector('.ShiftLeft').addEventListener('mouseup', function(e) {
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
    const capsLock = document.querySelector('.CapsLock');
    if (!capsLock.classList.contains('active')) {
      document.querySelector('.ShiftLeft').classList.remove('active');
      caseDown.forEach((el) => (el.style.display = 'block'));
      caseUp.forEach((el) => (el.style.display = 'none'));
    } else if (capsLock.classList.contains('active')) {
      document.querySelector('.ShiftLeft').classList.remove('active');
      caseDown.forEach((el) => (el.style.display = 'none'));
      caseUp.forEach((el) => (el.style.display = 'block'));
    }
  })
}

mouseHandlingShiftLeft()

const mouseHandlingShiftRight = () => {
  document.querySelector('.ShiftRight').addEventListener('mousedown', function () {
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
    const caps = document.querySelectorAll('.caps');
    const capsLock = document.querySelector('.CapsLock');
    
    if (!capsLock.classList.contains('active')) {
      document.querySelector('.ShiftRight').classList.add('active');
      caseDown.forEach((el) => (el.style.display = 'none'));
      caseUp.forEach((el) => (el.style.display = 'block'));
    } else if (capsLock.classList.contains('active')) {
      document.querySelector('.ShiftRight').classList.add('active');
      caseDown.forEach((el) => (el.style.display = 'block'));
      caseUp.forEach((el) => (el.style.display = 'none'));
      caps.forEach((el) => (el.style.display = 'none'));
    }
  })
  
  document.querySelector('.ShiftRight').addEventListener('mouseup', function() {
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
    const capsLock = document.querySelector('.CapsLock');
    if (!capsLock.classList.contains('active')) {
      document.querySelector('.ShiftRight').classList.remove('active');
      caseDown.forEach((el) => (el.style.display = 'block'));
      caseUp.forEach((el) => (el.style.display = 'none'));
    } else if (capsLock.classList.contains('active')) {
      document.querySelector('.ShiftRight').classList.remove('active');
      caseDown.forEach((el) => (el.style.display = 'none'));
      caseUp.forEach((el) => (el.style.display = 'block'));
    }
  })
}

mouseHandlingShiftRight()