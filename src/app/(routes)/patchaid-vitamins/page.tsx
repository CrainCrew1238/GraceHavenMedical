import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import Image from 'next/image';
import Testimonials from '@/components/testimonials';
import {getDictionary} from "@/lib/dictionaries.ts";

const patchAidImageBlock1 = 'dr85cqwlh/image/upload/v1727047917/patchaid-image-block-1_mhmhsa.jpg';
const patchAidImageBlock2 = 'dr85cqwlh/image/upload/v1727047918/patchaid-image-block-2_jfh88z.png';

const PatchAidPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <Container fluid style={{ backgroundColor: '#fff', color: "#aa9c91" }}>
        <Container>
          <Row className="pt-5">
            <Col md="6">
              <Image src={patchAidImageBlock1} height={574} width={574} alt="PatchAid Vitamins" />
            </Col>
            <Col md="6">
              <h2>{dict.patchAid.hero.title}</h2>
              <p>{dict.patchAid.hero.text}</p>
              <Button disabled href={'#'}>{dict.patchAid.hero.button.toUpperCase()}</Button>
              <Accordion className="mt-4">
                {dict.patchAid.hero.dropdowns.map((item: any, idx: number) => (
                  <AccordionItem key={`accordion-item-${idx}`} eventKey={`${idx}`}>
                    <AccordionHeader style={{ color: "#aa9c91" }}>{item.header}</AccordionHeader>
                    <AccordionBody style={{ color: "#aa9c91" }} dangerouslySetInnerHTML={{ __html: item.body }}></AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Container>
      <Testimonials
        title={dict.patchAid.testimonials.title}
        description={dict.patchAid.testimonials.description}
        items={dict.patchAid.testimonials.items}
      />
      <Container fluid className="pt-5 pb-5" style={{ backgroundColor: '#fff', color: "#aa9c91", textAlign: "center" }}>
        <Container>
          <h2>{dict.patchAid.bottom.title}</h2>
          <p>{dict.patchAid.bottom.text}</p>
          <Image src={patchAidImageBlock2} alt="PatchAid Vitamins" height={640} width={1280} />
        </Container>
      </Container>
    </div>
  )
}

export default PatchAidPage;
