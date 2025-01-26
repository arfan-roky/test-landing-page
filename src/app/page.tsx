import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { PulseBeams } from "./Preview";
import { MarqueeDemo } from "@/components/marquee";

const HomePage = () => {
  return (
    <section className="flex flex-col items-center justify-center relative bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="h-[50svh] flex justify-center items-center flex-col gap-4 py-10 z-10">
        <span className="inline-block p-2 bg-black border border-slate-700 rounded-full font-semibold text-xs text-white">
          💡 Create amazing digital experiences
        </span>
        <h1 className="text-8xl font-extrabold text-center text-white">
          Digital Experiences
        </h1>
        <p className="max-w-xl text-xl text-center text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          quis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo, quis. Lorem, ipsum
        </p>
        <button className="w-[200px] py-4 bg-slate-800 rounded-full border border-slate-700 font-medium text-white">
          Get Started
        </button>
      </div>
      {/* <ReviewSection /> */}
      <MarqueeDemo />
      <PulseBeams />
    </section>
  );
};

export default HomePage;

const DynamicImage = async ({ src }: { src: string }) => {
  const buffer = await fetch(src).then((res) => res.arrayBuffer());
  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  return (
    <div className="relative w-1/4 h-1/2">
      <Image
        src={src}
        alt="Head concierge"
        fill
        className="object-cover"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        blurDataURL={base64}
      />
    </div>
  );
};
