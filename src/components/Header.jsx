import React from "react";
import troll from "../troll.svg";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-500 to-orange-500 text-white flex justify-between p-4">
      <div className="flex justify-center">
        <img src={troll} alt="troll face logo"></img>
        <h1 className="text-xl px-2 font-bold">Meme generator</h1>
      </div>
      <a href="kliner.eu">
        <p className="font-light hover:border-b-2">kliner.eu</p>
      </a>
    </header>
  );
}
