import React from "react";
import GalleryCard from "../components/GalleryCard";
import { galleryList } from "./galleryData";
function Gallery() {
  return (
    <div className="sm:mx-10 mx-8 mt-4 space-y-4">
      {/* declration */}
      <div className="flex  bg-gray-50 overflow-hidden  rounded  dark:bg-gray-800">
        <div className="w-2 bg-gray-800 dark:bg-gray-900"></div>

        <div className="flex items-center px-2 py-3">
          <div className="mx-3">
            <p className="text-gray-600 dark:text-gray-200 text-base ">
              Here is a collection of my favotite music, movie and books
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between flex-wrap">
        {/* for one card */}

        {galleryList.map((list) => (
          <div className="my-2">
            <GalleryCard info={list} />
          </div>
        ))}

        {/* {[...Array(10).keys()].map(() => (
          <div className=" bg-red-50"></div>
        ))} */}
      </div>
    </div>
  );
}

export default Gallery;
