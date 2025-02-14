"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ValentinePage() {
  const [yesSize, setYesSize] = useState(1);
  const [noClicks, setNoClicks] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const messages = [
    "Do you want to be my Valentine? 💕",
    "Are you sure? 😢",
    "Really sure? 🥺",
    "You're breaking my heart... 💔",
    "Please don't do this... 😭",
    "I will cry... 😭💔",
  ];

  const handleNoClick = () => {
    setYesSize((prev) => Math.min(prev + 0.3, 2.5)); // Max growth limit
    setNoClicks((prev) => Math.min(prev + 1, messages.length - 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 text-center p-6">
      {accepted ? (
        <div className="flex flex-col items-center">
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Cute Gif"
            className="w-64 h-64 rounded-lg shadow-lg"
          />
          <p className="mt-4 text-2xl font-bold text-red-600">YPAA!!! 🎉💖</p>
        </div>
      ) : (
        <>
          {/* 🏆 GIF is placed ABOVE the message */}
          <img
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Gif"
            className="w-40 h-40 rounded-lg shadow-lg mb-4"
          />

          {/* Message stays below the GIF */}
          <motion.p
            key={noClicks}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-red-700 mb-8 min-h-[50px]"
          >
            {messages[noClicks]}
          </motion.p>

          {/* Buttons stay in place */}
          <div className="flex flex-col items-center gap-6 w-full min-h-[150px]">
            <motion.button
              onClick={() => setAccepted(true)}
              animate={{ scale: yesSize }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-red-600 font-bold min-w-[120px] max-w-[250px]"
            >
              Yes 💖
            </motion.button>

            <motion.button
              onClick={handleNoClick}
              animate={{ y: yesSize * 10 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-600 min-w-[120px]"
            >
              No 💔
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
}
