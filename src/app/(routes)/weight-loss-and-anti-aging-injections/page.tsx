
import MediaBlock from '@/components/video-block';
import Gallery from '@/components/gallery';
import FAQ from '@/components/faq';
import ContentBlock from '@/components/content-block';
import {getDictionary} from "@/lib/dictionaries.ts";

const weightLossInjectionsHeroBlock1 = 'dr85cqwlh/image/upload/v1726044440/weight-loss-injections-hero-1_lvmrhx.jpg';
const weightLossInjectionsContentBlock1 = 'dr85cqwlh/image/upload/v1726045129/weight-loss-injections-content-block-1_fgwf7u.png';
const weightLossInjectionsContentBlock2 = 'dr85cqwlh/image/upload/v1726751167/weight-loss-injections-content-block-2_fbkb06.png';
const weightLossInjectionsContentBlock3 = 'dr85cqwlh/image/upload/v1726840231/weight-loss-injections-content-block-3_asbiqy.jpg';
const weightLossInjectionsContentBlock4 = 'dr85cqwlh/image/upload/v1726841154/weight-loss-injections-content-block-4_uol0ey.jpg';
const weightLossInjectionsContentBlock5 = 'dr85cqwlh/image/upload/v1726841155/weight-loss-injections-content-block-5_wgy1hw.png';

const WeightLossInjectionsPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <MediaBlock
        textColor="#ffffff"
        height={670}
        buttonUrl="/contact-us"
        buttonText={dict.weightLossInjections.hero.button}
        contentPosition="left"
        backgroundImage={weightLossInjectionsHeroBlock1}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.weightLossInjections.hero.title}</h2><p>${dict.weightLossInjections.hero.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        height={800}
        featuredImage={weightLossInjectionsContentBlock1}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.weightLossInjections.types.title}</h2><p>${dict.weightLossInjections.types.text}</p>`
        }}
        buttonUrl="/contact-us"
        buttonText={dict.weightLossInjections.types.button}
      />
      <Gallery bgColor="#fff" textColor="#aa9c91" items={dict.weightLossInjections.injectionProducts.items} imgHeight={355} imgWidth={296} height={3200} title={dict.weightLossInjections.injectionProducts.title} text={dict.weightLossInjections.injectionProducts.text} />
      <ContentBlock
        bgColor="#f5f5f5"
        textColor="#aa9c91"
        height={730}
        featuredImage={weightLossInjectionsContentBlock2}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.weightLossInjections.toradol.title}</h2><p>${dict.weightLossInjections.toradol.text}</p>`
        }}
        buttonUrl="#"
        buttonText={dict.weightLossInjections.toradol.button}
      />
      <ContentBlock
        bgColor="#ffffff"
        textColor="#aa9c91"
        height={620}
        featuredImage={weightLossInjectionsContentBlock3}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.weightLossInjections.vitaminD3.title}</h2><p>${dict.weightLossInjections.vitaminD3.text}</p>`
        }}
        buttonUrl="https://www.vagaro.com/cl/AbLkf0Ye3Mr1zSi7F0TUxxWGlDNI0jCvRXeCPCwbvIw="
        buttonText={dict.weightLossInjections.vitaminD3.button}
      />
      <Gallery lg bgColor="#f2e4cd" textColor="#aa9c91" items={dict.weightLossInjections.benefits.items} imgHeight={220} imgWidth={390} height={980} title={dict.weightLossInjections.benefits.title} text={dict.weightLossInjections.benefits.text} />
      <ContentBlock
        bgColor="#ffffff"
        textColor="#aa9c91"
        height={560}
        featuredImage={weightLossInjectionsContentBlock4}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.weightLossInjections.vitaminC.title}</h2><p>${dict.weightLossInjections.vitaminC.text}</p>`
        }}
        buttonUrl="https://www.vagaro.com/cl/OZlzvMP1-dARr67~9QytHs5LXn4uMGcoWrCJ4ir52i0="
        buttonText={dict.weightLossInjections.vitaminD3.button}
      />
      <ContentBlock
        bgColor="#ffffff"
        textColor="#aa9c91"
        height={770}
        featuredImage={weightLossInjectionsContentBlock5}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<p class='mb-2'>${dict.weightLossInjections.nadPlus.subtitle}</p><h2 class='mb-4'>${dict.weightLossInjections.nadPlus.title}</h2><p>${dict.weightLossInjections.nadPlus.text}</p>`
        }}
        buttonUrl="#"
        buttonText={dict.weightLossInjections.nadPlus.button}
      />
      <FAQ
        bgColor="#fff"
        textColor="#aa9c91"
        header={dict.weightLossInjections.faq.header}
        description={dict.weightLossInjections.faq.description}
        questions={dict.weightLossInjections.faq.questions}
      />
    </div>
  )
}

export default WeightLossInjectionsPage;
