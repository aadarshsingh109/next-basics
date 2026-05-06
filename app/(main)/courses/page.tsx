import Link from "next/link";
import CourseCard from "@/sections/courseCard";
import { courses, courseTitles } from "@/lib/courses";
import SearchBar from "../../../components/searchBar";

const Courses = async ({
  searchParams,
}: {
  searchParams: Promise<{ title: string; q: string }>;
}) => {
  const { title, q } = await searchParams;
  const activeTitle = title ?? "All";
  const searchQuery = q?.toLowerCase() || "";

  const filteredCourses = courses.filter((course) => {
    const matchCategory = activeTitle === "All" || course.title === activeTitle;
    const matchSearch = course.title.toLowerCase().includes(searchQuery);
    console.log(matchCategory);
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex flex-col items-start justify-start gap-10 py-10 max-w-300 w-full">
      <SearchBar />
      <h2 className="text-5xl font-bold">Our Courses</h2>

      <div className="flex gap-3 flex-wrap">
        {courseTitles.map((t, i) => (
          <Link
            key={i}
            href={`/courses${activeTitle === t ? "" : `?title=${t}`}`}
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
