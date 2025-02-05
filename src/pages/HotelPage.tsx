// import React, { useEffect, useState } from "react";

// interface Hotel {
//   id: number;
//   name: string;
//   image: string;
// }

// const HotelPage: React.FC = () => {
//   const [hotels, setHotels] = useState<Hotel[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch("https://api.pexels.com/v1/search?query=hotel", {
//           headers: {
//             Authorization: "YOUR_PEXELS_API_KEY", // Replace with your Pexels API key
//           },
//         });

//         if (!response.ok) throw new Error("Failed to fetch data");

//         const data = await response.json();
//         const hotelData = data.photos.slice(0, 6).map((photo: any, index: number) => ({
//           id: index + 1,
//           name: `Hotel ${index + 1}`,
//           image: photo.src.medium,
//         }));

//         setHotels(hotelData);
//       } catch (error) {
//         setError("Error fetching hotels. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHotels();
//   }, []);

//   return (
//     <div className="flex flex-col items-center p-8">
//       <h1 className="text-4xl font-bold text-green-800 mb-8">Hotels</h1>

//       {loading && <p className="text-gray-600">Loading hotels...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {!loading && !error && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {hotels.map((hotel) => (
//             <div
//               key={hotel.id}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
//             >
//               <img
//                 src={hotel.image}
//                 alt={hotel.name}
//                 className="w-full h-48 object-cover"
//                 onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x300?text=Hotel")}
//               />
//               <div className="p-4 text-center">
//                 <h2 className="text-xl font-semibold text-gray-800">{hotel.name}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelPage;

import React from "react";

const HotelPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-700">This page is under construction!</h1>
    </div>
  );
};

export default HotelPage;