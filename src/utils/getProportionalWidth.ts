const wWindow = window.innerWidth;

export default function getProportionalWidth(
  widthElementDefault: number
): string {
  const padding = 25;
  const countElemets = Math.floor(wWindow / (widthElementDefault + padding));
  const content = countElemets * (widthElementDefault + padding);
  if (wWindow > content) {
    widthElementDefault =
      (wWindow - (countElemets * padding + padding)) / countElemets;
  }
  return `${widthElementDefault}px`;
}
