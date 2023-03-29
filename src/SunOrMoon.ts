export class SunOrMoon {
  isCurrentThemeDark: boolean;
  modeSvg: SVGElement;
  maskCircle: SVGCircleElement;
  coState: SVGCircleElement;
  sunLineGroup: SVGGElement;

  constructor(isCurrThemeDark: boolean) {
    this.isCurrentThemeDark = isCurrThemeDark;
    this.modeSvg = this.getNode('svg', {
      width: 24,
      height: 24,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: isCurrThemeDark ? 'white' : 'black',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      transform: `rotate(${isCurrThemeDark ? 40 : 90})`,
    });

    const mask = this.getNode('mask', { id: 'mask' });
    mask.appendChild(this.getNode('rect', { x: 0, y: 0, width: '100%', height: '100%', fill: 'white' }));

    this.maskCircle = this.getNode('circle', {
      cx: isCurrThemeDark ? 12 : 30,
      cy: isCurrThemeDark ? 4 : 0,
      r: 9,
      fill: 'black',
    });
    mask.appendChild(this.maskCircle);

    this.coState = this.getNode('circle', {
      cx: 12,
      cy: 12,
      r: isCurrThemeDark ? 9 : 5,
      fill: isCurrThemeDark ? 'white' : 'black',
      mask: 'url(#mask)',
    });

    this.sunLineGroup = this.getNode('g', { fill: 'currentColor', opacity: isCurrThemeDark ? 0 : 1 });

    this.sunLineGroup.appendChild(this.getNode('line', { x1: 12, y1: 1, x2: 12, y2: 3 }));
    this.sunLineGroup.appendChild(this.getNode('line', { x1: 12, y1: 21, x2: 12, y2: 23 }));
    this.sunLineGroup.appendChild(this.getNode('line', { x1: 4.22, y1: 4.22, x2: 5.64, y2: 5.64 }));
    this.sunLineGroup.appendChild(this.getNode('line', { x1: 18.36, y1: 18.36, x2: 19.78, y2: 19.78 }));
    this.sunLineGroup.appendChild(this.getNode('line', { x1: 1, y1: 12, x2: 3, y2: 12 }));
    this.sunLineGroup.appendChild(this.getNode('line', { x1: 21, y1: 12, x2: 23, y2: 12 }));
    this.sunLineGroup.appendChild(this.getNode('line', { x1: 4.22, y1: 19.78, x2: 5.64, y2: 18.36 }));
    this.sunLineGroup.appendChild(this.getNode('line', { x1: 18.36, y1: 5.64, x2: 19.78, y2: 4.22 }));

    this.modeSvg.appendChild(mask);
    this.modeSvg.appendChild(this.coState);
    this.modeSvg.appendChild(this.sunLineGroup);
  }
  getNode(n: string, v: any) {
    const newN = document.createElementNS('http://www.w3.org/2000/svg', n);
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

  getSunOrMoon() {
    return this.modeSvg;
  }

}
