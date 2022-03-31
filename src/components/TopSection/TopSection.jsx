import React from "react";

function TopSection() {
  return (
    <section
      className={
        "top-section-bg relative flex items-center justify-center h-full max-h-[500px] min-h-[380px] px-10 pt-[74px] pb-[66px] text-white bg-[#d3d3d3] z-10"
      }
      // before:content-none before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-b before:from-[rgba(0,0,0,0.2)] before:to-[rgba(0,0,0,0.2)] before:z-20
      // style={{
      //   position: "relative",
      //   display: "-webkit-box",
      //   display: "flex",
      //   WebkitBoxAlign: "center",
      //   alignItems: "center",
      //   WebkitBoxPack: "center",
      //   justifyContent: "center",
      //   padding: "1.15rem",
      //   paddingTop: "74px",
      //   paddingBottom: "66px",
      //   color: "#fff",
      //   backgroundColor: "#d3d3d3",
      //   textDecoration: "none",
      //   height: "100%",
      //   maxHeight: "500px",
      //   minHeight: "380px",
      //   zIndex: "1",
      // }}
    >
      {/* before */}
      {/* content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 100%)',
        zIndex: '2' */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden"
        // style={{
        //   position: "absolute",
        //   top: "0",
        //   right: "0",
        //   bottom: "0",
        //   left: "0",
        //   width: "100%",
        //   height: "100%",
        //   overflow: "hidden",
        // }}
      >
        <img
          src="https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.5&h=500&sharp=10&w=1400"
          className=""
          style={{
            width: "100%",
            height: "100%",
            OObjectFit: "cover",
            objectFit: "cover",
            background: "#232a34",
          }}
        />
      </div>
      {/* text and search */}
      <div
        className=""
        style={{ maxWidth: "650px", width: "100%", zIndex: "3" }}
      ></div>
    </section>
  );
}

export default TopSection;
