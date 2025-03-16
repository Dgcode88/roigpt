import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative h-10 w-32">
        <Image
          src="/logo.png"
          alt="RoiGPT Logo"
          width={128}
          height={40}
          className="object-contain"
        />
      </div>
    </Link>
  );
}
