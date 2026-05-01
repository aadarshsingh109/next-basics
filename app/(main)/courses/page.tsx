import Link from "next/link";
import CourseCard from "@/sections/courseCard";
import { courses, courseTitles } from "@/lib/courses";

const Courses = async ({
  searchParams,
}: {
  searchParams: Promise<{ title: string }>;
}) => {
  const { title } = await searchParams;
  const activeTitle = title ?? "All";

  const filteredCourses =
    activeTitle === "All"
      ? courses
      : courses.filter((course) => course.title === activeTitle);

  return (
    <div className="flex flex-col items-start justify-start gap-10 py-10 max-w-300 w-full">
      <h2 className="text-5xl font-bold">Our Courses</h2>

      <div className="flex gap-3 flex-wrap">
        {courseTitles.map((t, i) => (
          <Link
            key={i}
            href={`/courses?title=${t}`}
            className={`px-4 py-2 border rounded-sm ${
              activeTitle === t ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {t}
          </Link>
        ))}
      </div>

      {filteredCourses.map((course, i) => (
        <Link className="w-full" key={i} href={`/courses/${i + 1}`}>
          <CourseCard
            image={course.image}
            title={course.title}
            desc={course.desc}
          />
        </Link>
      ))}
    </div>
  );
};

export default Courses;
