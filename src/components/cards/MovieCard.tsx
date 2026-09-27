import { Star } from "lucide-react";

const MovieCard = () => {
  return (
    <div className="w-48 ">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src="../src//assets/dune.jpg"
          alt="dune"
          className="w-full object-cover transition-transform cursor-pointer"
        />
      </div>

      <div className="mt-3">
        <h3 className="text-text-primary text-sm font-semibold">
          Dune: Part Two
        </h3>
        <div className="flex flex-row-reverse md:flex-col justify-between">
          <p className="text-text-secondary mt-1 text-xs">2024</p>
          <span className="text-text-secondary top-2 right-2 flex gap-1 rounded-lg px-2 py-1 text-sm">
            <Star size={13} />
            8.6
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
