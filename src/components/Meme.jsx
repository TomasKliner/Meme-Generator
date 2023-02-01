import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "Shut up",
    bottomText: "And take my money",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const allMemeImages = memesData;

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme({ ...meme, randomImage: memesArray[randomNumber].url });
  }

  return (
    <div>
      <div className="w-1/3 m-auto flex flex-col justify-between">
        <div className="flex justify-between my-4 w-auto">
          <input
            type="text"
            className="border-gray-300 border-2 rounded-md p-1 w-auto"
            placeholder="Shut up"
            onChange={(e) => {
              setMeme({ ...meme, topText: e.target.value });
            }}
          />
          <input
            type="text"
            className="border-gray-300 border-2 rounded-md p-1 w-auto"
            placeholder="And take my money"
            onChange={(e) => {
              setMeme({ ...meme, bottomText: e.target.value });
            }}
          />
        </div>
        <input
          type="submit"
          value="Get a new meme image 🖼️"
          onClick={getMemeImage}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-2 rounded-md cursor-pointer w-full"
        />
      </div>
      <div className="m-auto mt-4 w-1/3 relative text-white">
        <img className="w-full" src={meme.randomImage} alt="meme " />
        <div className="absolute top-0 w-full flex justify-center items-center">
          <p className="font-bold text-3xl shadow-black drop-shadow-xl text-center" >{meme.topText}</p>
        </div>
        <div className=" flex items-center justify-center absolute bottom-0  w-full">
          <p className="font-bold text-3xl shadow-black drop-shadow-md text-center">{meme.bottomText}</p>
        </div>
      </div>
    </div>
  );
}
