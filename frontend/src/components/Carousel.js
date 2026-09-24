"use client";

import { Carousel } from "@ark-ui/react/carousel";

export default function ThumbnailsCarousel() {
  const images = [
    {
      full: "https://picsum.photos/seed/40/1200/800",
      thumb: "https://picsum.photos/seed/40/120/80",
      title: "Morning Light",
      description:
        "A peaceful landscape inspired by the soft light of the morning.",
    },
    {
      full: "https://picsum.photos/seed/41/1200/800",
      thumb: "https://picsum.photos/seed/41/120/80",
      title: "Blue Dreams",
      description:
        "An abstract painting exploring different shades of blue.",
    },
    {
      full: "https://picsum.photos/seed/42/1200/800",
      thumb: "https://picsum.photos/seed/42/120/80",
      title: "Golden Fields",
      description:
        "Warm colors and soft textures inspired by summer fields.",
    },
    {
      full: "https://picsum.photos/seed/43/1200/800",
      thumb: "https://picsum.photos/seed/43/120/80",
      title: "Quiet Evening",
      description:
        "A calm evening scene with subtle atmospheric colors.",
    },
    {
      full: "https://picsum.photos/seed/44/1200/800",
      thumb: "https://picsum.photos/seed/44/120/80",
      title: "Red Horizon",
      description:
        "A dramatic composition inspired by a beautiful sunset.",
    },
    {
      full: "https://picsum.photos/seed/45/1200/800",
      thumb: "https://picsum.photos/seed/45/120/80",
      title: "Winter Landscape",
      description:
        "A minimal winter landscape with cool and peaceful tones.",
    },
  ];

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      allowMouseDrag={true}
      loop={true}
      className="max-w-5xl mx-auto"
    >
      {/* MAIN IMAGE */}
      <Carousel.ItemGroup
        className="
flex
overflow-hidden
rounded-lg
shadow-lg
mb-4
touch-pan-y
"
      >
        {images.map((image, index) => (
          <Carousel.Item
            key={index}
            index={index}
            className="flex-[0_0_100%] min-w-0"
          > <div className="relative group"> <img
            src={image.full}
            alt={image.title}
            draggable="false"
            className="
               w-full
               h-[500px]
               object-cover
               select-none
               cursor-grab
               active:cursor-grabbing
             "
          />


              {/* DESCRIPTION */}
              <div
                className="
              absolute
              bottom-0
              left-0
              right-0
              bg-black/70
              text-white
              p-6
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
            "
              >
                <h2 className="text-2xl font-semibold">
                  {image.title}
                </h2>

                <p className="mt-2 text-sm text-gray-200">
                  {image.description}
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      {/* CONTROLS */}
      <div className="flex items-center gap-4">
        {/* PREVIOUS */}
        <Carousel.PrevTrigger
          className="
    p-3
    bg-gray-100
    hover:bg-gray-200
    dark:bg-gray-800
    dark:hover:bg-gray-700
    rounded-lg
    transition-colors
    shrink-0
    text-xl
    cursor-pointer
  "
        >
          ←
        </Carousel.PrevTrigger>

        {/* THUMBNAILS */}
        <div className="flex gap-2 overflow-x-auto flex-1 px-2 py-1">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              className="
            shrink-0
            border-2
            border-transparent
            data-current:border-blue-500
            rounded-md
            overflow-hidden
            cursor-pointer
            transition-all
            hover:border-gray-300
          "
            >
              <img
                src={image.thumb}
                alt={image.title}
                draggable="false"
                className="w-20 h-14 object-cover"
              />
            </Carousel.Indicator>
          ))}
        </div>

        {/* NEXT */}
        <Carousel.NextTrigger
          className="
        p-3
        bg-gray-100
        hover:bg-gray-200
        dark:bg-gray-800
        dark:hover:bg-gray-700
        rounded-lg
        transition-colors
        shrink-0
        text-xl
        cursor-pointer
      "
        >
          →
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>


  );
}
