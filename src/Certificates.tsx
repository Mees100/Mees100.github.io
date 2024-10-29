import { useState } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

//import styles from "./Certificates.module.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
//import Container from "./components/Container";
import certificate1 from "./Image-certificates/Image_certificate_1.jpg";
import certificate2 from "./Image-certificates/Image_certificate_2.jpg";
import certificate3 from "./Image-certificates/Image_certificate_3.jpg";
import certificate4 from "./Image-certificates/Image_certificate_4.jpg";
import certificate5 from "./Image-certificates/Image_certificate_5.jpg";
import certificate6 from "./Image-certificates/Image_certificate_6.jpg";
import certificate7 from "./Image-certificates/Image_certificate_7.jpg";

// door {} in normale javascript te gebruiken maak je een object
// dit is dus anders dan {} binnen jsx (zoals de speciale html achtige syntax van react heet)!!
// const myvar = { certificate1 };
// console.log(myvar);
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

function Certificates(args) {
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

  const goToIndex = (newIndex) => {
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
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
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
    </>
  );
}

export default Certificates;

// function CertificateCard({
//   title,
//   certificate,
//   alt,
// }: {
//   title: string;
//   certificate: string;
//   alt: string;
// }) {
//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   return (
//     <>
//       <div className={styles.graduationCard}>
//         <Card body style={{ height: 150 }}>
//           <CardTitle
//             style={{
//               height: 100,
//               fontSize: 16,
//             }}
//           >
//             {title}
//           </CardTitle>
//           <Button
//             outline
//             size="sm"
//             className={styles.clickDesign}
//             onClick={toggle}
//           >
//             Bekijk <FontAwesomeIcon icon={faGraduationCap} />
//           </Button>
//         </Card>
//       </div>
//       <Modal isOpen={modal} toggle={toggle} size="lg">
//         <ModalHeader toggle={toggle}>{title}</ModalHeader>
//         <ModalBody>
//           <img src={certificate} alt={alt} width="700" height="1000" />
//         </ModalBody>
//       </Modal>
//     </>
//   );
// }

// function Certificates() {
//   return (
//     <>
//       <Container>
//         <div className={styles.collection}>
//           <CertificateCard
//             title="React hooks"
//             certificate={certificate2}
//             alt="React hooks"
//           />
//           <CertificateCard
//             title="React"
//             certificate={certificate3}
//             alt="react"
//           />
//           <CertificateCard
//             title="JavaScript"
//             certificate={certificate4}
//             alt="JavaScript"
//           />
//           <CertificateCard
//             title="Skill Path Build a Website with HTML, CSS, and GitHub Pages"
//             certificate={certificate1}
//             alt="Skill Path Build a Website with HTML, CSS, and GitHub Pages"
//           />
//           <CertificateCard
//             title="Learn TypeScript: Fundamentals"
//             certificate={certificate5}
//             alt=" TypeScript: Fundamentals"
//           />
//           <CertificateCard
//             title="React, Part I"
//             certificate={certificate6}
//             alt="React, Part I"
//           />
//           <CertificateCard
//             title="Finishing Touches and Publishing a Website"
//             certificate={certificate7}
//             alt="Finishing Touches and Publishing a Website"
//           />
//         </div>
//       </Container>
//     </>
//   );
// }

// export default Certificates;
