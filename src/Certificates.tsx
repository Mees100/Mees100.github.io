import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardTitle,
} from "reactstrap";
import styles from "./Certificates.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Container from "./components/Container";
import certificate1 from "./Image-certificates/Image_certificate_1.jpg";
import certificate2 from "./Image-certificates/Image_certificate_2.jpg";
import certificate3 from "./Image-certificates/Image_certificate_3.jpg";
import certificate4 from "./Image-certificates/Image_certificate_4.jpg";
import certificate5 from "./Image-certificates/Image_certificate_5.jpg";
import certificate6 from "./Image-certificates/Image_certificate_6.jpg";
import certificate7 from "./Image-certificates/Image_certificate_7.jpg";

function CertificateCard({
  title,
  certificate,
  alt,
}: {
  title: string;
  certificate: string;
  alt: string;
}) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div className={styles.graduationCard}>
        <Card body style={{ height: 150 }}>
          <CardTitle style={{ height: 100, fontSize: 16 }}>{title}</CardTitle>
          <Button
            outline
            size="sm"
            className={styles.clickDesign}
            onClick={toggle}
          >
            Bekijk <FontAwesomeIcon icon={faGraduationCap} />
          </Button>
        </Card>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <img src={certificate} alt={alt} width="700" height="1000" />
        </ModalBody>
      </Modal>
    </>
  );
}

function Certificates() {
  return (
    <>
      <Container>
        <div className={styles.collection}>
          <CertificateCard
            title="React hooks"
            certificate={certificate2}
            alt="React hooks"
          />
          <CertificateCard
            title="React"
            certificate={certificate3}
            alt="react"
          />
          <CertificateCard
            title="JavaScript"
            certificate={certificate4}
            alt="JavaScript"
          />
          <CertificateCard
            title="Skill Path Build a Website with HTML, CSS, and GitHub Pages"
            certificate={certificate1}
            alt="Skill Path Build a Website with HTML, CSS, and GitHub Pages"
          />
          <CertificateCard
            title="Learn TypeScript: Fundamentals"
            certificate={certificate5}
            alt=" TypeScript: Fundamentals"
          />
          <CertificateCard
            title="React, Part I"
            certificate={certificate6}
            alt="React, Part I"
          />
          <CertificateCard
            title="Finishing Touches and Publishing a Website"
            certificate={certificate7}
            alt="Finishing Touches and Publishing a Website"
          />
        </div>
      </Container>
    </>
  );
}

export default Certificates;
