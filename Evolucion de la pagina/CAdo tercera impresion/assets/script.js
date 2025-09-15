const TITLE_TEXT = "CAdo ,estamos con vos";
const titleEl = document.getElementById('title');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');

let maxDelay = 0;
Array.from(TITLE_TEXT).forEach((ch, i) => {
  const span = document.createElement('span');
  if (ch === ' ') {
    span.className = 'space';
    span.innerHTML = '&nbsp;';
  } else {
    span.className = 'char';
    const delay = i * 0.05;
    span.style.animationDelay = `${delay}s`;
    maxDelay = delay;
    span.textContent = ch;
  }
  titleEl.appendChild(span);
});

const total = (maxDelay + 0.6) * 1000;
setTimeout(() => questionEl.classList.add('show'), total + 300);
setTimeout(() => choicesEl.classList.add('show'), total + 1100);