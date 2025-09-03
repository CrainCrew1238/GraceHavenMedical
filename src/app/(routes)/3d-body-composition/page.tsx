import MediaBlock from '@/components/video-block';
import ContentBlock from '@/components/content-block';
import FAQ from '@/components/faq';
import ContactDirect from '@/components/contact-direct';
import {getDictionary} from "@/lib/dictionaries.ts";

const bodyCompositionMediaBlock1 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1727037437/body-composition-video-block-1_jeh0eb.mp4';

const bodyCompositionContentBlock1 = 'dr85cqwlh/image/upload/v1727037568/body-composition-content-block-1_tljuwh.gif';
const bodyCompositionContentBlock2 = 'dr85cqwlh/image/upload/v1727038974/body-composition-content-block-2_tqykzr.png';
const bodyCompositionContentBlock3 = 'dr85cqwlh/image/upload/v1727038975/body-composition-content-block-3_p9s92u.png';

const BodyCompositionPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <MediaBlock
        textColor="#ffffff"
        height={570}
        buttonUrl="/contact-us"
        buttonText={dict.bodyComposition.hero.button}
        contentPosition="left"
        backgroundVideo={bodyCompositionMediaBlock1}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.bodyComposition.hero.title}</h2><p>${dict.bodyComposition.hero.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#f5f5f5"
        textColor="#aa9c91"
        height={700}
        featuredImage={bodyCompositionContentBlock1}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.bodyComposition.fit3d.title}</h2><p>${dict.bodyComposition.fit3d.text}</p>`
        }}
        buttonUrl="/contact-us"
        buttonText={dict.bodyComposition.fit3d.button}
      />
      <ContentBlock
        bgColor="#f5f5f5"
        textColor="#aa9c91"
        height={700}
        embeddedContent={`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/664457776?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="3D Body Scanning 2024 - Fit3D"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.bodyComposition.progress.title}</h2><p>${dict.bodyComposition.progress.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#ffffff"
        textColor="#aa9c91"
        height={400}
        featuredImage={bodyCompositionContentBlock2}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.bodyComposition.universities.title}</h2><p>${dict.bodyComposition.universities.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#ffffff"
        textColor="#aa9c91"
        height={640}
        featuredImage={bodyCompositionContentBlock3}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.bodyComposition.bodyData.title}</h2><p>${dict.bodyComposition.bodyData.text}</p>`
        }}
      />
      <FAQ
        bgColor="#fff"
        textColor="#aa9c91"
        header={dict.bodyComposition.faq.header}
        description={dict.bodyComposition.faq.description}
        questions={dict.bodyComposition.faq.questions}
      />
      <ContactDirect
        header={dict.contactDirect.header}
        body={dict.contactDirect.body}
        button={dict.contactDirect.button}
      />
    </div>
  )
}

export default BodyCompositionPage;
