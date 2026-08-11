import Image from "next/image";

const LOGO_RATIO = 2935 / 576;

type WordmarkProps = {
  size?: number;
  variant?: "teal" | "reversed";
  alt?: string;
};

export function Wordmark({ size = 24, variant = "teal", alt = "Reggenerate™" }: WordmarkProps) {
  const file = variant === "reversed" ? "reggenerate-logo.png" : "reggenerate-logo-teal.png";
  const width = Math.round(size * LOGO_RATIO);
  return (
    <Image
      src={`/redesign/assets/logos/${file}`}
      alt={alt}
      height={size}
      width={width}
      style={{ height: size, width, objectFit: "contain" }}
      unoptimized
    />
  );
}
