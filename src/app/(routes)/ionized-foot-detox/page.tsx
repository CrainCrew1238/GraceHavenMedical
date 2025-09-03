import MediaBlock from '@/components/video-block';
import ContentBlock from '@/components/content-block';
import Gallery from '@/components/gallery';
import FeaturedPlan from '@/components/featured-plan';
import FAQ from '@/components/faq';
import ContactDirect from '@/components/contact-direct';
import {getDictionary} from "@/lib/dictionaries.ts";

const footDetoxMediaBlock1 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1727026768/ionized-foot-detox-video-block-1_vrytfv.mp4';

const footDetoxContentBlock1 = 'dr85cqwlh/image/upload/v1727027271/ionized-foot-detox-content-block-1_uu6sjb.png';
const footDetoxContentBlock2 = 'dr85cqwlh/image/upload/v1727027395/ionized-foot-detox-content-block-2_iytasc.png';

const FootDetoxPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <MediaBlock
        textColor="#ffffff"
        height={530}
        buttonUrl="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVN8SzlOQriDI7QmxlJ0+VpnFGJfwHF54xXtrZRRZUn5L5mfJC40MRL0lUnnmjOkSQz80uMkmnVe97oLVpdOYczpycmdHicCwR9pjVvK8Bn8D3+256MmyOmRbM8igdhe/T3FZVOeteS7RFi8e4X5JhYU4CInSCGw7p5fN9N1lJAXoD2E3Z3OuMosbQQr35cYK0cw9N8dfKrpczpssSxgk0AjzdXg9qmyqpQPRZi2q0LDgNm5mWylaTLWlC0iEb7UIs9LIsucXwcMgdm+zw/XaTfAm96ZQ/QYc4fhiffU13GzbCJeM1/FRlOCr6/HQ8wE0Uy2IZDdN72xwXIH+IJ1fXw78s3WMz+NP18cgF/eUE4e9Leysy208I3//ezkk/MPB3Ziyi427eH5GkPEDHTHDNRmdqp3i9ZBhEvC/hwNOjPBb"
        buttonText={dict.footDetox.hero.button}
        contentPosition="left"
        backgroundVideo={footDetoxMediaBlock1}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.footDetox.hero.title}</h2><p>${dict.footDetox.hero.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#f5f5f5"
        textColor="#aa9c91"
        height={800}
        featuredImage={footDetoxContentBlock1}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.footDetox.removingToxins.title}</h2><p>${dict.footDetox.removingToxins.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#ffffff"
        textColor="#aa9c91"
        height={800}
        featuredImage={footDetoxContentBlock2}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.footDetox.overallWellness.title}</h2><p>${dict.footDetox.overallWellness.text}</p>`
        }}
      />
      {/*  */}
      <Gallery lg bgColor="#f5f5f5" textColor="#aa9c91" items={dict.footDetox.detoxification.items as any} imgHeight={355} imgWidth={296} height={700} title={dict.footDetox.detoxification.title} text={dict.footDetox.detoxification.text} />
      <FeaturedPlan planInfo={dict.footDetox.featuredPlan.info} planDetails={dict.footDetox.featuredPlan.details} />
      <FAQ
        bgColor="#fff"
        textColor="#aa9c91"
        header={dict.footDetox.faq.header}
        description={dict.footDetox.faq.description}
        questions={dict.footDetox.faq.questions}
      />
      <ContactDirect
        header={dict.contactDirect.header}
        body={dict.contactDirect.body}
        button={dict.contactDirect.button}
      />
    </div>
  )
}

export default FootDetoxPage;
