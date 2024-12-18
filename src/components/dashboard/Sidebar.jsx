import React from "react";

export const Sidebar = () => {
  const sidebarIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/944fbd96bb0027edc0433ea04160490b6fb4b5d0919c907fa233b5a33655548b?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
      alt: "Menu item 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7bea88a6ff0d584a17b64e9051247294ffa83242fad4edf8e81d2771a83654f0?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
      alt: "Menu item 2",
      active: true,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bde7f44470d02fd58fac54218e0bba1958b1e66f9880d6f5fe2ddcceab7e2789?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
      alt: "Menu item 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f666c3b4ca1f7822cdc06a30d7d8c53b58b807abfd0c0da2f525ca57201b5dac?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
      alt: "Menu item 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/283a8690e619021162b55b4ecf6425d65ac151be62731bcb38c665f8ce1a2c65?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
      alt: "Menu item 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/131c5dc12e88851f8af1f7ee76f1ab514184cd0eef3c7b45db56961d0c163b83?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
      alt: "Menu item 6",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/57334a93efcd324ede7b1de0569e29b18ec82fdfe1c7082e2bb72ddf8f35e7bf?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
      alt: "Menu item 7",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e9f661625f1cee32b68c3e0787c0947d3fbcdf978929b3ef15fcdf74af51030?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
      alt: "Menu item 8",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cbf286467ce8f47b8c9ee217c936827495fda557825f077ad0af41b4d11f68a?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
      alt: "Menu item 9",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/faf5f631250faebb74eea356290222b1a24dbdcc152b6949c215dad1b09b7e00?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
      alt: "Menu item 10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/afe729f2a7f11b7b4817581f6b1f397640c2d2192f221ae468cf1a10092b5499?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
      alt: "Menu item 11",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col px-1.5 pt-2.5 bg-slate-700 pb-[1017px] max-md:hidden max-md:pb-24">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ebbbb18914ada0a1dc001e0b11dd6f6fc6dbd84eae5cd5b208edde5f935d15?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33"
        alt="Logo"
        className="object-contain w-10 aspect-square"
      />
      <div className="flex gap-2.5 justify-center items-center mt-6 min-h-[32px] max-md:mr-1">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/88751b6b299f3f6c5598f217ac83d1285ab0c4016ef5a87638849cee07daa055?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33"
          alt="User avatar"
          className="object-contain self-stretch my-auto w-8 aspect-square rounded-[32px] shadow-[0px_1px_5px_rgba(255,255,255,0.1)]"
        />
      </div>
      <div className="flex flex-col items-center mt-6 w-full max-md:hidden max-md:mr-1">
        {sidebarIcons.map((icon, index) => (
          <div
            key={index}
            className={`flex gap-2.5 justify-center items-center mt-6 w-8 ${
              icon.active
                ? "bg-white bg-opacity-30 rounded-md shadow-[0px_1px_5px_rgba(255,255,255,0.1)]"
                : ""
            } min-h-[24px]`}
          >
            <img
              loading="lazy"
              src={icon.src}
              alt={icon.alt}
              className="object-contain self-stretch my-auto w-6 aspect-square"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
