export let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', function () {
  console.log('motion changed!!');
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
});
