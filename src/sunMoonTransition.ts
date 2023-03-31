import { mode } from "./handleTheme";
import { modeButton } from "./main";

export function handleSunMoonAnimation() {
  const svg = modeButton?.children[0];

  const circleMask = svg?.children[0]?.children[1];

  const sharedCircle = svg?.children[1];

  const sunLines = svg?.children[2];
  const isDarkMode = mode === 'dark';

  svg?.animate(
    { transform: isDarkMode ? 'rotate(40deg)' : 'rotate(90deg)' },
    { fill: 'forwards', duration: 500, easing: 'ease', delay: 100 },
  );
  circleMask?.animate(
    { cx: isDarkMode ? 12 : 30, cy: isDarkMode ? 4 : 0 },
    { fill: 'forwards', duration: 500, easing: 'cubic-bezier(.69,.28,0,1.09)', delay: 100 },
  );
  sharedCircle?.animate(
    { r: isDarkMode ? 9 : 5 },
    { fill: 'forwards', duration: 500, easing: 'cubic-bezier(.69,.28,0,1.09)', delay: 100 },
  );
  sunLines?.animate(
    { opacity: isDarkMode ? 0 : 1 },
    { fill: 'forwards', duration: 500, easing: 'cubic-bezier(.69,.28,0,1.09)', delay: 100 }
  )
}