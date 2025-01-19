"use client";
import React from "react";
import { getColor } from "./actions/getColors";

export default function Home() {
  const spanRef = React.useRef<HTMLParagraphElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // gaurd clause
    if (!spanRef.current) return;

    // get the color from the form
    const color = new FormData(e.currentTarget).get("color") as string;
    console.log(color);
    // Call the server action to get the color
    const serverColor = await getColor(color);
    console.log(serverColor);
    spanRef.current.style.color = color;
  };
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?q=80&w=2502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="border border-solid  border-white  bg-black bg-opacity-75 p-8 md:p-16 lg:p-24 rounded-lg shadow-2xl max-w-md mx-auto"
      >
        <p className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 text-center">
          Hello
          <span ref={spanRef} className="block animate-bounce duration-300">
            Ron
          </span>
        </p>
        <input
          type="text"
          name="color"
          className="border border-solid text-black border-gray-300 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a color"
        />
        <button
          type="submit"
          className="border  hover:bg-blue-600 bg-blue-500 leading-5 border-solid border-black px-6 py-3 rounded-lg transition duration-300 hover:scale-105 ease-in-out w-full"
        >
          send server action
        </button>
      </form>
    </div>
  );
}
