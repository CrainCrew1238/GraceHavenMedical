import MediaBlock from '@/components/video-block';
import ContentBlock from '@/components/content-block';
import Gallery from '@/components/gallery';
import FAQ from '@/components/faq';
import ContactDirect from '@/components/contact-direct';
import {getDictionary} from "@/lib/dictionaries.ts";

const magnetTherapyMediaBlock1 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1726956818/magnet-therapy-video-block-1_z35uit.mp4';
const magnetTherapyMediaBlock2 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1723638109/home-video-block-1_ei9dgk.mp4';

const magnetTherapyContentBlock1 = 'dr85cqwlh/image/upload/v1726957148/magnet-therapy-content-block-1_u3ehay.png';
const magnetTherapyContentBlock2 = 'dr85cqwlh/image/upload/v1726957149/magnet-therapy-content-block-2_u39mmn.png';

const MagnetTherapyPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <MediaBlock
        textColor="#ffffff"
        height={580}
        buttonUrl="https://www.vagaro.com/cl/BcND43Hr~94r8mJ9Wu~IMnE4SfMHQ5Wk8ohPMNHlhN4="
        buttonText={dict.magnetTherapy.hero.button}
        contentPosition="left"
        backgroundVideo={magnetTherapyMediaBlock1}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.magnetTherapy.hero.title}</h2><p>${dict.magnetTherapy.hero.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        height={800}
        featuredImage={magnetTherapyContentBlock1}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.magnetTherapy.healingBenefits.title}</h2><p>${dict.magnetTherapy.healingBenefits.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        height={620}
        featuredImage={magnetTherapyContentBlock2}
        imagePosition="left"
        imageWidth={600}
        buttonUrl="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVN8SzlOQriDI7QmxlJ0+VpnFGJfwHF54xXtrZRRZUn5L5mfJC40MRL0lUnnmjOkSQz80uMkmnVe97oLVpdOYczpycmdHicCwR9pjVvK8Bn8D3+256MmyOmRbM8igdhe/T3FZVOeteS7RFi8e4X5JhYU4CInSCGw7p5fN9N1lJAXoD2E3Z3OuMosbQQr35cYK0cw9N8dfKrpczpssSxgk0AjzdXg9qmyqpQPRZi2q0LDgNm5mWylaTLWlC0iEb7UIs9LIsucXwcMgdm+zw/XaTfAm96ZQ/QYc4fhiffU13GzbCJeM1/FRlOCr6/HQ8wE0Uy2IZDdN72xwXIH+IJ1fXw78s3WMz+NP18cgF/eUE4e9Leysy208I3//ezkk/MPB3Ziyi427eH5GkPEDHTHDNRmdqp3i9ZBhEvC/hwNOjPBb"
        buttonText={dict.magnetTherapy.patientBenefits.button}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.magnetTherapy.patientBenefits.title}</h2><p>${dict.magnetTherapy.patientBenefits.text}</p>`
        }}
      />
      <MediaBlock
        textColor="#fff"
        buttonUrl="https://apps.apple.com/app/mygrace-haven/id6501993778"
        buttonText={dict.magnetTherapy.app.button}
        height={475}
        backgroundVideo={magnetTherapyMediaBlock2}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.magnetTherapy.app.title}</h2><p>${dict.magnetTherapy.app.text}</p>`
        }}
        contentPosition="left"
        button2Url="https://play.google.com/store/apps/details?id=com.ghmpatientportal.bodysite&hl=en_US&gl=US"
        button2Text={dict.magnetTherapy.app.button2}
      />
      {/*  TODO: ANOTHER ANY SETTING - TYPING IS MESSED UP.*/}
      <Gallery lg bgColor="#fff" textColor="#aa9c91" items={dict.magnetTherapy.therapeutic.items as any} imgHeight={355} imgWidth={296} height={550} title={dict.magnetTherapy.therapeutic.title} text={dict.magnetTherapy.therapeutic.text} />
      <FAQ
        bgColor="#fff"
        textColor="#aa9c91"
        header={dict.magnetTherapy.faq.header}
        description={dict.magnetTherapy.faq.description}
        questions={dict.magnetTherapy.faq.questions}
      />
      <ContactDirect
        header={dict.contactDirect.header}
        body={dict.contactDirect.body}
        button={dict.contactDirect.button}
      />
    </div>
  )
}

export default MagnetTherapyPage;
