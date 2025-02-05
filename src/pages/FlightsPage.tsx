// import React, { useEffect, useState } from "react";

// interface Flight {
//   id: number;
//   name: string;
//   image: string;
// }

// const FlightsPage: React.FC = () => {
//   const [flights, setFlights] = useState<Flight[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchFlights = async () => {
//       setLoading(true);
//       try {
//         // Replace with your actual API endpoint for flight data
//         const response = await fetch("https://api.example.com/flights", {
//           headers: {
//             Authorization: "Bearer YOUR_API_KEY", // Replace with your actual API key
//           },
//         });

//         if (!response.ok) throw new Error("Failed to fetch flight data");

//         const data = await response.json();
        
//         // Mapping the API response to match the display format
//         const flightData = data.results.map((flight: any, index: number) => ({
//           id: index + 1,
//           name: `Flight to ${flight.destination}`,
//           image: flight.image || "https://source.unsplash.com/400x300/?airplane", // Fallback image if not available
//         }));

//         setFlights(flightData);
//       } catch (error) {
//         setError("Error fetching flights. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFlights();
//   }, []);

//   return (
//     <div className="flex flex-col items-center p-8">
//       <h1 className="text-4xl font-bold text-green-800 mb-8">Flights</h1>

//       {loading && <p className="text-gray-600">Loading flights...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {!loading && !error && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {flights.map((flight) => (
//             <div
//               key={flight.id}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
//             >
//               <img
//                 src={flight.image}
//                 alt={flight.name}
//                 className="w-full h-48 object-cover"
//                 onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x300?text=Flight")}
//               />
//               <div className="p-4 text-center">
//                 <h2 className="text-xl font-semibold text-gray-800">{flight.name}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FlightsPage;

import React from "react";

const FlightsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-700">This page is under construction!</h1>
    </div>
  );
};

export default FlightsPage;