import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
//   {
//     name: "Jane",
//     username: "@jane",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jane",
//   },
//   {
//     name: "Jenny",
//     username: "@jenny",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jenny",
//   },
//   {
//     name: "James",
//     username: "@james",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/james",
//   },
// ];

const reviews = [
  {
    name: "Sarah Chen",
    username: "@sarahcodes",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    body: "This is absolutely mind blowing. The animations are so smooth and natural. Already thinking about how to integrate this into our next project! ✨ This is absolutely mind blowing. The animations are so smooth and natural. Already thinking about how to integrate this into our next project! ✨",
  },
  {
    name: "Alex Rivera",
    username: "@arivera_dev",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    body: "Incredible work! The attention to detail in these components is outstanding. Can't wait to use this in production. 🚀",
  },
  {
    name: "Emma Wilson",
    username: "@emmaw_design",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    body: "Best UI components I've seen in a while. The animations are butter smooth and the design is top-notch! 💯 This is absolutely mind blowing. The animations are so smooth and natural. Already thinking about how to integrate this into our next project! ✨",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure className="border border-gray-800 rounded-xl bg-slate-900 p-4">
      <div className="flex items-center gap-3">
        <Image
          src={img}
          alt={name}
          width={50}
          height={50}
          className="rounded-full object-cover aspect-[1/1]"
        />
        <div className="flex flex-col gap-px">
          <h3 className="text-gray-50">{name}</h3>
          <p className="text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-gray-300">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className=" py-20 w-full justify-center overflow-hidden bg-slate-950">
      <div className="text-center mb-10">
        <h2 className="text-gray-100 text-2xl font-bold">
          Loved by thousands of people
        </h2>
        <p className="text-gray-300 text-lg font-medium">
          Here&apos;s what some of our users have to say about Joss.
        </p>
      </div>
      <div className="relative container mx-auto flex h-[70svh]">
        <Marquee className="[--duration:6s]" vertical>
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee className="[--duration:14s]" vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee className="[--duration:6s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950"></div>
      </div>
    </div>
  );
}
