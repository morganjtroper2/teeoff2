// import React, { useState } from "react";
// import { Card, CardContent } from "../Components/ui/card";
// import { Input } from "../Components/ui/input";
// import { Button } from "../Components/ui/button";
// import { Label } from "../Components/ui/label";
// import { motion } from "framer-motion";

// const LoginPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//   // State for username and password
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   // Handle login button click
//   const handleLogin = () => {
//     if (!username || !password) {
//       alert("Please enter both username and password.");
//       return;
//     }
//     console.log("Logging in with:", { username, password });
//     alert(`Welcome, ${username}!`);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="relative w-full max-w-md p-6"
//       >
//         <Card className="p-6 shadow-xl bg-white border border-black rounded-2xl">
//           <CardContent className="space-y-4 relative">
//             {/* Positioned Exit Button */}
//             <button
//               className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
//               onClick={onClose} // Close the modal when clicked
//             >
//               X
//             </button>
//             <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
//             <div>
//               <Label className="text-gray-700">Username</Label>
//               <Input
//                 type="text"
//                 placeholder="Enter your username"
//                 className="mt-1"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div>
//               <Label className="text-gray-700">Password</Label>
//               <Input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="mt-1"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <Button className="w-full mt-4 text-blue-500" onClick={handleLogin}>
//               Login
//             </Button>
//             <p className="text-center text-sm text-gray-600">
//               Don't have an account?{" "}
//               <a href="#" className="text-blue-500 hover:underline">
//                 Sign Up
//               </a>
//             </p>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/button";
import { Label } from "../Components/ui/label";
import { motion } from "framer-motion";

const LoginPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  // Handle opening the sign-up modal
  const handleSignUpLinkClick = () => {
    setShowSignUp(true);
  };

  // Handle sign-up button click
  const handleSignUp = () => {
    setIsSignedUp(true);
    setTimeout(() => {
      setShowSignUp(false);
      setIsSignedUp(false);
    }, 2000);
  };

  // Handle close modal button click
  const handleCloseModal = () => {
    setShowSignUp(false);
  };

  // Handle login button click
  const handleLogin = () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    console.log("Logging in with:", { username, password });
    alert(`Welcome, ${username}!`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md p-6"
      >
        <Card className="p-6 shadow-xl bg-white border border-black rounded-2xl">
          <CardContent className="space-y-4 relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              X
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
            <div>
              <Label className="text-gray-700">Username</Label>
              <Input
                type="text"
                placeholder="Enter your username"
                className="mt-1"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-gray-700">Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full mt-4 text-blue-500" onClick={handleLogin}>
              Login
            </Button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline"
                onClick={handleSignUpLinkClick}
              >
                Sign Up
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl border border-black text-center"
          >
            {isSignedUp ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-green-600 text-2xl font-bold flex flex-col items-center"
              >
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 20 }}
                  transition={{ duration: 0.3, repeat: 2, repeatType: "reverse" }}
                  className="text-6xl"
                >
                  🏌🏽‍♂️
                </motion.span>
                <p className="mt-4 text-xl">Sign Up Successful!</p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
                <div className="mt-4">
                  <Label className="text-gray-700">Username</Label>
                  <Input type="text" placeholder="Enter your username" className="mt-1" />
                </div>
                <div className="mt-4">
                  <Label className="text-gray-700">Email</Label>
                  <Input type="email" placeholder="Enter your email" className="mt-1" />
                </div>
                <div className="mt-4">
                  <Label className="text-gray-700">Password</Label>
                  <Input type="password" placeholder="Enter your password" className="mt-1" />
                </div>

                <Button className="w-full mt-4 text-blue-500 hover:underline" onClick={handleSignUp}>
                  Sign Up
                </Button>

                <div className="mt-4 text-center">
                  <Button onClick={handleCloseModal}>Close</Button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
