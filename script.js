const area = document.getElementById('input');

init()
function init() {
  document.onkeydown = function (event) {
    console.log(event.code);
    console.log(event.key);
    area.value += event.key;
    const prev = document.querySelector(`.${event.code}`);
    prev.classList.add('active');
    setTimeout(() => {
      prev.classList.remove('active');
    }, 200);
  };
}

const keys = document.querySelectorAll('.key');

keys.forEach(function (el) {
  el.addEventListener('click', function (e) {
    this.classList.add('active');
    area.value += this.firstElementChild.innerText;
    setTimeout(() => {
      this.classList.remove('active');
    }, 200);
  });
});