import React from "react";

function TopSection() {
  return (
    <section
      className={
        "top-section-bg relative flex items-center justify-center h-full min-h-[500px] max-h-[500px] px-4 pt-[74px] pb-[66px] text-white bg-[#d3d3d3] z-10"
      }
      // before:content-none before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-b before:from-[rgba(0,0,0,0.2)] before:to-[rgba(0,0,0,0.2)] before:z-20
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.5&amp;h=500&amp;sharp=10&amp;w=1400"
          srcSet="https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.5&amp;h=500&amp;sharp=10&amp;w=350 350w,https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.5&amp;h=500&amp;sharp=10&amp;w=500 500w,https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.5&amp;h=500&amp;sharp=10&amp;w=1000 1000w,https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.5&amp;h=500&amp;sharp=10&amp;w=1500 1500w,https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.5&amp;h=500&amp;sharp=10&amp;w=2000 2000w,https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.5&amp;h=500&amp;sharp=10&amp;w=2500 2500w,https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.5&amp;h=500&amp;sharp=10&amp;w=3000 3000w,https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.5&amp;h=500&amp;sharp=10&amp;w=3500 3500w,https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.5&amp;h=500&amp;sharp=10&amp;w=4000 4000w,https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.5&amp;h=500&amp;sharp=10&amp;w=5000 5000w"
          className="w-full h-full object-cover bg-[#232a34]"
        />
      </div>
      {/* text and search */}
      <div className="w-full max-w-[650px] z-30">
        <h1 className="block w-full text-4xl leading-[48px] font-bold mb-4 text-left">
          The best free stock photos, royalty free images &amp; videos shared by
          creators.
        </h1>
      </div>
    </section>
  );
}

export default TopSection;
