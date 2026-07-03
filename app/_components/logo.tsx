import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none group">
      <Image
        src="/images/xenon-logo.png"
        alt=""
        width={70}
        height={50}
        className="h-12 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        aria-hidden="true"
      />
      <span className="font-heading text-3xl font-bold tracking-tight text-zinc-900 transition-colors duration-200 group-hover:text-black">
        xenon
      </span>
    </div>
  );
}

