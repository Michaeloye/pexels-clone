import Photo from "../Photo";

function PhotoColumn({ images, last }) {
  return (
    <div
      className={
        "block flex-grow flex-shrink mr-[14px] md:mr-[20.3px] " +
        (last ? "last:mr-0" : "")
      }
    >
      {images.map((image) => {
        const pageURL = image["pageURL"];
        const imageURL = image["webformatURL"];
        const userImageURL = image["userImageURL"];
        const userName = image["user"];
        return (
          <Photo
            key={pageURL}
            pageURL={pageURL}
            imageURL={imageURL}
            userImageURL={userImageURL}
            userName={userName}
          />
        );
      })}
    </div>
  );
}

export default PhotoColumn;
