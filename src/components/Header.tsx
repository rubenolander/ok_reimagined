import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-[#e8e2df] p-1">
      <Link href="/">
        <Image
          priority
          width={160}
          height={1}
          style={{ height: "auto" }}
          alt="Olander Kalender logo"
          src={"/Logo.svg"}
        />
      </Link>
    </header>
  );
}
