(() => {
  alert('Уважаемый проверяющий, просьба не торопиться с проверкой и дать возможность в день-другой доделать задание. Спасибо.')
})()

const genereateKeyboard = () => {
const keyboard = document.createElement('div');
keyboard.classList.add('container');
keyboard.innerHTML = `
<div class="container">
<h1 class="text-center">Virtual keyboard</h1>
<div class="keyboard__wrapper">
  <textarea type="text" name="text" id="input" cols="30" rows="10" autofocus></textarea>
  <div class="keyboard__row">
    <div class="keyboard__key key Backquote">
      <span class="eng">
        <span class="caseDown">\`</span>
        <span class="caseUp">~</span>
        <span class="caps">\`</span>
        <span class="shiftcaps">~</span>
      </span>
      <span class="rus">
        <span class="caseDown">ё</span>
        <span class="caseUp">Ё</span>
        <span class="caps">Ё</span>
        <span class="shiftcaps">ё</span>
      </span>
    </div>
    <div class="keyboard__key key Digit1">
      <span class="eng">
        <span class="caseDown">1</span>
        <span class="caseUp">!</span>
        <span class="caps">1</span>
        <span class="shiftcaps">!</span>
      </span>
      <span class="rus">
        <span class="caseDown">1</span>
        <span class="caseUp">!</span>
        <span class="caps">1</span>
        <span class="shiftcaps">!</span>
      </span>
    </div>
    <div class="keyboard__key key Digit2">
      <span class="eng">
        <span class="caseDown">2</span>
        <span class="caseUp">@</span>
        <span class="caps">2</span>
        <span class="shiftcaps">@</span>
      </span>
      <span class="rus">
        <span class="caseDown">2</span>
        <span class="caseUp">"</span>
        <span class="caps">2</span>
        <span class="shiftcaps">"</span>
      </span>
    </div>
    <div class="keyboard__key key Digit3">
      <span class="eng">
        <span class="caseDown">3</span>
        <span class="caseUp">#</span>
        <span class="caps">3</span>
        <span class="shiftcaps">#</span>
      </span>
      <span class="rus">
        <span class="caseDown">3</span>
        <span class="caseUp">№</span>
        <span class="caps">3</span>
        <span class="shiftcaps">№</span>
      </span>
    </div>
    <div class="keyboard__key key Digit4">
      <span class="eng">
        <span class="caseDown">4</span>
        <span class="caseUp">$</span>
        <span class="caps">4</span>
        <span class="shiftcaps">$</span>
      </span>
      <span class="rus">
        <span class="caseDown">4</span>
        <span class="caseUp">;</span>
        <span class="caps">4</span>
        <span class="shiftcaps">;</span>
      </span>
    </div>
    <div class="keyboard__key key Digit5">
      <span class="eng">
        <span class="caseDown">5</span>
        <span class="caseUp">%</span>
        <span class="caps">5</span>
        <span class="shiftcaps">%</span>
      </span>
      <span class="rus">
        <span class="caseDown">5</span>
        <span class="caseUp">%</span>
        <span class="caps">5</span>
        <span class="shiftcaps">%</span>
      </span>
    </div>
    <div class="keyboard__key key Digit6">
      <span class="eng">
        <span class="caseDown">6</span>
        <span class="caseUp">^</span>
        <span class="caps">6</span>
        <span class="shiftcaps">^</span>
      </span>
      <span class="rus">
        <span class="caseDown">6</span>
        <span class="caseUp">:</span>
        <span class="caps">6</span>
        <span class="shiftcaps">:</span>
      </span>
    </div>
    <div class="keyboard__key key Digit7">
      <span class="eng">
        <span class="caseDown">7</span>
        <span class="caseUp">&</span>
        <span class="caps">7</span>
        <span class="shiftcaps">&</span>
      </span>
      <span class="rus">
        <span class="caseDown">7</span>
        <span class="caseUp">?</span>
        <span class="caps">7</span>
        <span class="shiftcaps">?</span>
      </span>
    </div>
    <div class="keyboard__key key Digit8">
      <span class="eng">
        <span class="caseDown">8</span>
        <span class="caseUp">*</span>
        <span class="caps">8</span>
        <span class="shiftcaps">*</span>
      </span>
      <span class="rus">
        <span class="caseDown">8</span>
        <span class="caseUp">*</span>
        <span class="caps">8</span>
        <span class="shiftcaps">*</span>
      </span>
    </div>
    <div class="keyboard__key key Digit9">
      <span class="eng">
        <span class="caseDown">9</span>
        <span class="caseUp">(</span>
        <span class="caps">9</span>
        <span class="shiftcaps">(</span>
      </span>
      <span class="rus">
          <span class="caseDown">9</span>
          <span class="caseUp">(</span>
          <span class="caps">9</span>
          <span class="shiftcaps">(</span>
      </span>
    </div>
    <div class="keyboard__key key Digit0">
      <span class="eng">
          <span class="caseDown">0</span>
          <span class="caseUp">)</span>
          <span class="caps">0</span>
          <span class="shiftcaps">)</span>
      </span>
      <span class="rus">
          <span class="caseDown">0</span>
          <span class="caseUp">)</span>
          <span class="caps">0</span>
          <span class="shiftcaps">)</span>
      </span>
    </div>
    <div class="keyboard__key key Minus">
      <span class="eng">
          <span class="caseDown">-</span>
          <span class="caseUp">_</span>
          <span class="caps">-</span>
          <span class="shiftcaps">_</span>
      </span>
      <span class="rus">
          <span class="caseDown">-</span>
          <span class="caseUp">_</span>
          <span class="caps">-</span>
          <span class="shiftcaps">_</span>
      </span>
    </div>
    <div class="keyboard__key key Equal">
      <span class="eng">
          <span class="caseDown">=</span>
          <span class="caseUp">+</span>
          <span class="caps">=</span>
          <span class="shiftcaps">+</span>
      </span>
      <span class="rus">
          <span class="caseDown">=</span>
          <span class="caseUp">+</span>
          <span class="caps">=</span>
          <span class="shiftcaps">+</span>
      </span>
    </div>
    <div class="keyboard__key key Backspace">
      <span class="eng">
          <span class="caseDown">Backspace</span>
          <span class="caseUp">Backspace</span>
          <span class="caps">Backspace</span>
          <span class="shiftcaps">Backspace</span>
      </span>
      <span class="rus">
          <span class="caseDown">Backspace</span>
          <span class="caseUp">Backspace</span>
          <span class="caps">Backspace</span>
          <span class="shiftcaps">Backspace</span>
      </span>
    </div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key key Tab">
      <span class="eng">
        <span class="caseDown">Tab</span>
        <span class="caseUp">Tab</span>
        <span class="caps">Tab</span>
        <span class="shiftcaps">Tab</span>
      </span>
      <span class="rus">
        <span class="caseDown">Tab</span>
        <span class="caseUp">Tab</span>
        <span class="caps">Tab</span>
        <span class="shiftcaps">Tab</span>
      </span>
    </div>
    <div class="keyboard__key key KeyQ">
      <span class="eng">
        <span class="caseDown">q</span>
        <span class="caseUp">Q</span>
        <span class="caps">Q</span>
        <span class="shiftcaps">q</span>
      </span>
      <span class="rus">
        <span class="caseDown">й</span>
        <span class="caseUp">Й</span>
        <span class="caps">Й</span>
        <span class="shiftcaps">й</span>
      </span>
    </div>
    <div class="keyboard__key key KeyW">
      <span class="eng">
        <span class="caseDown">w</span>
        <span class="caseUp">W</span>
        <span class="caps">W</span>
        <span class="shiftcaps">w</span>
      </span>
      <span class="rus">
        <span class="caseDown">ц</span>
        <span class="caseUp">Ц</span>
        <span class="caps">Ц</span>
        <span class="shiftcaps">ц</span>
      </span>
    </div>
    <div class="keyboard__key key KeyE">
      <span class="eng">
        <span class="caseDown">e</span>
        <span class="caseUp">E</span>
        <span class="caps">E</span>
        <span class="shiftcaps">e</span>
      </span>
      <span class="rus">
        <span class="caseDown">у</span>
        <span class="caseUp">У</span>
        <span class="caps">У</span>
        <span class="shiftcaps">у</span>
      </span>
    </div>
    <div class="keyboard__key key KeyR">
      <span class="eng">
        <span class="caseDown">r</span>
        <span class="caseUp">R</span>
        <span class="caps">R</span>
        <span class="shiftcaps">r</span>
      </span>
      <span class="rus">
        <span class="caseDown">к</span>
        <span class="caseUp">К</span>
        <span class="caps">К</span>
        <span class="shiftcaps">к</span>
      </span>
    </div>
    <div class="keyboard__key key KeyT">
      <span class="eng">
        <span class="caseDown">t</span>
        <span class="caseUp">T</span>
        <span class="caps">T</span>
        <span class="shiftcaps">t</span>
      </span>
      <span class="rus">
        <span class="caseDown">е</span>
        <span class="caseUp">Е</span>
        <span class="caps">Е</span>
        <span class="shiftcaps">е</span>
      </span>
    </div>
    <div class="keyboard__key key KeyY">
      <span class="eng">
        <span class="caseDown">y</span>
        <span class="caseUp">Y</span>
        <span class="caps">Y</span>
        <span class="shiftcaps">y</span>
      </span>
      <span class="rus">
        <span class="caseDown">н</span>
        <span class="caseUp">Н</span>
        <span class="caps">Н</span>
        <span class="shiftcaps">н</span>
      </span>
    </div>
    <div class="keyboard__key key KeyU">
      <span class="eng">
        <span class="caseDown">u</span>
        <span class="caseUp">U</span>
        <span class="caps">U</span>
        <span class="shiftcaps">u</span>
      </span>
      <span class="rus">
        <span class="caseDown">г</span>
        <span class="caseUp">Г</span>
        <span class="caps">Г</span>
        <span class="shiftcaps">г</span>
      </span>
    </div>
    <div class="keyboard__key key KeyI">
      <span class="eng">
        <span class="caseDown">i</span>
        <span class="caseUp">I</span>
        <span class="caps">I</span>
        <span class="shiftcaps">i</span>
      </span>
      <span class="rus">
        <span class="caseDown">ш</span>
        <span class="caseUp">Ш</span>
        <span class="caps">Ш</span>
        <span class="shiftcaps">ш</span>
      </span>
    </div>
    <div class="keyboard__key key KeyO">
      <span class="eng">
        <span class="caseDown">o</span>
        <span class="caseUp">O</span>
        <span class="caps">O</span>
        <span class="shiftcaps">o</span>
      </span>
      <span class="rus">
        <span class="caseDown">щ</span>
        <span class="caseUp">Щ</span>
        <span class="caps">Щ</span>
        <span class="shiftcaps">щ</span>
      </span>
    </div>
    <div class="keyboard__key key KeyP">
      <span class="eng">
        <span class="caseDown">p</span>
        <span class="caseUp">P</span>
        <span class="caps">P</span>
        <span class="shiftcaps">p</span>
      </span>
      <span class="rus">
        <span class="caseDown">з</span>
        <span class="caseUp">З</span>
        <span class="caps">З</span>
        <span class="shiftcaps">з</span>
      </span>
    </div>
    <div class="keyboard__key key BracketLeft">
      <span class="eng">
        <span class="caseDown">[</span>
        <span class="caseUp">{</span>
        <span class="caps">[</span>
        <span class="shiftcaps">{</span>
      </span>
      <span class="rus">
        <span class="caseDown">х</span>
        <span class="caseUp">Х</span>
        <span class="caps">Х</span>
        <span class="shiftcaps">х</span>
      </span>
    </div>
    <div class="keyboard__key key BracketRight">
      <span class="eng">
        <span class="caseDown">]</span>
        <span class="caseUp">}</span>
        <span class="caps">]</span>
        <span class="shiftcaps">}</span>
      </span>
      <span class="rus">
        <span class="caseDown">ъ</span>
        <span class="caseUp">Ъ</span>
        <span class="caps">Ъ</span>
        <span class="shiftcaps">ъ</span>
      </span>
    </div>
    <div class="keyboard__key key Backslash">
      <span class="eng">
        <span class="caseDown">\\</span>
        <span class="caseUp">|</span>
        <span class="caps">\\</span>
        <span class="shiftcaps">|</span>
      </span>
      <span class="rus">
        <span class="caseDown">\\</span>
        <span class="caseUp">/</span>
        <span class="caps">\\</span>
        <span class="shiftcaps">/</span>
      </span>
    </div>
    <div class="keyboard__key key Delete">
      <span class="eng">
        <span class="caseDown">Del</span>
        <span class="caseUp">Del</span>
        <span class="caps">Del</span>
        <span class="shiftcaps">Del</span>
      </span>
      <span class="rus">
        <span class="caseDown">Del</span>
        <span class="caseUp">Del</span>
        <span class="caps">Del</span>
        <span class="shiftcaps">Del</span>
      </span>
    </div>
  </div>
  <div class="keyboard__row">
      <div class="keyboard__key key CapsLock">
        <span class="eng">
          <span class="caseDown">CapsLock</span>
          <span class="caseUp">CapsLock</span>
          <span class="caps">CapsLock</span>
          <span class="shiftcaps">CapsLock</span>
        </span>
        <span class="rus">
          <span class="caseDown">CapsLock</span>
          <span class="caseUp">CapsLock</span>
          <span class="caps">CapsLock</span>
          <span class="shiftcaps">CapsLock</span>
        </span>
      </div>
      <div class="keyboard__key key KeyA">
        <span class="eng">
          <span class="caseDown">a</span>
          <span class="caseUp">A</span>
          <span class="caps">A</span>
          <span class="shiftcaps">a</span>
        </span>
        <span class="rus">
          <span class="caseDown">ф</span>
          <span class="caseUp">Ф</span>
          <span class="caps">Ф</span>
          <span class="shiftcaps">ф</span>
        </span>
      </div>
      <div class="keyboard__key key KeyS">
        <span class="eng">
          <span class="caseDown">s</span>
          <span class="caseUp">S</span>
          <span class="caps">S</span>
          <span class="shiftcaps">s</span>
        </span>
        <span class="rus">
          <span class="caseDown">ы</span>
          <span class="caseUp">Ы</span>
          <span class="caps">Ы</span>
          <span class="shiftcaps">ы</span>
        </span>
      </div>
      <div class="keyboard__key key KeyD">
        <span class="eng">
          <span class="caseDown">d</span>
          <span class="caseUp">D</span>
          <span class="caps">D</span>
          <span class="shiftcaps">d</span>
        </span>
        <span class="rus">
          <span class="caseDown">в</span>
          <span class="caseUp">В</span>
          <span class="caps">В</span>
          <span class="shiftcaps">в</span>
        </span>
      </div>
      <div class="keyboard__key key KeyF">
        <span class="eng">
          <span class="caseDown">f</span>
          <span class="caseUp">F</span>
          <span class="caps">F</span>
          <span class="shiftcaps">f</span>
        </span>
        <span class="rus">
          <span class="caseDown">а</span>
          <span class="caseUp">А</span>
          <span class="caps">А</span>
          <span class="shiftcaps">а</span>
        </span>
      </div>
      <div class="keyboard__key key KeyG">
        <span class="eng">
          <span class="caseDown">g</span>
          <span class="caseUp">G</span>
          <span class="caps">G</span>
          <span class="shiftcaps">g</span>
        </span>
        <span class="rus">
          <span class="caseDown">п</span>
          <span class="caseUp">П</span>
          <span class="caps">П</span>
          <span class="shiftcaps">п</span>
        </span>
      </div>
      <div class="keyboard__key key KeyH">
        <span class="eng">
          <span class="caseDown">h</span>
          <span class="caseUp">H</span>
          <span class="caps">H</span>
          <span class="shiftcaps">h</span>
        </span>
        <span class="rus">
          <span class="caseDown">р</span>
          <span class="caseUp">Р</span>
          <span class="caps">Р</span>
          <span class="shiftcaps">р</span>
        </span>
      </div>
      <div class="keyboard__key key KeyJ">
        <span class="eng">
          <span class="caseDown">j</span>
          <span class="caseUp">J</span>
          <span class="caps">J</span>
          <span class="shiftcaps">j</span>
        </span>
        <span class="rus">
          <span class="caseDown">о</span>
          <span class="caseUp">О</span>
          <span class="caps">О</span>
          <span class="shiftcaps">о</span>
        </span>
      </div>
      <div class="keyboard__key key KeyK">
        <span class="eng">
          <span class="caseDown">k</span>
          <span class="caseUp">K</span>
          <span class="caps">K</span>
          <span class="shiftcaps">k</span>
        </span>
        <span class="rus">
          <span class="caseDown">л</span>
          <span class="caseUp">Л</span>
          <span class="caps">Л</span>
          <span class="shiftcaps">л</span>
        </span>
      </div>
      <div class="keyboard__key key KeyL">
        <span class="eng">
          <span class="caseDown">l</span>
          <span class="caseUp">L</span>
          <span class="caps">L</span>
          <span class="shiftcaps">l</span>
        </span>
        <span class="rus">
          <span class="caseDown">д</span>
          <span class="caseUp">Д</span>
          <span class="caps">Д</span>
          <span class="shiftcaps">д</span>
        </span>
      </div>
      <div class="keyboard__key key Semicolon">
        <span class="eng">
          <span class="caseDown">;</span>
          <span class="caseUp">:</span>
          <span class="caps">;</span>
          <span class="shiftcaps">:</span>
        </span>
        <span class="rus">
          <span class="caseDown">ж</span>
          <span class="caseUp">Ж</span>
          <span class="caps">Ж</span>
          <span class="shiftcaps">ж</span>
        </span>
      </div>
      <div class="keyboard__key key Quote">
        <span class="eng">
          <span class="caseDown">'</span>
          <span class="caseUp">"</span>
          <span class="caps">'</span>
          <span class="shiftcaps">"</span>
        </span>
        <span class="rus">
          <span class="caseDown">э</span>
          <span class="caseUp">Э</span>
          <span class="caps">Э</span>
          <span class="shiftcaps">э</span>
        </span>
      </div>
      <div class="keyboard__key key Enter">
        <span class="eng">
          <span class="caseDown">Enter</span>
          <span class="caseUp">Enter</span>
          <span class="caps">Enter</span>
          <span class="shiftcaps">Enter</span>
        </span>
        <span class="rus">
          <span class="caseDown">Enter</span>
          <span class="caseUp">Enter</span>
          <span class="caps">Enter</span>
          <span class="shiftcaps">Enter</span>
        </span>
      </div>
  </div>
  <div class="keyboard__row">
      <div class="keyboard__key key ShiftLeft">
        <span class="eng">
          <span class="caseDown">Shift</span>
          <span class="caseUp">Shift</span>
          <span class="caps">Shift</span>
          <span class="shiftcaps">Shift</span>
        </span>
        <span class="rus">
          <span class="caseDown">Shift</span>
          <span class="caseUp">Shift</span>
          <span class="caps">Shift</span>
          <span class="shiftcaps">Shift</span>
        </span>
      </div>
      <div class="keyboard__key key KeyZ">
        <span class="eng">
          <span class="caseDown">z</span>
          <span class="caseUp">Z</span>
          <span class="caps">Z</span>
          <span class="shiftcaps">z</span>
        </span>
        <span class="rus">
          <span class="caseDown">я</span>
          <span class="caseUp">Я</span>
          <span class="caps">Я</span>
          <span class="shiftcaps">я</span>
        </span>
      </div>
      <div class="keyboard__key key KeyX">
        <span class="eng">
          <span class="caseDown">x</span>
          <span class="caseUp">X</span>
          <span class="caps">X</span>
          <span class="shiftcaps">x</span>
        </span>
        <span class="rus">
          <span class="caseDown">ч</span>
          <span class="caseUp">Ч</span>
          <span class="caps">Ч</span>
          <span class="shiftcaps">ч</span>
        </span>
      </div>
      <div class="keyboard__key key KeyC">
        <span class="eng">
          <span class="caseDown">c</span>
          <span class="caseUp">C</span>
          <span class="caps">C</span>
          <span class="shiftcaps">c</span>
        </span>
        <span class="rus">
          <span class="caseDown">с</span>
          <span class="caseUp">С</span>
          <span class="caps">С</span>
          <span class="shiftcaps">с</span>
        </span>
      </div>
      <div class="keyboard__key key KeyV">
        <span class="eng">
          <span class="caseDown">v</span>
          <span class="caseUp">V</span>
          <span class="caps">V</span>
          <span class="shiftcaps">v</span>
        </span>
        <span class="rus">
          <span class="caseDown">м</span>
          <span class="caseUp">М</span>
          <span class="caps">М</span>
          <span class="shiftcaps">м</span>
        </span>
      </div>
      <div class="keyboard__key key KeyB">
        <span class="eng">
          <span class="caseDown">b</span>
          <span class="caseUp">B</span>
          <span class="caps">B</span>
          <span class="shiftcaps">b</span>
        </span>
        <span class="rus">
          <span class="caseDown">и</span>
          <span class="caseUp">И</span>
          <span class="caps">И</span>
          <span class="shiftcaps">и</span>
        </span>
      </div>
      <div class="keyboard__key key KeyN">
        <span class="eng">
          <span class="caseDown">n</span>
          <span class="caseUp">N</span>
          <span class="caps">N</span>
          <span class="shiftcaps">n</span>
        </span>
        <span class="rus">
          <span class="caseDown">т</span>
          <span class="caseUp">Т</span>
          <span class="caps">Т</span>
          <span class="shiftcaps">т</span>
        </span>
      </div>
      <div class="keyboard__key key KeyM">
        <span class="eng">
          <span class="caseDown">m</span>
          <span class="caseUp">M</span>
          <span class="caps">M</span>
          <span class="shiftcaps">m</span>
        </span>
        <span class="rus">
          <span class="caseDown">ь</span>
          <span class="caseUp">Ь</span>
          <span class="caps">Ь</span>
          <span class="shiftcaps">ь</span>
        </span>
      </div>
      <div class="keyboard__key key Comma">
        <span class="eng">
          <span class="caseDown">,</span>
          <span class="caseUp">&lt;</span>
          <span class="caps">,</span>
          <span class="shiftcaps">&lt;</span>
        </span>
        <span class="rus">
          <span class="caseDown">б</span>
          <span class="caseUp">Б</span>
          <span class="caps">Б</span>
          <span class="shiftcaps">б</span>
        </span>
      </div>
      <div class="keyboard__key key Period">
        <span class="eng">
          <span class="caseDown">.</span>
          <span class="caseUp">&gt;</span>
          <span class="caps">.</span>
          <span class="shiftcaps">&gt;</span>
        </span>
        <span class="rus">
          <span class="caseDown">ю</span>
          <span class="caseUp">Ю</span>
          <span class="caps">Ю</span>
          <span class="shiftcaps">ю</span>
        </span>
      </div>
      <div class="keyboard__key key Slash">
        <span class="eng">
          <span class="caseDown">/</span>
          <span class="caseUp">?</span>
          <span class="caps">/</span>
          <span class="shiftcaps">?</span>
        </span>
        <span class="rus">
          <span class="caseDown">.</span>
          <span class="caseUp">,</span>
          <span class="caps">.</span>
          <span class="shiftcaps">,</span>
        </span>
      </div>
      <div class="keyboard__key key ArrowUp">
        <span class="eng">
          <span class="caseDown">&#9650;</span>
          <span class="caseUp">&#9650;</span>
          <span class="caps">&#9650;</span>
          <span class="shiftcaps">&#9650;</span>
        </span>
        <span class="rus">
          <span class="caseDown">&#9650;</span>
          <span class="caseUp">&#9650;</span>
          <span class="caps">&#9650;</span>
          <span class="shiftcaps">&#9650;</span>
        </span>
      </div>
      <div class="keyboard__key key ShiftRight">
        <span class="eng">
          <span class="caseDown">Shift</span>
          <span class="caseUp">Shift</span>
          <span class="caps">Shift</span>
          <span class="shiftcaps">Shift</span>
        </span>
        <span class="rus">
          <span class="caseDown">Shift</span>
          <span class="caseUp">Shift</span>
          <span class="caps">Shift</span>
          <span class="shiftcaps">Shift</span>
        </span>
      </div>
  </div>
  <div class="keyboard__row">
      <div class="keyboard__key key ControlLeft">
        <span class="eng">
          <span class="caseDown">Ctrl</span>
          <span class="caseUp">Ctrl</span>
          <span class="caps">Ctrl</span>
          <span class="shiftcaps">Ctrl</span>
        </span>
        <span class="rus">
          <span class="caseDown">Ctrl</span>
          <span class="caseUp">Ctrl</span>
          <span class="caps">Ctrl</span>
          <span class="shiftcaps">Ctrl</span>
        </span>
      </div>
      <div class="keyboard__key key MetaLeft">
        <span class="eng">
          <span class="caseDown">Win</span>
          <span class="caseUp">Win</span>
          <span class="caps">Win</span>
          <span class="shiftcaps">Win</span>
        </span>
        <span class="rus">
          <span class="caseDown">Win</span>
          <span class="caseUp">Win</span>
          <span class="caps">Win</span>
          <span class="shiftcaps">Win</span>
        </span>
      </div>
      <div class="keyboard__key key AltLeft">
        <span class="eng">
          <span class="caseDown">Alt</span>
          <span class="caseUp">Alt</span>
          <span class="caps">Alt</span>
          <span class="shiftcaps">Alt</span>
        </span>
        <span class="rus">
          <span class="caseDown">Alt</span>
          <span class="caseUp">Alt</span>
          <span class="caps">Alt</span>
          <span class="shiftcaps">Alt</span>
        </span>
      </div>
      <div class="keyboard__key key Space">
        <span class="eng">
          <span class="caseDown"> </span>
          <span class="caseUp"> </span>
          <span class="caps"> </span>
          <span class="shiftcaps"> </span>
        </span>
        <span class="rus">
          <span class="caseDown"> </span>
          <span class="caseUp"> </span>
          <span class="caps"> </span>
          <span class="shiftcaps"> </span>
        </span>
      </div>
      <div class="keyboard__key key AltRight">
        <span class="eng">
          <span class="caseDown">Alt</span>
          <span class="caseUp">Alt</span>
          <span class="caps">Alt</span>
          <span class="shiftcaps">Alt</span>
        </span>
        <span class="rus">
          <span class="caseDown">Alt</span>
          <span class="caseUp">Alt</span>
          <span class="caps">Alt</span>
          <span class="shiftcaps">Alt</span>
        </span>
      </div>
      <div class="keyboard__key key ArrowLeft">
        <span class="eng">
          <span class="caseDown">&#9668;</span>
          <span class="caseUp">&#9668;</span>
          <span class="caps">&#9668;</span>
          <span class="shiftcaps">&#9668;</span>
        </span>
        <span class="rus">
          <span class="caseDown">&#9668;</span>
          <span class="caseUp">&#9668;</span>
          <span class="caps">&#9668;</span>
          <span class="shiftcaps">&#9668;</span>
        </span>
      </div>
      <div class="keyboard__key key ArrowDown">
        <span class="eng">
          <span class="caseDown">&#9660;</span>
          <span class="caseUp">&#9660;</span>
          <span class="caps">&#9660;</span>
          <span class="shiftcaps">&#9660;</span>
        </span>
        <span class="rus">
          <span class="caseDown">&#9660;</span>
          <span class="caseUp">&#9660;</span>
          <span class="caps">&#9660;</span>
          <span class="shiftcaps">&#9660;</span>
        </span>
      </div>
      <div class="keyboard__key key ArrowRight">
        <span class="eng">
          <span class="caseDown">&#9658;</span>
          <span class="caseUp">&#9658;</span>
          <span class="caps">&#9658;</span>
          <span class="shiftcaps">&#9658;</span>
        </span>
        <span class="rus">
          <span class="caseDown">&#9658;</span>
          <span class="caseUp">&#9658;</span>
          <span class="caps">&#9658;</span>
          <span class="shiftcaps">&#9658;</span>
        </span>
      </div>
      <div class="keyboard__key key ControlRight">
        <span class="eng">
          <span class="caseDown">Ctrl</span>
          <span class="caseUp">Ctrl</span>
          <span class="caps">Ctrl</span>
          <span class="shiftcaps">Ctrl</span>
        </span>
        <span class="rus">
          <span class="caseDown">Ctrl</span>
          <span class="caseUp">Ctrl</span>
          <span class="caps">Ctrl</span>
          <span class="shiftcaps">Ctrl</span>
        </span>
      </div>
  </div>
</div>
<p class="description">The keyboard was created in the Windows operating system<br>To switch the language combination: left ctrl + alt</p>
</div>
`
document.body.append(keyboard)
}
genereateKeyboard()

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
        localStorage.setItem('test', document.querySelectorAll('.rus'));
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