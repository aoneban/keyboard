/* eslint-disable import/extensions */
import genereteKeyboard from './modules/keyboard.js';
import initKeystroke from './modules/keystroke.js';
import {
  initMouseClick, initMouseClickCapsLock, mouseHandlingShiftLeft, mouseHandlingShiftRight,
} from './modules/keyMouse.js';

const LANGUAGE = localStorage.getItem('lang');

genereteKeyboard(LANGUAGE);
initKeystroke();
initMouseClick();
initMouseClickCapsLock();
mouseHandlingShiftLeft();
mouseHandlingShiftRight();
