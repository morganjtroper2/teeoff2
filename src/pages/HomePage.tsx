import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling when the component mounts
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when unmounting
    };
  }, []);

  return (
    <div
      className="relative h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url("/images/golf-background.jpg")`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {/* Overlay to make text readable */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center text-white z-10">
        {/* TEE BOX Logo */}
        <h1 className="text-7xl font-extrabold mb-16 z-10">TEE BOX</h1>

        {/* Navigation Cards */}
        <main className="grid grid-cols-3 gap-12 z-10">
          {[
            { title: "Golf Courses", link: "/golf-courses" },
            { title: "Hotels", link: "/hotels" },
            { title: "Flights", link: "/flights" },
          ].map((item, index) => (
            <Link key={index} to={item.link} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-zinc-950 shadow-lg rounded-2xl w-[350px] h-[220px] 
                flex flex-col items-center justify-center text-center border border-gray-300 dark:border-gray-700 
                hover:outline hover:outline-2 hover:outline-black"
              >
                <h2 className="text-2xl font-semibold text-green-700 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-slate-300 mt-2 px-4 text-sm">
                  Explore the best {item.title.toLowerCase()} for your trip.
                </p>
              </motion.div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}