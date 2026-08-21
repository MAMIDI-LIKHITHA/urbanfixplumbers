import logoAsset from "@/assets/urbanfix-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Urban Fix Plumbers — Reliable. Professional. On Time."
      width={429}
      height={352}
      className={`h-12 w-auto md:h-14 ${className}`}
    />
  );
}
