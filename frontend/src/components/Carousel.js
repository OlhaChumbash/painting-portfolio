"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Carousel as ArkCarousel } from "@ark-ui/react/carousel";

const Carousel = ({ paintings = [] }) => {
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [imageTransition, setImageTransition] = useState(false);

  const transitionTimer = useRef(null);
  const closeTimer = useRef(null);
  const currentIndex = useRef(null);
  const switching = useRef(false);

  const clearTimers = () => {
    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
      transitionTimer.current = null;
    }

    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openPopup = (index) => {
    clearTimers();
    switching.current = false;
    currentIndex.current = index;
    setSelectedPainting(index);
    setImageTransition(false);
    setPopupVisible(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setPopupVisible(true));
    });
  };

  const closePopup = useCallback(() => {
    if (currentIndex.current === null) return;

    setPopupVisible(false);
    setImageTransition(false);
    switching.current = false;
    clearTimers();

    closeTimer.current = setTimeout(() => {
      setSelectedPainting(null);
      currentIndex.current = null;
      closeTimer.current = null;
    }, 300);
  }, []);

  const switchPainting = useCallback(
    (direction) => {
      if (
        paintings.length <= 1 ||
        currentIndex.current === null ||
        switching.current
      ) {
        return;
      }

      switching.current = true;
      setImageTransition(true);

      transitionTimer.current = setTimeout(() => {
        const nextIndex =
          (currentIndex.current + direction + paintings.length) %
          paintings.length;

        currentIndex.current = nextIndex;
        setSelectedPainting(nextIndex);
        setImageTransition(false);
        switching.current = false;
        transitionTimer.current = null;
      }, 180);
    },
    [paintings.length]
  );

  const showPrevious = useCallback(() => {
    switchPainting(-1);
  }, [switchPainting]);

  const showNext = useCallback(() => {
    switchPainting(1);
  }, [switchPainting]);

  // Keyboard navigation and page scroll locking.
  useEffect(() => {
    if (selectedPainting === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePopup();

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPainting, closePopup, showPrevious, showNext]);

  // Clean up animation timers if the component unmounts.
  useEffect(() => {
    return () => clearTimers();
  }, []);

  if (!paintings.length) {
    return (
      <div className="mx-auto w-full max-w-7xl rounded-xl border border-dark/20 p-8 text-center dark:border-light/20">
        <p className="text-dark dark:text-light">
          No paintings available.
        </p>
      </div>
    );
  }

  const painting =
    selectedPainting !== null ? paintings[selectedPainting] : null;

  return (
    <>
      {/* MAIN PAINTINGS CAROUSEL */}
      <div className="mx-auto w-full max-w-7xl px-2 sm:px-4 lg:px-6">
        <ArkCarousel.Root
          defaultPage={0}
          slideCount={paintings.length}
          allowMouseDrag={true}
          loop={paintings.length > 1}
          className="w-full"
        >
          {/* LARGE IMAGE AREA */}
          <ArkCarousel.ItemGroup className="mb-4 flex overflow-hidden rounded-xl bg-neutral-100 shadow-xl dark:bg-neutral-900 touch-pan-y">
            {paintings.map((project, index) => (
              <ArkCarousel.Item
                key={project.id ?? index}
                index={index}
                className="min-w-0 flex-[0_0_100%]"
              >
                <div className="group relative w-full">
                  <button
                    type="button"
                    onClick={() => openPopup(index)}
                    aria-label={`Enlarge painting: ${
                      project.title || "Untitled"
                    }`}
                    className="relative block w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-500"
                  >
                    {/* Entire painting visible, without cropping */}
                    <div className="flex h-[55vh] min-h-[320px] max-h-[900px] w-full items-center justify-center sm:h-[65vh] lg:h-[78vh]">
                      <img
                        src={project.img}
                        alt={project.title || "Painting"}
                        draggable="false"
                        className="h-full w-full select-none object-contain transition-transform duration-500 ease-in-out group-hover:scale-[1.01] motion-reduce:transition-none"
                      />
                    </div>

                    {/* Title and description appear on hover on desktop */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 pb-5 pt-20 opacity-100 transition-opacity duration-500 ease-in-out sm:px-8 sm:pb-8 sm:pt-28 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                      <h2 className="text-xl font-bold text-white sm:text-3xl lg:text-4xl">
                        {project.title || "Untitled"}
                      </h2>

                      {project.summary && (
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-200 sm:text-base lg:text-lg">
                          {project.summary}
                        </p>
                      )}
                    </div>
                  </button>
                </div>
              </ArkCarousel.Item>
            ))}
          </ArkCarousel.ItemGroup>

          {/* CAROUSEL CONTROLS AND THUMBNAILS */}
          <div className="flex w-full items-center gap-2 sm:gap-4">
            <ArkCarousel.PrevTrigger
              aria-label="Previous painting"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-200 text-2xl text-gray-900 transition-colors duration-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 sm:h-14 sm:w-14 sm:text-3xl"
            >
              ←
            </ArkCarousel.PrevTrigger>

            <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto px-1 py-2">
              {paintings.map((project, index) => (
                <ArkCarousel.Indicator
                  key={project.id ?? index}
                  index={index}
                  aria-label={`Show ${
                    project.title || `painting ${index + 1}`
                  }`}
                  className="shrink-0 overflow-hidden rounded-lg border-2 border-transparent transition-all duration-300 hover:border-gray-400 data-current:border-blue-500"
                >
                  <img
                    src={project.img}
                    alt=""
                    draggable="false"
                    className="h-14 w-20 select-none object-cover transition-transform duration-300 hover:scale-105 sm:h-20 sm:w-28 lg:h-24 lg:w-36"
                  />
                </ArkCarousel.Indicator>
              ))}
            </div>

            <ArkCarousel.NextTrigger
              aria-label="Next painting"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-200 text-2xl text-gray-900 transition-colors duration-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 sm:h-14 sm:w-14 sm:text-3xl"
            >
              →
            </ArkCarousel.NextTrigger>
          </div>
        </ArkCarousel.Root>
      </div>

      {/* FULL-SCREEN PAINTING POPUP */}
      {painting && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-3 transition-opacity duration-300 ease-out motion-reduce:transition-none sm:p-6 ${
            popupVisible ? "opacity-100" : "opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={painting.title || "Painting viewer"}
          onClick={closePopup}
        >
          {/* POPUP HEADER */}
          <div className="flex w-full max-w-[1800px] shrink-0 items-center justify-between gap-4 pb-3 text-white sm:pb-4">
            <div className="min-w-0">
              <h2 className="truncate text-lg font-semibold sm:text-2xl">
                {painting.title || "Untitled"}
              </h2>

              <p className="text-sm text-white/70">
                {selectedPainting + 1} of {paintings.length}
              </p>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closePopup();
              }}
              aria-label="Close enlarged painting"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-all duration-300 hover:rotate-90 hover:bg-white/25 sm:h-14 sm:w-14"
            >
              ×
            </button>
          </div>

          {/* EXIT BUTTON */}
          <div className="absolute right-4 top-4 z-10 sm:right-8 sm:top-8">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closePopup();
              }}
              aria-label="Exit full-screen image"
              className="group flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-3 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white hover:text-black active:scale-95"
            >
              <span className="text-sm font-medium">Exit</span>
              <span className="text-xl leading-none transition-transform duration-300 group-hover:rotate-90">
                ×
              </span>
            </button>
          </div>

          {/* ENLARGED IMAGE WITH SMOOTH SWITCHING */}
          <div
            className="flex min-h-0 w-full flex-1 items-center justify-center gap-2 px-1 sm:gap-6 sm:px-4"
            onClick={(event) => event.stopPropagation()}
          >
            {paintings.length > 1 && (
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous painting"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-all duration-300 hover:scale-110 hover:bg-white/25 active:scale-95 sm:h-14 sm:w-14 sm:text-3xl"
              >
                ←
              </button>
            )}

            <img
              key={painting.id ?? selectedPainting}
              src={painting.img}
              alt={painting.title || "Enlarged painting"}
              draggable="false"
              className={`h-full min-h-0 min-w-0 max-w-full flex-1 select-none object-contain transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                popupVisible && !imageTransition
                  ? "scale-100 opacity-100"
                  : "scale-[0.97] opacity-0"
              }`}
            />

            {paintings.length > 1 && (
              <button
                type="button"
                onClick={showNext}
                aria-label="Next painting"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-all duration-300 hover:scale-110 hover:bg-white/25 active:scale-95 sm:h-14 sm:w-14 sm:text-3xl"
              >
                →
              </button>
            )}
          </div>

          {/* DESCRIPTION */}
          <div className="mt-3 max-h-28 w-full max-w-4xl shrink-0 overflow-y-auto text-center text-white sm:mt-4">
            {painting.summary && (
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                {painting.summary}
              </p>
            )}
          </div>

          <p className="mt-2 shrink-0 text-xs text-white/50 sm:text-sm">
            Press Esc to close · Use ← → to navigate
          </p>
        </div>
      )}
    </>
  );
};

export default Carousel;