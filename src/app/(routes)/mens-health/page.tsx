import MediaBlock from '@/components/video-block';
import ContentBlock from '@/components/content-block';
import Gallery from '@/components/gallery';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Button from 'react-bootstrap/Button';

import './page.css';
import {getDictionary} from "@/lib/dictionaries.ts";

const mensHealthMediaBlock1 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1729176606/mens-health-hero-video-1_gxqxxa.mp4';
const mensHealthMediaBlock2 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1729176610/mens-health-hero-video-2_qnrihi.mp4';

const mensHealthContentBlock1 = 'dr85cqwlh/image/upload/v1729178944/mens-health-content-block-1_mxi6o4.jpg';
const mensHealthContentBlock2 = 'dr85cqwlh/image/upload/v1729855271/mens-health-content-block-2_u7dmh5.jpg';
const mensHealthContentBlock3 = 'dr85cqwlh/image/upload/v1729859054/mens-health-content-block-3_qrb10i.jpg';
const mensHealthContentBlock4 = 'dr85cqwlh/image/upload/v1729860613/mens-health-content-block-4_dx1rdd.png';
const mensHealthContentBlock5 = 'dr85cqwlh/image/upload/v1729861158/mens-health-content-block-5_mn05es.png';
const mensHealthContentBlock6 = 'dr85cqwlh/image/upload/v1729861774/mens-health-content-block-6_ycfitb.jpg';

const WeightLossPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <MediaBlock
        textColor="#ffffff"
        height={640}
        contentPosition="left"
        backgroundVideo={mensHealthMediaBlock1}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.mensHealth.hero.title}</h2><p>${dict.mensHealth.hero.text}</p>`
        }}
        buttonUrl="https://www.vagaro.com/cl/xdDksoowo9TTYqnnuwR7leq9TSbbbbhfAh0HdnEG5T8="
        buttonText={dict.mensHealth.hero.button}
      />
      <Gallery lg bgColor="#fff" textColor="#aa9c91" items={dict.mensHealth.gallery.items as any} height={950} imgHeight={284} imgWidth={284} title={dict.mensHealth.gallery.title} text={dict.mensHealth.gallery.text} />
      <div id="testosterone">
        <ContentBlock
          bgColor="#f2e4cd"
          textColor="#aa9c91"
          height={1120}
          featuredImage={mensHealthContentBlock1}
          imagePosition="left"
          imageWidth={600}
          sectionContent={{
            __html: `<h2 class='mb-4'>${dict.mensHealth.testosterone.title}</h2><p>${dict.mensHealth.testosterone.text}</p>`
          }}
        />
      </div>
      <div id="muscle-building">
        <MediaBlock
          textColor="#ffffff"
          height={750}
          contentPosition="center"
          backgroundVideo={mensHealthMediaBlock2}
        >
          <h2 className="text-center">{dict.mensHealth.carousel.title}</h2>
          <Carousel id="mensHealthCarousel" interval={null}>
            {dict.mensHealth.carousel.items.map((item: any, idx: number) => (
              <CarouselItem key={`mens-health-carousel-item-${idx}`}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <p>{item.planInfo}</p>
                <Button href={item.buttonUrl}>{item.button}</Button>
              </CarouselItem>
            ))}
          </Carousel>
        </MediaBlock>
      </div>
      <div id="prp">
        <ContentBlock
          bgColor="#ffffff"
          textColor="#aa9c91"
          height={1040}
          featuredImage={mensHealthContentBlock2}
          imagePosition="left"
          imageWidth={600}
          sectionContent={{
            __html: `<h2 class='mb-4'>${dict.mensHealth.hairRestoration.title}</h2><p>${dict.mensHealth.hairRestoration.content}</p>`
          }}
        />
      </div>
      <div id="weight-loss">
        <ContentBlock
          bgColor="#f2e4cd"
          textColor="#aa9c91"
          height={800}
          featuredImage={mensHealthContentBlock3}
          imagePosition="right"
          imageWidth={600}
        >
          <h2 className="text-center">{dict.mensHealth.weightLoss.title}</h2>
          <div className="text-center">
            <Button className="m-2 text-uppercase" href={dict.mensHealth.weightLoss.consultationLink}>{dict.mensHealth.weightLoss.consultation}</Button>
            <Button className="m-2 text-uppercase" href={dict.mensHealth.weightLoss.otherOptionsLink}>{dict.mensHealth.weightLoss.otherOptions}</Button>
          </div>
          <Carousel variant="dark" id="weightLossCarousel" interval={null}>
            {dict.mensHealth.weightLoss.items.map((item: any, idx: number) => (
              <CarouselItem key={`weight-loss-carousel-item-${idx}`}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <p>{item.planInfo}</p>
                <Button href={item.buttonUrl}>{item.button}</Button>
              </CarouselItem>
            ))}
          </Carousel>
        </ContentBlock>
      </div>
      <div id="therapies">
        <ContentBlock
          bgColor="#f2e4cd"
          textColor="#aa9c91"
          height={750}
          featuredImage={mensHealthContentBlock4}
          imagePosition="left"
          imageWidth={450}
        >
          <h2 className="text-center">{dict.mensHealth.infraredAndMagnet.title}</h2>
          <Carousel variant="dark" id="therapyCarousel" interval={null}>
            {dict.mensHealth.infraredAndMagnet.items.map((item: any, idx: number) => (
              <CarouselItem key={`weight-loss-carousel-item-${idx}`}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <p>{item.planInfo}</p>
                <Button href={item.buttonUrl}>{item.button}</Button>
              </CarouselItem>
            ))}
          </Carousel>
        </ContentBlock>
      </div>
      <div id="nutrition">
        <ContentBlock
          bgColor="#ffffff"
          textColor="#aa9c91"
          height={500}
          buttonUrl="/iv-therapy"
          buttonText={dict.mensHealth.ivNutrition.button}
          featuredImage={mensHealthContentBlock5}
          imagePosition="right"
          imageWidth={600}
          sectionContent={{
            __html: `<h2 class='mb-4'>${dict.mensHealth.ivNutrition.title}</h2><p>${dict.mensHealth.ivNutrition.text}</p>`
          }}
        />
      </div>
      <ContentBlock
        bgColor="#ffffff"
        textColor="#aa9c91"
        height={500}
        buttonUrl="https://www.vagaro.com/cl/xdDksoowo9TTYqnnuwR7leq9TSbbbbhfAh0HdnEG5T8="
        buttonText={dict.mensHealth.ed.button}
        featuredImage={mensHealthContentBlock6}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.mensHealth.ed.title}</h2><p>${dict.mensHealth.ed.text}</p>`
        }}
      />s
    </div>
  )
}

export default WeightLossPage;
