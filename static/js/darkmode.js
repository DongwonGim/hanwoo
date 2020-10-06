let flag = false;
const head = document.getElementsByTagName('head')[0];
console.log(head)
const dark_css = document.createElement('link');
console.log(dark_css)
dark_css.rel = 'stylesheet';
dark_css.href = 'static/css/darkmode.css';

const goDark = () => {
  flag = true;
  head.appendChild(dark_css);
}
const goLight = () => {
  flag = false;
  if (head.lastChild === dark_css)
    head.removeChild(dark_css);
}
const isDarkMode = () =>
  (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
    ? goDark() : goLight();
const switchMode = () => flag ? goLight() : goDark();

isDarkMode();