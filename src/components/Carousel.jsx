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
      <div className="overflow-hidden relative max-w-[640px]">
        <div
          className={`flex transition ease-out duration-700`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((s) => {
            return <img src={s} className="rounded-lg" />;
          })}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-8 text-3xl">
          <button onClick={previousSlide} className="hover:text-yellow-400">
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </button>
          <button onClick={nextSlide} className="hover:text-yellow-400">
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {images.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-3 h-3 cursor-pointer  ${
                  i == current ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
      <p className="text-gray-500 text-[15px] font-medium pt-2">
        {captions[current]}
      </p>
    </div>
  );
}

export default Carousel;
