import Image from "next/image";
import Link from "next/link";
import { courses } from "@/lib/courses";

const waitThreeSeconds = () =>
  new Promise((resolve) => setTimeout(resolve, 3000));

async function CourseID({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const course = courses[id];
  await waitThreeSeconds();
  if (!course) throw new Error("Course not found");

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-gray-100 to-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-96 w-full">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{course.desc}</p>

            <div className="flex items-center gap-4 mb-8 pb-8 border-b">
              <span className="text-5xl font-bold text-black">
                ${course.price}
              </span>
              <span className="text-gray-500 text-sm">One-time payment</span>
            </div>

            <Link href={`/courses/${id}/success`} className="block">
              <button className="w-full bg-black hover:bg-white hover:text-black hover:border text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What You'll Learn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-black">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-lg font-medium text-gray-900">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseID;
