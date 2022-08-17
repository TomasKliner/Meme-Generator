import React from "react";
import Meme from '../memesData'

export default function Header() {
   
  const [url, setUrl] = React.useState("");

  function handleClick() {
    if (Meme.success){
        const memesData= Meme.data.memes[Math.floor(Math.random() * Meme.data.memes.length)]; 
        setUrl(memesData.url);
    }
  }

  return (
    <div>
      <div className="w-1/3 m-auto flex flex-col justify-between">
        <div className="flex justify-between my-4 w-auto">
          <input
            type="text"
            className="border-gray-300 border-2 rounded-md p-1 w-auto"
            placeholder="Shut up"
          />
          <input
            type="text"
            className="border-gray-300 border-2 rounded-md p-1 w-auto"
            placeholder="And take my money"
          />
        </div>
        <input
          type="submit"
          value="Get a new meme image 🖼️"
          onClick={handleClick}
          className="bg-gradient-to-r from-purple-800 to-purple-500 text-white p-2 w-full rounded-md cursor-pointer"
        />
      </div>
      <img className="m-auto mt-4" src={url} alt="meme" />
    </div>
  );
}
