const cursor = document.querySelector('.cursor-effect');

document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
});
