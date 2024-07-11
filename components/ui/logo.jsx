import Image from "next/image";
import Link from "next/link";

export default function Logo(css) {
  return (
    <Link href="/">
      <Image
        src="/Sip&PlayLogo.png"
        alt="Logo"
        width={100}
        height={100}
        className={`h-auto select-none ${css}`}
        draggable="false"
      />
    </Link>
  );
}
