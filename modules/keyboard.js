import data from './data.js';
import funcToChangeColor from './changecolor.js';

const serviceKeys = [
  'ControlRight', 
  'ArrowRight',
  'ArrowDown', 
  'ArrowLeft',
  'AltRight',
  'AltLeft',
  'MetaLeft',
  'ControlLeft',
  'ShiftRight',
  'ArrowUp',
  'ShiftRight',
  'ShiftLeft',
  'Enter',
  'CapsLock',
  'Delete',
  'Tab',
  'Backspace',
  'Backquote',
]

const generateKeyboard = (lang) => {
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

  const changeColor = document.createElement('button');
  changeColor.addEventListener('click', funcToChangeColor)
  changeColor.className = 'change-color';
  changeColor.value = 'Change color';
  changeColor.textContent = 'Change color';

  const description = document.createElement('p');
  description.className = 'description';
  description.textContent = 'The keyboard was created in the Windows operating system. To switch the language combination: ctrl + alt';

  const developer = document.createElement('p');
  developer.className = 'developer';
  developer.textContent = 'Developed by Ashot Bahiran';

  const row = document.createElement('div');
  row.className = 'keyboard__row';

  data.map((el) => {
    if (lang !== 'none') {
      const key = document.createElement('div');
      key.classList.add('keyboard__key', 'key', `${el.keyCode}`);
        if (serviceKeys.includes(el.keyCode)) {
          key.classList.add('service')
        } else {
          key.classList.add('ordinary')
        }
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
      eng.append(caseDownEn, caseUpEn, capsEn, shiftCapsEn);

      const rus = document.createElement('span');
      rus.className = 'rus';
      rus.style.display = 'none';
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
      rus.append(caseDownRu, caseUpRu, capsRu, shiftCapsRu);
      key.append(eng, rus);
      return row.append(key);
    }
    const key = document.createElement('div');
    key.classList.add('keyboard__key', 'key', `${el.keyCode}`);
    if (serviceKeys.includes(el.keyCode)) {
      key.classList.add('service')
    } else {
      key.classList.add('ordinary')
    }

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
    eng.append(caseDownEn, caseUpEn, capsEn, shiftCapsEn);

    const rus = document.createElement('span');
    rus.className = 'rus';
    rus.style.display = 'block';
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
    rus.append(caseDownRu, caseUpRu, capsRu, shiftCapsRu);
    key.append(eng, rus);
    return row.append(key);
  });

  keyboardWrapper.append(textArea, row);
  container.append(titleText, keyboardWrapper, description);
  document.body.append(changeColor, container, developer);
};

export default generateKeyboard;
