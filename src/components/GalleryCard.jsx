import React from "react";

function GalleryCard(props) {
  const { img, alt, title, quotes } = props.info;
  // console.log(props.info);
  return (
    <div>
      <div className=" bg-white rounded-xl shadow-md overflow-hidden max-w-sm dark:bg-gray-800">
        <div className="flex">
          {/* left: an img */}
          <div className="flex flex-shrink-0">
            <img className="w-24 h-24 object-cover" src={img} alt={alt} />
          </div>
          {/* right:some text */}
          <div className="p-3 flex flex-col justify-evenly">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {title}
            </div>
            <p
              href="#"
              className="dark:text-gray-300 whitespace-pre-line mt-1 text-sm italic leading-tight font-medium text-black hover:underline"
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
