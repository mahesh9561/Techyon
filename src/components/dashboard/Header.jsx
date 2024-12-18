import React from "react";

export const Header = () => {
  return (
    <div className="flex overflow-hidden flex-wrap gap-5 justify-between py-2.5 pr-2.5 pl-6 w-full bg-slate-700 max-md:pl-5 max-md:max-w-full">
      <div className="my-auto text-2xl font-bold text-white uppercase">
        Techyon
      </div>
      <div className="flex gap-6 justify-center items-center min-h-[40px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5fdbbd503896c80535ea0d776815081a8f36e082db71d51621ef1ab2ad4d5fa?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33"
          alt="Notification"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/39806564d88895fd6fb7c47ea8a14fcd93bfe93b5cf5f038ae841de8f4197c87?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33"
          alt="Messages"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/627301a14c3794784363894146a0df1a9f14af1e23252053778606ecb9da0047?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33"
          alt="Settings"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5e210ada60dbff6db8702f7ad398d33bfb2a7ae9a7826770f130a17b5ad7f99?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33"
          alt="Search"
          className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
        />
        <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a8c624713425ea65bc8e11d4b9996f5297a18238ee1fdb29e77c8e75e140cf4?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33"
            alt="User profile"
            className="object-contain shrink-0 self-stretch my-auto w-10 rounded-none aspect-square shadow-[0px_0px_5px_rgba(0,0,0,0.125)]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f95a9f0a43b764db599c39374a174f8937bab61f6d320850ea41b04ea74bae6?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33"
            alt="Dropdown"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};
