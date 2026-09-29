import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
}

const Logo = ({ variant = "dark" }: LogoProps) => {
  const logoSrc =
    variant === "light" ? "/images/logos/logo-light.png" : "/images/logos/logo-dark.png";

  return (
    <Link href="/">
      <Image
        src={logoSrc}
        alt="ByteSpace"
        width={171}
        height={37}
        priority
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
