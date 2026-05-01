import Image from "next/image";
import ReviewCard from "@/sections/reviewcard";
import { reviews } from "@/lib/reviews";

export default function Home() {
  return (
    <div className="w-full max-w-300 py-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center items-start gap-5 w-1/2">
          <h2 className="text-5xl font-bold">Consistency and Community</h2>
          <p className="text-xl text-neutral-500 font-semibold">
            Content is everywhere. We provide what is rare “an unmatched,
            community-driven learning experience” with peer learning, bounties,
            code reviews, doubt sessions, alumni network.
          </p>
          <button className="bg-black text-white px-5 py-3 rounded-full font-bold">
            Start Learning
          </button>
        </div>
        <div className=" w-1/2 h-125 relative flex justify-end">
          <Image
            src="/student1.png"
            alt="..."
            width={500}
            height={500}
            className="drop-shadow-black drop-shadow-xl"
          />
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-4xl font-bold mb-10 text-center">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              author={review.author}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
