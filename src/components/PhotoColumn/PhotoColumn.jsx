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
        const imageURL = image["webformatURL"];
        console.log(imageURL);
        return <Photo imageURL={imageURL} />;
      })}
    </div>
  );
}

export default PhotoColumn;
