import MediaBlock from '@/components/video-block';
import Gallery from '@/components/gallery';
import FAQ from '@/components/faq';
import ContentBlock from '@/components/content-block';
import {getDictionary} from "@/lib/dictionaries.ts";

const infraredTherapyMediaBlock1 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1726854572/infrared-therapy-video-1_a9hcnr.mp4';
const infraredTherapyMediaBlock2 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1723824573/home-video-block-3_jiu6nq.mp4';
const infraredTherapyMediaBlock3 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1723638109/home-video-block-1_ei9dgk.mp4';

const infraredTherapyContentBlock1 = 'dr85cqwlh/image/upload/v1726855102/infrared-therapy-content-block-1_qjtaqk.png';
const infraredTherapyContentBlock2 = 'dr85cqwlh/image/upload/v1723638804/home-content-block-4_a0g9be.png';
const infraredTherapyContentBlock3 = 'dr85cqwlh/image/upload/v1726857169/infrared-therapy-content-block-3_psjs1z.png';

const InfraredTherapyPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <MediaBlock
        textColor="#ffffff"
        height={500}
        buttonUrl="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVN8SzlOQriDI7QmxlJ0+VpnFGJfwHF54xXtrZRRZUn5L5mfJC40MRL0lUnnmjOkSQz80uMkmnVe97oLVpdOYczpycmdHicCwR9pjVvK8Bn8D3+256MmyOmRbM8igdhe/T3FZVOeteS7RFi8e4X5JhYU4CInSCGw7p5fN9N1lJAXoD2E3Z3OuMosbQQr35cYK0cw9N8dfKrpczpssSxgk0AjzdXg9qmyqpQPRZi2q0LDgNm5mWylaTLWlC0iEb7UIs9LIsucXwcMgdm+zw/XaTfAm96ZQ/QYc4fhiffU13GzbCJeM1/FRlOCr6/HQ8wE0Uy2IZDdN72xwXIH+IJ1fXw78s3WMz+NP18cgF/eUE4e9Leysy208I3//ezkk/MPB3Ziyi427eH5GkPEDHTHDNRmdqp3i9ZBhEvC/hwNOjPBb"
        buttonText={dict.infraredTherapy.hero.button}
        button2Url="https://www.vagaro.com/cl/IHAipVFRKBJHzrS8BmKP2xuSyj9ztIpGBpkJ9cb4uOA="
        button2Text={dict.infraredTherapy.hero.button2}
        contentPosition="left"
        backgroundVideo={infraredTherapyMediaBlock1}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.infraredTherapy.hero.title}</h2><p>${dict.infraredTherapy.hero.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        height={800}
        featuredImage={infraredTherapyContentBlock1}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.infraredTherapy.healingPower.title}</h2><p>${dict.infraredTherapy.healingPower.text}</p>`
        }}
        buttonUrl="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVN8SzlOQriDI7QmxlJ0+VpnFGJfwHF54xXtrZRRZUn5L5mfJC40MRL0lUnnmjOkSQz80uMkmnVe97oLVpdOYczpycmdHicCwR9pjVvK8Bn8D3+256MmyOmRbM8igdhe/T3FZVOeteS7RFi8e4X5JhYU4CInSCGw7p5fN9N1lJAXoD2E3Z3OuMosbQQr35cYK0cw9N8dfKrpczpssSxgk0AjzdXg9qmyqpQPRZi2q0LDgNm5mWylaTLWlC0iEb7UIs9LIsucXwcMgdm+zw/XaTfAm96ZQ/QYc4fhiffU13GzbCJeM1/FRlOCr6/HQ8wE0Uy2IZDdN72xwXIH+IJ1fXw78s3WMz+NP18cgF/eUE4e9Leysy208I3//ezkk/MPB3Ziyi427eH5GkPEDHTHDNRmdqp3i9ZBhEvC/hwNOjPBb"
        buttonText={dict.infraredTherapy.healingPower.button}
      />
      <MediaBlock
        textColor="#ffffff"
        height={600}
        buttonUrl="https://www.vagaro.com/cl/6IDvThwjPpMAkbPBXkYsoB~Gf2ey0UFIgSsiiTofqYY="
        buttonText={dict.infraredTherapy.nursePractitioners.button}
        button2Url="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVN8SzlOQriDI7QmxlJ0+VpnFGJfwHF54xXtrZRRZUn5L5mfJC40MRL0lUnnmjOkSQz80uMkmnVe97oLVpdOYczpycmdHicCwR9pjVvK8Bn8D3+256MmyOmRbM8igdhe/T3FZVOeteS7RFi8e4X5JhYU4CInSCGw7p5fN9N1lJAXoD2E3Z3OuMosbQQr35cYK0cw9N8dfKrpczpssSxgk0AjzdXg9qmyqpQPRZi2q0LDgNm5mWylaTLWlC0iEb7UIs9LIsucXwcMgdm+zw/XaTfAm96ZQ/QYc4fhiffU13GzbCJeM1/FRlOCr6/HQ8wE0Uy2IZDdN72xwXIH+IJ1fXw78s3WMz+NP18cgF/eUE4e9Leysy208I3//ezkk/MPB3Ziyi427eH5GkPEDHTHDNRmdqp3i9ZBhEvC/hwNOjPBb"
        button2Text={dict.infraredTherapy.nursePractitioners.button2}
        contentPosition="left"
        backgroundVideo={infraredTherapyMediaBlock2}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.infraredTherapy.nursePractitioners.title}</h2><p>${dict.infraredTherapy.nursePractitioners.text}</p>`
        }}
      />
      {/*  TODO: ANOTHER TYPING ISSUE*/}
      <Gallery lg bgColor="#fff" textColor="#aa9c91" items={dict.infraredTherapy.far.items as any} imgHeight={355} imgWidth={296} height={700} title={dict.infraredTherapy.far.title} />
      <MediaBlock
        textColor="#ffffff"
        height={470}
        buttonUrl="https://apps.apple.com/app/mygrace-haven/id6501993778"
        buttonText={dict.infraredTherapy.myGrace.button}
        button2Url="https://play.google.com/store/apps/details?id=com.ghmpatientportal.bodysite&hl=en_US&gl=US"
        button2Text={dict.infraredTherapy.myGrace.button2}
        contentPosition="left"
        backgroundVideo={infraredTherapyMediaBlock3}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.infraredTherapy.myGrace.title}</h2><p>${dict.infraredTherapy.myGrace.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#ffffff"
        textColor="#aa9c91"
        height={820}
        featuredImage={infraredTherapyContentBlock2}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.infraredTherapy.mid.title}</h2><p>${dict.infraredTherapy.mid.text}</p>`
        }}
        buttonUrl="https://www.vagaro.com/gracehavenmedical/book-now"
        buttonText={dict.infraredTherapy.mid.button}
      />
      <ContentBlock
        bgColor="#ffffff"
        textColor="#aa9c91"
        height={820}
        featuredImage={infraredTherapyContentBlock3}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.infraredTherapy.near.title}</h2><p>${dict.infraredTherapy.near.text}</p>`
        }}
        buttonUrl="https://www.vagaro.com/cl/BcND43Hr~94r8mJ9Wu~IMnE4SfMHQ5Wk8ohPMNHlhN4="
        buttonText={dict.infraredTherapy.near.button}
      />
      <FAQ
        bgColor="#fff"
        textColor="#aa9c91"
        header={dict.infraredTherapy.faq.header}
        description={dict.infraredTherapy.faq.description}
        questions={dict.infraredTherapy.faq.questions}
      />
    </div>
  )
}

export default InfraredTherapyPage;
