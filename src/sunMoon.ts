import { isCurrThemeDark, toggleTheme } from './theme';

function getNode(n: string, v: any) {
  const newN = document.createElementNS('http://www.w3.org/2000/svg', n) as SVGAElement;
  for (const p in v)
    newN.setAttributeNS(
      null,
      p.replace(/[A-Z]/g, function (m, p, o, s) {
        return '-' + m.toLowerCase();
      }),
      v[p],
    );
  return newN;
}

const modeSvg = getNode('svg', {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

const mask = getNode('mask', { id: 'mask' });
mask.appendChild(getNode('rect', { x: 0, y: 0, width: '100%', height: '100%', fill: 'white' }));
const maskCircle = getNode('circle', {
  cx: isCurrThemeDark ? 12 : 30,
  cy: isCurrThemeDark ? 4 : 0,
  r: 9,
  fill: 'black',
});
mask.appendChild(maskCircle);

const coState = getNode('circle', {
  cx: 12,
  cy: 12,
  r: isCurrThemeDark ? 9 : 5,
  fill: 'black',
  mask: 'url(#mask)',
});

const sunLineGroup = getNode('g', { fill: 'currentColor', opacity: isCurrThemeDark ? 0 : 1 });

sunLineGroup.appendChild(getNode('line', { x1: 12, y1: 1, x2: 12, y2: 3 }));
sunLineGroup.appendChild(getNode('line', { x1: 12, y1: 21, x2: 12, y2: 23 }));
sunLineGroup.appendChild(getNode('line', { x1: 4.22, y1: 4.22, x2: 5.64, y2: 5.64 }));
sunLineGroup.appendChild(getNode('line', { x1: 18.36, y1: 18.36, x2: 19.78, y2: 19.78 }));
sunLineGroup.appendChild(getNode('line', { x1: 1, y1: 12, x2: 3, y2: 12 }));
sunLineGroup.appendChild(getNode('line', { x1: 21, y1: 12, x2: 23, y2: 12 }));
sunLineGroup.appendChild(getNode('line', { x1: 4.22, y1: 19.78, x2: 5.64, y2: 18.36 }));
sunLineGroup.appendChild(getNode('line', { x1: 18.36, y1: 5.64, x2: 19.78, y2: 4.22 }));

modeSvg.appendChild(mask);
modeSvg.appendChild(coState);
modeSvg.appendChild(sunLineGroup);

const modeToggle = document.getElementById('mode-toggle') as HTMLButtonElement;

modeToggle.appendChild(modeSvg);

export default function sunMoon(e: Event) {
  toggleTheme();
  console.log(isCurrThemeDark);

  modeSvg.animate(
    { rotate: isCurrThemeDark ? '50deg' : '90deg' },
    { fill: 'forwards', duration: 500, easing: 'ease', delay: 100 },
  );
  maskCircle.animate(
    { cx: isCurrThemeDark ? 12 : 30, cy: isCurrThemeDark ? 4 : 0 },
    { fill: 'forwards', duration: 500, easing: 'cubic-bezier(.69,.28,0,1.09)', delay: 100 },
  );
  coState.animate(
    { r: isCurrThemeDark ? 9 : 5 },
    { fill: 'forwards', duration: 500, easing: 'cubic-bezier(.69,.28,0,1.09)', delay: 100 },
  );
  sunLineGroup.animate(
    { opacity: isCurrThemeDark ? 0 : 1 },
    { fill: 'forwards', duration: 500, easing: 'cubic-bezier(.69,.28,0,1.09)', delay: 100 },
  );
}
