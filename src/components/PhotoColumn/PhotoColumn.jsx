import React from "react";
import Photo from "../Photo";

export const UserContext = React.createContext();

function PhotoColumn({ images, last }) {
  return (
    <div
      className={
        "block flex-shrink mr-[14px] md:mr-[20.3px] " +
        (last ? "last:mr-0" : "")
      }
    >
      {images === ""
        ? ""
        : images.map((image) => {
            const pageURL = image["pageURL"];
            const imageURL = image["webformatURL"];
            const userImageURL = image["userImageURL"];
            const userName = image["user"];
            const views = image["views"];
            const likes = image["likes"];
            const downloads = image["downloads"];
            return (
              <UserContext.Provider
                key={pageURL}
                value={{
                  views,
                  likes,
                  downloads,
                  userName,
                  userImageURL,
                  imageURL,
                }}
              >
                <Photo
                  pageURL={pageURL}
                  imageURL={imageURL}
                  userImageURL={userImageURL}
                  userName={userName}
                />
              </UserContext.Provider>
            );
          })}
    </div>
  );
}

export default PhotoColumn;
