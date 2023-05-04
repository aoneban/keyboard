import { genereteKeyboard } from "./modules/keyboard.js";
import { initKeystroke } from "./modules/keystroke.js";
import { initMouseClick, initMouseClickCapsLock, mouseHandlingShiftLeft, mouseHandlingShiftRight } from "./modules/keyMouse.js";

let language = localStorage.getItem('lang')

genereteKeyboard(language);
initKeystroke();
initMouseClick();
initMouseClickCapsLock();
mouseHandlingShiftLeft();
mouseHandlingShiftRight();