import MediaBlock from '@/components/video-block';
import ContentBlock from '@/components/content-block';
import Gallery from '@/components/gallery';
import FAQ from '@/components/faq';
import {getDictionary} from "@/lib/dictionaries.ts";

const labTestingMediaBlock1 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1727030164/lab-testing-video-block-1_ypo1yh.mp4';

const labTestingContentBlock1 = 'dr85cqwlh/image/upload/v1727030342/lab-testing-content-block-1_p9mqkv.png';

const LabTestingPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <MediaBlock
        textColor="#ffffff"
        height={500}
        buttonUrl="/contact-us"
        buttonText={dict.labTesting.hero.button}
        contentPosition="left"
        backgroundVideo={labTestingMediaBlock1}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.labTesting.hero.title}</h2><p>${dict.labTesting.hero.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#ffffff"
        textColor="#aa9c91"
        height={800}
        featuredImage={labTestingContentBlock1}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.labTesting.heavyMetal.title}</h2><p>${dict.labTesting.heavyMetal.text}</p>`
        }}
        buttonUrl="/contact-us"
        buttonText={dict.labTesting.heavyMetal.button}
      />
      <Gallery lg bgColor="#f5f5f5" textColor="#aa9c91" items={dict.labTesting.gallery.items} height={940} imgHeight={220} imgWidth={390} title={dict.labTesting.gallery.title} text={dict.labTesting.gallery.text} />
      <Gallery bgColor="#ffffff" textColor="#aa9c91" items={dict.labTesting.gallery2.items} height={2500} imgHeight={200} imgWidth={300} title={dict.labTesting.gallery2.title} text={dict.labTesting.gallery2.text} />
      <FAQ
        bgColor="#fff"
        textColor="#aa9c91"
        header={dict.labTesting.faq.header}
        description={dict.labTesting.faq.description}
        questions={dict.labTesting.faq.questions}
      />
    </div>
  )
}

export default LabTestingPage;
