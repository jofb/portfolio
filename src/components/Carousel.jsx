import { useState } from "react";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// adapted from
// https://github.com/AyyazTech/create-carousel-slider-in-Tailwind-css-and-React-js/blob/main/
function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  const images = slides.map((s, i) => s.image);
  const captions = slides.map((s, i) => s.caption);

  let previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div>
      <div className="overflow-hidden relative max-w-[640px] max-h-[360px] rounded-lg">
        <div
          className={`flex transition ease-out duration-700`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((s) => {
            return <img src={s} />;
          })}
        </div>
        {/* if there's only one image, don't render controls */}
        {images.length > 1 ? (
          <div>
            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white text-4xl px-4">
              <button onClick={previousSlide} className="hover:text-yellow-400">
                <FontAwesomeIcon icon={faChevronCircleLeft} />
              </button>
              <button onClick={nextSlide} className="hover:text-yellow-400">
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </button>
            </div>

            <div className="absolute bottom-0 pt-2 flex justify-center gap-3 w-full">
              <div className="flex justify-center bg-slate-800 gap-3 p-2 rounded-t-md shadow-lg">
                {images.map((s, i) => {
                  return (
                    <div
                      onClick={() => {
                        setCurrent(i);
                      }}
                      key={"circle" + i}
                      className={`rounded-full w-4 h-4 cursor-pointer shadow-xl  ${
                        i == current ? "bg-yellow-400" : "bg-gray-500"
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
          {captions.map((c) => {
            return (
              <p className="text-[15px] text-gray-500 font-medium min-w-full">
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
