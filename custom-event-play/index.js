const block = document.querySelector('.test');
block.addEventListener('click', (e) => {
  const dataStart = 5;
  const ev = new CustomEvent('myEv', {detail: dataStart});
  block.dispatchEvent(ev);
})

block.addEventListener('myEv', (e) => {
  alert('result: ' + e.detail);
})

