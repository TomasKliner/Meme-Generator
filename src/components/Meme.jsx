import React from "react";

export default function Header() {
  function handleClick() {}
  function handleMouseEnter() {
   // document.getElementsByName('img').src='https://picsum.photos/640/36';
  }
  return (
    <div>
      <form className="w-1/3 m-auto flex flex-col justify-between">
        <div className="flex justify-between my-4">
          <input
            type="text"
            className="border-gray-300 border-2 rounded-md p-1"
            value="Shut up"
          />
          <input
            type="text"
            className="border-gray-300 border-2 rounded-md p-1"
            value="And take my money"
          />
        </div>
        <input
          type="submit"
          value="Get a new meme image 🖼️"
          onClick={handleClick}
          className="bg-gradient-to-r from-purple-800 to-purple-500 text-white p-2 w-full rounded-md"
        />
      </form>
      <img className="m-auto mt-4" onMouseEnter={handleMouseEnter} src="https://picsum.photos/640/360" />
    </div>
  );
}
