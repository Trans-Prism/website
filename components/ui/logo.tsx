import Image from "next/image";
import Link from "next/link";
import LogoSvg from "@/public/images/logo1.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Trans Prism">
      <Image
        className="h-10 w-auto"
        src={LogoSvg}
        width={40}
        height={40}
        alt="Trans Prism"
      />
    </Link>
  );
}
