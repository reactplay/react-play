export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

export function generateAbbreName(first: string, last: string): string {
  return `${first[0]}${last[0]}`;
}
