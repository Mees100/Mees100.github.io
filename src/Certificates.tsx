import { useState } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import certificate1 from "./Image-certificates/Image_certificate_1.jpg";
import certificate2 from "./Image-certificates/Image_certificate_2.jpg";
import certificate3 from "./Image-certificates/Image_certificate_3.jpg";
import certificate4 from "./Image-certificates/Image_certificate_4.jpg";
import certificate5 from "./Image-certificates/Image_certificate_5.jpg";
import certificate6 from "./Image-certificates/Image_certificate_6.jpg";
import certificate7 from "./Image-certificates/Image_certificate_7.jpg";

const items = [
  {
    src: certificate1,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: certificate2,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: certificate3,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
  {
    src: certificate4,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 4,
  },
  {
    src: certificate5,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 5,
  },
  {
    src: certificate6,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 6,
  },
  {
    src: certificate7,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 7,
  },
];

function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <>
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          dark
          slide
          fade={false}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </>
  );
}

export default Certificates;
