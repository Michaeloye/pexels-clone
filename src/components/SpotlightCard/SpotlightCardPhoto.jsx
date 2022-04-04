import React from "react";

function SpotlightCardPhoto({ imageURL, last }) {
  return (
    <div
      className={"relative pb-[25%] flex-1 " + (last ? "mr-0" : "mr-2")}
      style={{ flexBasis: "100%" }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <img src={imageURL} className="object-cover min-h-full min-w-full" />
      </div>
    </div>
  );
}

export default SpotlightCardPhoto;
