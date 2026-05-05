import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <div className="flex justify-center mb-8">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
              <svg
                className="h-12 w-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎉 Congratulations!
          </h1>

          <p className="text-xl text-gray-600 mb-2">
            You've successfully enrolled in this course!
          </p>

          <p className="text-gray-500 mb-8">
            Get ready to start your learning journey. Check your email for
            course access details.
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              View All Courses
            </Link>

            <Link
              href="/"
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
