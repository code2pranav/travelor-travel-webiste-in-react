import { Link } from "react-router-dom"

export default function DestinationCard({ title, listing, image }) {
  return (
    <div className="destination-item hover:bg-white group border border-gray-50/20 rounded-xl p-3.75 transition-all duration-500 ease-in-out">
      <div className="destination-image h-80 w-full rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full! object-cover" />
      </div>
      <div className="destination-content text-center pt-5">
        <h4 className="text-2xl text-white font-medium pb-1 group-hover:text-secondary transition-colors duration-500">
          {title}
        </h4>
        <span className="text-md text-white group-hover:text-secondary transition-colors duration-500"> {listing} Listing </span>
      </div>
    </div>
  );
}