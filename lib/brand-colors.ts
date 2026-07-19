/**
 * Hex crus da marca DevClub — única exceção às classes de tema do Tailwind.
 * Uso restrito a superfícies <canvas> 2D (Hero, Letter Glitch), que não leem
 * CSS custom properties.
 */
export const BRAND_COLORS = {
  background: "#1F1E20",
  foreground: "#FFFFFF",
  primary: "#39D353",
  secondary: "#721AE7",
} as const;

export function hexToRgba(hex: string, alpha: number) {
  const value = hex.replace("#", "");
  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
