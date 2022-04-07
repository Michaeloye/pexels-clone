import avatar from "../../assets/avatar.svg";

function SpotlighCardProfile({ userImageURL, userName, followers }) {
  return (
    <div className="max-w-full overflow-hidden flex items-center no-underline">
      <div className="mr-[14px] flex items-center justify-center w-10 h-10 rounded-full bg-white">
        <img
          src={userImageURL === "" ? avatar : userImageURL}
          className="min-w-full h-auto rounded-full object-fill"
        />
      </div>
      {/* profile text */}
      <div className="max-w-full overflow-hidden">
        <div className="font-semibold mt-0 mb-0 leading-[22px] whitespace-nowrap overflow-hidden text-ellipsis text-[#1a1a1a]">
          {userName}
        </div>
        <div className="text-sm leading-[18px] font-light mt-0 mb-0 whitespace-nowrap overflow-hidden text-ellipsis text-[#1a1a1a]">
          {followers} followers
        </div>
      </div>
    </div>
  );
}

export default SpotlighCardProfile;
