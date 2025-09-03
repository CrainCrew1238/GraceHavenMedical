
import MediaBlock from '@/components/video-block';
import ContentBlock from '@/components/content-block';
import Memberships from '@/components/memberships';
import FeaturedPlan from '@/components/featured-plan';
import Gallery from '@/components/gallery';
import FAQ from '@/components/faq';
import {getDictionary} from "@/lib/dictionaries.ts";

const weightLossMediaBlock1 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1725720526/weight-loss-video-block-1_fn46gx.mp4';
const weightLossMediaBlock2 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1723824573/home-video-block-3_jiu6nq.mp4';
const weightLossMediaBlock3 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1725815631/weight-loss-video-block-2_aud2wy.mp4';

const weightLossContentBlock1 = 'dr85cqwlh/image/upload/v1725802907/weight-loss-content-1_hfx29t.jpg';
const weightLossContentBlock2 = 'dr85cqwlh/image/upload/v1723585184/new_wave_weight_loss_pfzpzp.jpg';
const weightLossContentBlock3 = 'dr85cqwlh/image/upload/v1725814754/weight-loss-content-2_ak1k0g.png';
const weightLossContentBlock4 = 'dr85cqwlh/image/upload/v1725930854/weight-loss-content-4_kiipie.png';

const WeightLossPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <MediaBlock
        textColor="#ffffff"
        height={640}
        contentPosition="left"
        backgroundVideo={weightLossMediaBlock1}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.weightLoss.hero.title}</h2><p>${dict.weightLoss.hero.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        buttonUrl="https://www.vagaro.com/cl/6IDvThwjPpMAkbPBXkYsoB~Gf2ey0UFIgSsiiTofqYY="
        buttonText={dict.weightLoss.glp1.button}
        height={1120}
        featuredImage={weightLossContentBlock1}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.weightLoss.glp1.title}</h2><p>${dict.weightLoss.glp1.text}</p>`
        }}
      />
      <Memberships/>
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        buttonUrl="https://www.vagaro.com/cl/-gl5b-V4wx-HuDqrItlpvYHdkVp5WSZcgYtuL5zMunk="
        buttonText={dict.weightLoss.newWave.button}
        height={750}
        featuredImage={weightLossContentBlock2}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<p>${dict.weightLoss.newWave.subtitle}</p><h2 class='mb-4'>${dict.weightLoss.newWave.title}</h2><p>${dict.weightLoss.newWave.text}</p>`
        }}
      />
      <FeaturedPlan planDetails={dict.homePage.featuredPlans.organicDetoxAndNewWave} />
      <MediaBlock
        textColor="#fff"
        buttonUrl="https://www.vagaro.com/cl/6IDvThwjPpMAkbPBXkYsoB~Gf2ey0UFIgSsiiTofqYY="
        buttonText={dict.homePage.contentBlocks.virtual.button}
        height={600}
        backgroundVideo={weightLossMediaBlock2}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.homePage.contentBlocks.virtual.title}</h2><p>${dict.homePage.contentBlocks.virtual.text}</p>`
        }}
        contentPosition="center"
        button2Url="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVN8SzlOQriDI7QmxlJ0+VpnFGJfwHF54xXtrZRRZUn5L5mfJC40MRL0lUnnmjOkSQz80uMkmnVe97oLVpdOYczpycmdHicCwR9pjVvK8Bn8D3+256MmyOmRbM8igdhe/T3FZVOeteS7RFi8e4X5JhYU4CInSCGw7p5fN9N1lJAXoD2E3Z3OuMosbQQr35cYK0cw9N8dfKrpczpssSxgk0AjzdXg9qmyqpQPRZi2q0LDgNm5mWylaTLWlC0iEb7UIs9LIsucXwcMgdm+zw/XaTfAm96ZQ/QYc4fhiffU13GzbCJeM1/FRlOCr6/HQ8wE0Uy2IZDdN72xwXIH+IJ1fXw78s3WMz+NP18cgF/eUE4e9Leysy208I3//ezkk/MPB3Ziyi427eH5GkPEDHTHDNRmdqp3i9ZBhEvC/hwNOjPBb"
        button2Text={dict.homePage.contentBlocks.mobile.button2}
      />
      <Gallery bgColor="#f2e4cd" textColor="#aa9c91" items={dict.weightLoss.gallery.items} height={1120} imgHeight={284} imgWidth={284} title={dict.weightLoss.gallery.title} text={dict.weightLoss.gallery.text} />
      <ContentBlock
        bgColor="#f2e4cd"
        textColor="#aa9c91"
        buttonUrl="https://apps.apple.com/app/mygrace-haven/id6501993778"
        buttonText={dict.weightLoss.myGrace.button}
        button2Url="https://play.google.com/store/apps/details?id=com.ghmpatientportal.bodysite&hl=en_US&gl=US"
        button2Text={dict.weightLoss.myGrace.button2}
        height={1500}
        featuredImage={weightLossContentBlock3}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.weightLoss.myGrace.title}</h2><p>${dict.weightLoss.myGrace.text}</p>`
        }}
      />
      <MediaBlock
        textColor="#fff"
        height={600}
        backgroundVideo={weightLossMediaBlock3}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.weightLoss.mobile.title}</h2><p>${dict.weightLoss.mobile.text}</p>`
        }}
        contentPosition="center"
      />
      <ContentBlock
        bgColor="#f2e4cd"
        textColor="#aa9c91"
        height={600}
        featuredImage={weightLossContentBlock4}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.weightLoss.healing.title}</h2><p>${dict.weightLoss.healing.text}</p>`
        }}
      />
      <FAQ
        bgColor="#fff"
        textColor="#aa9c91"
        header={dict.weightLoss.faq.header}
        description={dict.weightLoss.faq.description}
        questions={dict.weightLoss.faq.questions}
      />
    </div>
  )
}

export default WeightLossPage;
