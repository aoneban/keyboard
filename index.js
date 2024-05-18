import generateKeyboard from './modules/keyboard.js';
import initKeystroke from './modules/keystroke.js';
import { initMouseClick, initMouseClickCapsLock, mouseHandlingShiftLeft, mouseHandlingShiftRight } from './modules/keymouses.js';

const LANGUAGE = localStorage.getItem('lang');

generateKeyboard(LANGUAGE);
initKeystroke();
initMouseClick();
initMouseClickCapsLock();
mouseHandlingShiftLeft();
mouseHandlingShiftRight();
