import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const allMemeImages = memesData;
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme({...meme, randomImage: memesArray[randomNumber].url})
        
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
          onClick={getMemeImage}
          className="bg-gradient-to-r from-purple-800 to-purple-500 text-white p-2 rounded-md cursor-pointer w-full"
        />
      </div>
      <img className="m-auto mt-4 w-1/3" src={meme.randomImage} alt="meme " />
    </div>
  );
}
