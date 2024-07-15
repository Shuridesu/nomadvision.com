import Link from "next/link";


export default function Hero() {
  return (
    <div className="container mx-auto px-4">
      <div className="hero min-h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          AI FOR BUSINESS AND NETWORKING COMMUNITY
        </h1>
        <p className="text-xl mb-8">
          Join us to explore the future of technology and innovation.
        </p>
        <Link href="/auth/register">
          <button className="bg-opacity-60 hover:bg-opacity-100 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
