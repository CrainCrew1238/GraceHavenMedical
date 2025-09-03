import MediaBlock from '@/components/video-block';
import ContentBlock from '@/components/content-block';
import {getDictionary} from "@/lib/dictionaries.ts";

const membershipsMediaBlock1 = 'https://res.cloudinary.com/dr85cqwlh/video/upload/v1724954614/memberships-1_ocsnro.mp4';

const membershipsContentBlock1 = 'dr85cqwlh/image/upload/v1724957222/membership-content-1_c6f4md.png';
const membershipsContentBlock2 = 'dr85cqwlh/image/upload/v1724957221/membership-content-2_jugr9z.png';
const membershipsContentBlock3 = 'dr85cqwlh/image/upload/v1724957222/membership-content-3_mbw8am.jpg';
const membershipsContentBlock4 = 'dr85cqwlh/image/upload/v1724957222/membership-content-4_dmfjke.png';
const membershipsContentBlock5 = 'dr85cqwlh/image/upload/v1724957221/membership-content-5_xdgaf5.jpg';
const membershipsContentBlock6 = 'dr85cqwlh/image/upload/v1724957222/membership-content-6_qtlrqb.png';

const MembershipsPage = async () => {
  const dict = await getDictionary();

  return (
    <div>
      <MediaBlock
        textColor="#ffffff"
        height={770}
        contentPosition="left"
        backgroundVideo={membershipsMediaBlock1}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.memberships.hero.title}</h2><p>${dict.memberships.hero.text}</p>`
        }}
      />
      {/*  TODO: THIS IS CAUSING CLIENT SIDE CRASHING - THIS NEEDS TO BE REMOVED OR REPLACED*/}
      {/*<ContentBlock*/}
      {/*  bgColor="#fff"*/}
      {/*  textColor="#aa9c91"*/}
      {/*  buttonUrl="https://www.vagaro.com/cl/k3Pw2WieAxWBATfedCZ-TeSja7nljf1CrrtVc9qyANE="*/}
      {/*  buttonText={dict.memberships.plans.semaglutide.button}*/}
      {/*  height={1120}*/}
      {/*  featuredImage={membershipsContentBlock1}*/}
      {/*  imagePosition="right"*/}
      {/*  imageWidth={600}*/}
      {/*  sectionContent={{*/}
      {/*    __html: `<h2 class='mb-4'>${dict.memberships.plans.semaglutide.title}</h2><p>${dict.memberships.plans.semaglutide.text}</p>`*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<ContentBlock*/}
      {/*  bgColor="#fff"*/}
      {/*  textColor="#aa9c91"*/}
      {/*  buttonUrl="https://www.vagaro.com/cl/NrsMyhe4ZGuKWMPmtauzVhA99dAPW1P3TpeMcT9TD3w="*/}
      {/*  buttonText={dict.memberships.plans.GLP-1 TRZ.button}*/}
      {/*  height={930}*/}
      {/*  featuredImage={membershipsContentBlock2}*/}
      {/*  imagePosition="left"*/}
      {/*  imageWidth={600}*/}
      {/*  sectionContent={{*/}
      {/*    __html: `<h2 class='mb-4'>${dict.memberships.plans.GLP-1 TRZ.title}</h2><p>${dict.memberships.plans.GLP-1 TRZ.text}</p>`*/}
      {/*  }}*/}
      {/*/>*/}
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        buttonUrl="https://www.vagaro.com/cl/pE~eymPthj14u~orkCQ2iqLTuIqTSgXS4u5Sog8O3n8="
        buttonText={dict.memberships.plans.bella.button}
        height={875}
        featuredImage={membershipsContentBlock3}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.memberships.plans.bella.title}</h2><p>${dict.memberships.plans.bella.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        buttonUrl="https://www.vagaro.com/cl/UVUq2TqoEuxdbJSRpXhqIlEbsxxKP5rPnySmRNqzk5o="
        buttonText={dict.memberships.plans.phentermine.button}
        height={825}
        featuredImage={membershipsContentBlock4}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.memberships.plans.phentermine.title}</h2><p>${dict.memberships.plans.phentermine.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        buttonUrl="https://www.vagaro.com/cl/LF3Dn9r1G7pGrHbuxAYiTujEM5TSDr3v5jxHiTr~88o="
        buttonText={dict.memberships.plans.rybelsus.button}
        height={870}
        featuredImage={membershipsContentBlock5}
        imagePosition="right"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.memberships.plans.rybelsus.title}</h2><p>${dict.memberships.plans.rybelsus.text}</p>`
        }}
      />
      <ContentBlock
        bgColor="#fff"
        textColor="#aa9c91"
        buttonUrl="https://www.vagaro.com/cl/Vnw5RAsXydadyZ5MUkI6QEeDdsujH3bAu523IgU2ct8="
        buttonText={dict.memberships.plans.vip.button}
        height={980}
        featuredImage={membershipsContentBlock6}
        imagePosition="left"
        imageWidth={600}
        sectionContent={{
          __html: `<h2 class='mb-4'>${dict.memberships.plans.vip.title}</h2><p>${dict.memberships.plans.vip.text}</p>`
        }}
      />
    </div>
  )
}

export default MembershipsPage;
