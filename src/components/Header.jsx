import React from "react";
import troll from "../troll.svg";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-purple-500 text-white flex justify-between p-4">
      <div className="flex justify-center">
        <img src={troll} alt="troll face logo"></img>
        <h1 className="text-xl px-2 font-bold">Meme generator</h1>
      </div>
      <p className="font-light">React Course - Project 3</p>
    </header>
  );
}
