import MediaBlock from '@/components/video-block';
import Gallery from '@/components/gallery';
import FAQ from '@/components/faq';
import {getDictionary} from "@/lib/dictionaries.ts";

const ivTherapyMediaBlock1 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1725962352/iv-therapy-video-block-1_dtctju.mp4';

const IVTherapyPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <MediaBlock
        textColor="#ffffff"
        height={580}
        buttonUrl="https://www.vagaro.com/cl/BcND43Hr~94r8mJ9Wu~IMnE4SfMHQ5Wk8ohPMNHlhN4="
        buttonText={dict.ivTherapy.hero.button}
        contentPosition="left"
        backgroundVideo={ivTherapyMediaBlock1}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.ivTherapy.hero.title}</h2><p>${dict.ivTherapy.hero.text}</p>`
        }}
      />
      <Gallery bgColor="#fff" textColor="#aa9c91" items={dict.ivTherapy.gallery.items} imgHeight={355} imgWidth={296} height={3200} title={dict.ivTherapy.gallery.title} />
      <Gallery lg bgColor="#fff" textColor="#aa9c91" items={dict.ivTherapy.benefits.items} imgHeight={395} imgWidth={395} height={1024} title={dict.ivTherapy.benefits.title} text={dict.ivTherapy.benefits.text} />
      <FAQ
        bgColor="#fff"
        textColor="#aa9c91"
        header={dict.ivTherapy.faq.header}
        button={dict.ivTherapy.faq.button}
        buttonUrl={dict.ivTherapy.faq.buttonUrl}
        description={dict.ivTherapy.faq.description}
        questions={dict.ivTherapy.faq.questions}
      />
    </div>
  )
}

export default IVTherapyPage;
