import { useState } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// adapted from
// https://github.com/AyyazTech/create-carousel-slider-in-Tailwind-css-and-React-js/blob/main/
function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);
  let [fullScreen, setFullScreen] = useState(false);

  const images = slides.map((s) => s.image);
  const captions = slides.map((s) => s.caption);

  let previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  const imgView = fullScreen ? (
    <div
      className={
        "fixed top-[3rem] left-0 h-screen w-screen bg-[#000000ad] flex justify-center items-center cursor-pointer z-40"
      }
    >
      <img
        src={images[current]}
        alt={captions[current]}
        className="max-w-full max-h-full rounded-lg"
      />
    </div>
  ) : null;

  return (
    <div>
      {imgView}
      <div className="overflow-hidden relative max-w-[640px] max-h-[360px] rounded-lg">
        <div
          className={`flex transition ease-out duration-700`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
          onClick={toggleFullScreen}
        >
          {images.map((s, i) => {
            return (
              <img src={s} alt={captions[current]} loading="lazy" key={i} />
            );
          })}
        </div>
        {/* if there's only one image, don't render controls */}
        {images.length > 1 ? (
          <div>
            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white text-xl sm:text-2xl px-2">
              <button
                onClick={previousSlide}
                className="sm:hover:text-yellow-400 "
              >
                <span className="fa-layers fa-fw fa-lg">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-3xl sm:text-4xl text-slate-800"
                  />
                  <FontAwesomeIcon icon={faChevronLeft} className="fa-xs" />
                </span>
              </button>
              <button onClick={nextSlide} className="sm:hover:text-yellow-400">
                <span className="fa-layers fa-fw fa-lg">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-3xl sm:text-4xl text-slate-800"
                  />
                  <FontAwesomeIcon icon={faChevronRight} className="fa-xs" />
                </span>
              </button>
            </div>

            <div className="absolute bottom-0 pt-2 flex justify-center w-full">
              <div className="flex justify-center bg-slate-800 gap-2 sm:gap-3 pb-1 p-2 rounded-t-lg shadow-lg">
                {images.map((s, i) => {
                  return (
                    <div
                      onClick={() => {
                        setCurrent(i);
                      }}
                      key={"circle" + i}
                      className={`rounded-full w-2 h-2 sm:w-3 sm:h-3 cursor-pointer shadow-xl  ${
                        i == current ? "bg-white" : "bg-gray-500"
                      }`}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="overflow-hidden relative pt-2 max-w-[640px]">
        <div
          className="flex transition ease-out duration-700 w-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {captions.map((c, i) => {
            return (
              <p
                className="text-[12px] sm:text-[15px] text-gray-500 font-medium min-w-full"
                key={i}
              >
                {c}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
