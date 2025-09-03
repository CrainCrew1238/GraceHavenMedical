import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import Image from 'next/image';
import ContentBlock from '@/components/content-block';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import {getDictionary} from "@/lib/dictionaries.ts";

const topCarouselItems: Array<string> = [
  'dr85cqwlh/image/upload/v1727044608/crunchi-1_rbreok.webp',
  'dr85cqwlh/image/upload/v1727044608/crunchi-2_ymoqav.webp',
  'dr85cqwlh/image/upload/v1727044608/crunchi-3_f3oqi9.webp',
  'dr85cqwlh/image/upload/v1727044608/crunchi-4_tjdyll.webp',
  'dr85cqwlh/image/upload/v1727044608/crunchi-5_pjc0sb.webp'
];

const bottomCarouselItems: Array<string> = [
  'dr85cqwlh/image/upload/v1727044609/crunchi-6_g57e0i.jpg',
  'dr85cqwlh/image/upload/v1727044609/crunchi-7_pcfbcb.jpg',
  'dr85cqwlh/image/upload/v1727044609/crunchi-8_jcbkop.webp',
  'dr85cqwlh/image/upload/v1727044609/crunchi-9_lf5uls.jpg',
  'dr85cqwlh/image/upload/v1727044609/crunchi-10_qjdyfz.webp'
]

const CrunchiPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <Container fluid style={{ backgroundColor: '#fff', color: "#aa9c91" }}>
        <Container>
          <Row className="pt-5">
            <Col md="6">
              <Carousel>
                {topCarouselItems.map((image, idx) => (
                  <CarouselItem key={`carousel-1-item-${idx}`}>
                    <Image alt={`crunchi-1-item-${idx}`} src={image} width={600} height={680} />
                  </CarouselItem>
                ))}
              </Carousel>
            </Col>
            <Col md="6">
              <h2>{dict.crunchi.hero.title}</h2>
              <p>{dict.crunchi.hero.text}</p>
              <Button href={'https://crunchi.com/?als=TracyCrain'}>{dict.crunchi.hero.button.toUpperCase()}</Button>
              <Accordion className="mt-4">
                {dict.crunchi.hero.dropdowns.map((item: any, idx: number) => (
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
      <ContentBlock
        bgColor="#ffffff"
        textColor="#aa9c91"
        height={800}
        embeddedContent={`<iframe width="560" height="315" src="https://www.youtube.com/embed/3c8qeI1T7N4?si=z4UKP0Hnv2ZdXPDv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.crunchi.power.title}</h2><p>${dict.crunchi.power.text}</p><img class='w-100' src="https://res.cloudinary.com/dr85cqwlh/image/upload/v1727044616/crunchi-magazines_gx5laq.png" />`
        }}
        buttonText={dict.crunchi.power.button}
        buttonUrl="https://crunchi.com/?als=TracyCrain"
      />
      <Testimonials
        title={dict.crunchi.testimonials.title}
        description={dict.crunchi.testimonials.description}
        items={dict.crunchi.testimonials.items}
      />
      <FAQ
        bgColor="#ffffff"
        textColor='#aa9c91'
        header={dict.crunchi.faq.header}
        description={dict.crunchi.faq.description}
        questions={dict.crunchi.faq.questions}
      />
      <Container fluid className="pt-5 pb-5" style={{ backgroundColor: '#fff', color: "#aa9c91", textAlign: "center" }}>
        <Container>
          <h2>{dict.crunchi.bottom.title}</h2>
          <p>{dict.crunchi.bottom.text}</p>
          <Carousel style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
            {bottomCarouselItems.map((image, idx) => (
              <CarouselItem key={`carousel-1-item-${idx}`}>
                <Image alt={`crunchi-1-item-${idx}`} src={image} width={720} height={680} />
              </CarouselItem>
            ))}
          </Carousel>
        </Container>
      </Container>
    </div>
  )
}

export default CrunchiPage;
