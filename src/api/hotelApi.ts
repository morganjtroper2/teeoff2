// import axios from "axios";

// const API_KEY = "kKcLuhDn7FbshV7ECMWC0OJzXYqLgEs2";
// const API_SECRET = "AsDtA05xu19dPGoN";

// // Function to get Amadeus API Access Token
// const getAccessToken = async (): Promise<string> => {
//   try {
//     const response = await axios.post(
//       "https://test.api.amadeus.com/v1/security/oauth2/token",
//       new URLSearchParams({
//         grant_type: "client_credentials",
//         client_id: API_KEY,
//         client_secret: API_SECRET,
//       }),
//       {
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       }
//     );

//     return response.data.access_token;
//   } catch (error) {
//     console.error("Error fetching Amadeus access token:", error);
//     throw new Error("Failed to fetch Amadeus API token");
//   }
// };

// // Fetch hotels by city code
// export const fetchHotels = async (cityCode: string) => {
//   try {
//     console.log("Fetching hotels from Amadeus API for city:", cityCode);

//     const token = await getAccessToken();

//     const response = await axios.get(
//       `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     console.log("Hotels API Response:", response.data);

//     // Format response to match frontend requirements
//     return response.data.data.map((hotel: any) => ({
//       id: hotel.hotelId,
//       name: hotel.name,
//       address: `${hotel.address?.lines?.join(", ")}, ${hotel.address?.cityName}, ${hotel.address?.countryCode}`,
//       latitude: hotel.geoCode?.latitude,
//       longitude: hotel.geoCode?.longitude,
//     }));
//   } catch (error) {
//     console.error("Error fetching hotels:", error);
//     throw new Error("Failed to fetch hotels");
//   }
// };

export default {};