import React from "react";

function GalleryCard(props) {
  const { img, title, quotes } = props.info;
  // console.log(props.info);
  return (
    <div>
      <div className=" bg-white rounded-md shadow-lg overflow-hidden max-w-xs dark:bg-gray-800 hover:-translate-y-1 transition-all duration-500">
        <div className="flex">
          {/* left: an img */}
          <div className="flex flex-shrink-0">
            <img
              className="w-10 sm:w-20 h-full object-cover"
              src={img}
              alt={title}
            />
          </div>
          {/* right:some text */}
          <div className="p-2 flex flex-col justify-evenly">
            <div className="uppercase tracking-wide  text-xs text-indigo-500 font-semibold">
              {title}
            </div>
            <p
              href="#"
              className="dark:text-gray-300 whitespace-pre-line mt-1 text-xs  leading-tight font-medium text-black "
            >
              {quotes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
