"use client";

import Link from "next/link";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="w-full h-screen flex flex-col gap-10 justify-center items-center border-y-orange-200">
      <div className="px-8 py-5 rounded-3xl bg-gray-700 text-white text-5xl font-bold">
        {`ohhh nooooooo!!!! ${error.message} 😥😝`}
      </div>
      <Link
        href="/"
        className="bg-gray-500 hover:bg-gray-300 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
      >
        Dont ever come here again
      </Link>
    </div>
  );
}
