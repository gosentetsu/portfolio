import React from "react";
import GalleryCard from "../components/GalleryCard";
function Gallery() {
  const cardInfo = {
    img: "http://p2.music.126.net/J77XuJg8WTnLKjMqdlDYHQ==/109951165992448904.jpg?param=177y177",
    alt: "the times they are a changin'",
    title: "The Times They Are A-Changin'",
    quotes:
      "for the loser now will be later to win for the times they are a changin'",
  };
  return (
    <div className="mx-10 mt-4 space-y-4">
      {/* declration */}
      <div class="flex  bg-gray-50 overflow-hidden  rounded  dark:bg-gray-800">
        <div class="w-2 bg-gray-800 dark:bg-gray-900"></div>

        <div class="flex items-center px-2 py-3">
          <div class="mx-3">
            <p class="text-gray-600 dark:text-gray-200 text-lg ">
              Here is a collection of my favotite music, movie and books
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap">
        {/* for one card */}
        <div className="m-2">
          <div className="flex-1"></div>
          <GalleryCard info={cardInfo} />
        </div>
        {[...Array(10).keys()].map(() => (
          <div className="m-2">
            <div className="flex-1"></div>
            <GalleryCard info={cardInfo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
