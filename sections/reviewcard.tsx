interface ReviewCardProps {
  author: string;
  rating: number;
  review: string;
}

const ReviewCard = ({ author, rating, review }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full">
      <div className="flex items-center gap-4 mb-4">
        <div>
          <h3 className="text-lg font-bold text-black">{author}</h3>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < rating ? "text-yellow-400" : "text-gray-300"}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed italic">"{review}"</p>
    </div>
  );
};

export default ReviewCard;
