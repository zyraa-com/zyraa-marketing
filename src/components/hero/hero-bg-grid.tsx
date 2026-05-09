export function HeroBgGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 opacity-100 dark:opacity-100 light:opacity-55"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(217,114,24,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(217,114,24,0.06) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage:
          "radial-gradient(ellipse 70% 55% at 50% 30%, #000 25%, transparent 78%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 55% at 50% 30%, #000 25%, transparent 78%)",
      }}
    />
  );
}
