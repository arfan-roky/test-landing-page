"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Sarah Chen",
    handle: "@sarahcodes",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content:
      "This is absolutely mind blowing. The animations are so smooth and natural. Already thinking about how to integrate this into our next project! ✨ This is absolutely mind blowing. The animations are so smooth and natural. Already thinking about how to integrate this into our next project! ✨",
  },
  {
    name: "Alex Rivera",
    handle: "@arivera_dev",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content:
      "Incredible work! The attention to detail in these components is outstanding. Can't wait to use this in production. 🚀",
  },
  {
    name: "Emma Wilson",
    handle: "@emmaw_design",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content:
      "Best UI components I've seen in a while. The animations are butter smooth and the design is top-notch! 💯 This is absolutely mind blowing. The animations are so smooth and natural. Already thinking about how to integrate this into our next project! ✨",
  },
];

const ReviewSection = () => {
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-slate-950 h-svh overflow-hidden">
      <div className="container mx-auto mt-10 flex gap-8">
        <div ref={firstRef} className="flex-1 flex flex-col gap-4">
          <motion.div className="space-y-4">
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  delay: index * 5,
                  repeat: Infinity,
                }}
                key={index}
                className="border border-gray-800 rounded-xl bg-slate-900 p-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={review.avatarUrl}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover aspect-[1/1]"
                  />
                  <div className="flex flex-col gap-px">
                    <h3 className="text-gray-50">{review.name}</h3>
                    <p className="text-gray-400">{review.handle}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{review.content}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="space-y-4"
          >
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <motion.div
                key={index}
                className="border border-gray-800 rounded-xl bg-slate-900 p-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={review.avatarUrl}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover aspect-[1/1]"
                  />
                  <div className="flex flex-col gap-px">
                    <h3 className="text-gray-50">{review.name}</h3>
                    <p className="text-gray-400">{review.handle}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{review.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div ref={secondRef} className="flex-1 flex flex-col gap-4">
          <div className="space-y-4">
            {[...reviews.toReversed(), ...reviews, ...reviews]
              .sort()
              .map((review, index) => (
                <div
                  key={index}
                  className="border border-gray-800 rounded-xl bg-slate-900 p-4"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.avatarUrl}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover aspect-[1/1]"
                    />
                    <div className="flex flex-col gap-px">
                      <h3 className="text-gray-50">{review.name}</h3>
                      <p className="text-gray-400">{review.handle}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300">{review.content}</p>
                </div>
              ))}
          </div>
        </div>

        <div ref={thirdRef} className="flex-1 flex flex-col gap-4">
          <div className="space-y-4">
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-xl bg-slate-900 p-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={review.avatarUrl}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover aspect-[1/1]"
                  />
                  <div className="flex flex-col gap-px">
                    <h3 className="text-gray-50">{review.name}</h3>
                    <p className="text-gray-400">{review.handle}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ReviewSection;
