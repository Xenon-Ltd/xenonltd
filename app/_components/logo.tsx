import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center select-none group">
      <Image
        src="/images/how-it-works-actual-2db589.png"
        alt="Xenon Logo"
        width={55}
        height={40}
        className="h-10 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        aria-hidden="true"
      />
    </div>
  );
}
