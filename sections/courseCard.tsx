import Image from "next/image";

interface CourseCardProps {
  image: string;
  title: string;
  desc: string;
}

const CourseCard = ({ image, title, desc }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full">
      <div className="relative w-full h-120">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};
export default CourseCard;
