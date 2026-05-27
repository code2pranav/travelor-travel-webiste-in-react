import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
    return (
        <>
            <Link to="/" className={`logo cursor-pointer text-2xl md:text-4xl text-white font-medium font-kaushan! ${className}`}>
                Travelo
                <span className="text-prim">r.</span>
            </Link>
        </>
    )
}
