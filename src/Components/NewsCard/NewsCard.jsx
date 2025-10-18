import { FaEye, FaStar } from "react-icons/fa";
import { FiBookmark, FiShare2 } from "react-icons/fi";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="flex flex-col md:card bg-base-100 shadow-xl border border-gray-200 relative overflow-hidden">
      {/* Author Info + Top-right icons */}
      <div className="flex items-center bg-base-200 justify-between gap-3 p-4 ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        {/* Top-right icons: bookmark & share */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Bookmark"
            className="btn btn-ghost btn-sm p-2 rounded-full hover:bg-gray-100"
            title="Bookmark"
          >
            <FiBookmark className="text-lg" />
          </button>

          <button
            aria-label="Share"
            className="btn btn-ghost btn-sm p-2 rounded-full hover:bg-gray-100"
            title="Share"
          >
            <FiShare2 className="text-lg" />
          </button>
        </div>
      </div>

      <div className="card-body p-5">
        <h2 className="card-title text-lg font-semibold leading-tight">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-60 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-5">
        <p className="text-gray-600 text-sm">
          {details.length > 180 ? `${details.slice(0, 180)}... ` : details}
        </p>

        <div className="mt-3">
          <button className="text-orange-500 font-semibold hover:underline">
            Read More
          </button>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between pt-4 border-t text-sm">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(rating.number)
                    ? "text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-1 text-gray-700 font-medium">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <FaEye /> <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
