/* eslint-disable import/extensions */
import genereteKeyboard from './modules/keyboard.js';
// eslint-disable-next-line import/named
import initKeystroke from './modules/keystroke.js';
import {
  initMouseClick, initMouseClickCapsLock, mouseHandlingShiftLeft, mouseHandlingShiftRight,
} from './modules/keyMouse.js';

const language = localStorage.getItem('lang');

genereteKeyboard(language);
initKeystroke();
initMouseClick();
initMouseClickCapsLock();
mouseHandlingShiftLeft();
mouseHandlingShiftRight();
