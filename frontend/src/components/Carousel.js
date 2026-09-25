"use client";

import { Carousel as ArkCarousel } from "@ark-ui/react/carousel";

const Carousel = ({ paintings = [] }) => {
  if (!paintings.length) {
    return (
      <div className="w-full max-w-5xl mx-auto rounded-lg border border-dark/20 p-8 text-center dark:border-light/20">
        <p className="text-dark dark:text-light">
          No paintings available.
        </p>
      </div>
    );
  }

  return (
    <ArkCarousel.Root
      defaultPage={0}
      slideCount={paintings.length}
      allowMouseDrag={true}
      loop={paintings.length > 1}
      className="w-full max-w-5xl mx-auto"
    >
      {/* MAIN IMAGE */}
      <ArkCarousel.ItemGroup
        className="
          flex
          overflow-hidden
          rounded-lg
          shadow-lg
          mb-4
          touch-pan-y
        "
      >
        {paintings.map((project, index) => (
          <ArkCarousel.Item
            key={project.id ?? index}
            index={index}
            className="flex-[0_0_100%] min-w-0"
          >
            <div className="relative group">
              <img
                src={project.img}
                alt={project.title}
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
                  {project.title}
                </h2>

                {project.summary && (
                  <p className="mt-2 text-sm text-gray-200">
                    {project.summary}
                  </p>
                )}
              </div>
            </div>
          </ArkCarousel.Item>
        ))}
      </ArkCarousel.ItemGroup>

      {/* CONTROLS */}
      <div className="flex items-center gap-4">
        {/* PREVIOUS */}
        <ArkCarousel.PrevTrigger
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
        </ArkCarousel.PrevTrigger>

        {/* THUMBNAILS */}
        <div className="flex gap-2 overflow-x-auto flex-1 px-2 py-1">
          {paintings.map((project, index) => (
            <ArkCarousel.Indicator
              key={project.id ?? index}
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
                src={project.img}
                alt={project.title}
                draggable="false"
                className="w-20 h-14 object-cover"
              />
            </ArkCarousel.Indicator>
          ))}
        </div>

        {/* NEXT */}
        <ArkCarousel.NextTrigger
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
        </ArkCarousel.NextTrigger>
      </div>
    </ArkCarousel.Root>
  );
};

export default Carousel;