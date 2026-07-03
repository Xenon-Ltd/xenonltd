import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 select-none group">
      <Image
        src="/images/xenon-logo.png"
        alt=""
        width={55}
        height={40}
        className="h-10 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        aria-hidden="true"
      />
      <span className="font-heading text-2xl font-bold tracking-tight text-zinc-900 transition-colors duration-200 group-hover:text-black">
        xenon
      </span>
    </div>
  );
}
