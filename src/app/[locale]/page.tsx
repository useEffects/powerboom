import { FullPageSections, FullpageSection, Fullpage } from '@/components/react-fullpage'
import drinkImg from "@/assets/drink.png";
import logoImg from "@/assets/logo.svg";
import { createTranslation } from '@/i18n/server';
import { LocaleTypes } from '@/lib/contants';
import ArrowRightUp from "@/assets/square-arrow-right-up-svgrepo-com.svg";
import { GridBackgroundDemo } from '@/components/grid-background';
import { Carousel } from '@/components/carousel';
import { ReactNode } from 'react';
import MissionImg from "@/assets/mission.png";
import ShareDrinkImg from "@/assets/share-drink.jpg";

export default async function Home({ params: { locale } }: { params: { locale: LocaleTypes } }) {
  const { t } = await createTranslation(locale, "home")
  // @ts-ignore
  return <Fullpage>
    <FullPageSections>
      <FullpageSection className="bg-dark">
        <div className='flex flex-col-reverse md:flex-row justify-center items-center xl:container p-0 w-full h-full bg-dark-50'>
          <div className='w-full h-1/2 md:w-1/2 md:h-full flex flex-col gap-4 bg-gradient-to-t md:bg-gradient-to-r from-dark/80 to-dark p-4'>
            <div className='flex-grow flex flex-col justify-evenly gap-4'>
              <div>
                <p className='heading text-sky tracking-widest'>POWERBOOM</p>
                <p className='heading text-sky tracking-widest opacity-50'>POWERBOOM</p>
                <p className='heading text-sky tracking-widest opacity-5'>POWERBOOM</p>
              </div>
              <p className='text-lg'>{t("about-line")}</p>
              <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
                <img src={logoImg.src} alt="" className='md:w-1/2 object-contain' />
                <div className='flex items-end flex-grow h-full justify-center'>
                  <button className='bg-white rounded-full px-4 py-2 flex gap-[1ch] hover:opacity-80 cursor-pointer items-center'>
                    <span className='text-dark uppercase'>{t("explore-the-taste")}</span>
                    <img src={ArrowRightUp.src} alt="" className='h-8 object-contain' />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center items-center relative bg-dark pl-4'>
            <GridBackgroundDemo />
            <img src={drinkImg.src} alt="" className='h-full object-contain absolute top-4 bottom-4 left-[calc(50%-1rem)] right-4 -translate-x-1/2' />
          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        <video className='w-full h-full object-cover bg-transparent' src="/assets/powerboomvideo.mp4" autoPlay={true} muted loop></video>
      </FullpageSection>
      <FullpageSection>
        <Carousel showThumbs={false} className='w-full h-full' showStatus={false}>
          <CarouselItem cover={MissionImg.src} heading={t("Mission")}>
            <p className='text-xl max-w-sm'>
              {t("mission")}
            </p>
          </CarouselItem>
          <CarouselItem cover={ShareDrinkImg.src} heading={t("Mission")}>
            <p className='text-xl max-w-sm'>
              {t("mission")}
            </p>
          </CarouselItem>
          <CarouselItem cover={MissionImg.src} heading={t("Mission")}>
            <p className='text-xl max-w-sm'>
              {t("mission")}
            </p>
          </CarouselItem>
          <CarouselItem cover={MissionImg.src} heading={t("Mission")}>
            <p className='text-xl max-w-sm'>
              {t("mission")}
            </p>
          </CarouselItem>
        </Carousel>
      </FullpageSection>
    </FullPageSections>
  </Fullpage>
}

const CarouselItem = ({ children, cover, heading }: { children: ReactNode, cover: string, heading: string }) => {
  return <div className='flex flex-col md:flex-row gap-4 h-screen bg-gradient-to-br from-dark-50 via-dark to-dark'>
    <div className='w-full h-1/2 md:w-1/2 md:h-full relative'>
      <p className='absolute heading top-4 left-4'>{heading}</p>
      <img src={cover} alt="" className='w-full h-full object-cover' />
    </div>
    <div className='w-full h-1/2 md:w-1/2 md:h-full flex justify-center items-center'>
      {children}
    </div>
  </div>
}