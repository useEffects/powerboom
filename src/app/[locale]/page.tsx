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
import ChangeLocale from '@/components/change-locale';
import InstagramImg from "@/assets/instagram-1-svgrepo-com.svg"

export default async function Home({ params: { locale } }: { params: { locale: LocaleTypes } }) {
  const { t } = await createTranslation(locale, "home")
  // @ts-ignore
  return <Fullpage>
    <FullPageSections className='bg-gradient-to-t md:bg-gradient-to-r from-dark-50 via-dark to-dark'>
      <FullpageSection className='p-4'>
        <div className='flex flex-col md:flex-row justify-center items-center container mx-auto gap-4 w-full h-full'>
          <div className='w-full h-1/2 md:w-1/2 md:h-full flex flex-col gap-4'>
            <div className='flex-grow flex flex-col justify-center gap-4 md:gap-12 items-center w-full'>
              <div className='flex gap-4 w-full justify-between'>
                <img src={logoImg.src} alt="" className='md:w-1/2 object-contain' />
                <ChangeLocale />
              </div>
              <div>
                <p className='heading text-sky tracking-widest'>POWERBOOM</p>
                <p className='heading text-sky tracking-widest opacity-50'>POWERBOOM</p>
                <p className='heading text-sky tracking-widest opacity-10'>POWERBOOM</p>
              </div>
              <div className='flex flex-col md:flex-row gap-4 items-center justify-center w-full'>
                <button className='bg-white w-full rounded-full px-4 py-2 flex gap-[1ch] hover:opacity-80 active:opacity-80 cursor-pointer items-center justify-center'>
                  <span className='text-dark uppercase'>{t("explore-the-taste")}</span>
                  <img src={ArrowRightUp.src} alt="" className='h-8 object-contain' />
                </button>
                <button className='bg-white w-full rounded-full px-4 py-2 flex gap-[1ch] hover:opacity-80 active:opacity-80 cursor-pointer items-center justify-center'>
                  <span className='text-dark uppercase'>{t("download-company-profile")}</span>
                  <img src={ArrowRightUp.src} alt="" className='h-8 object-contain' />
                </button>
              </div>
            </div>
          </div>
          <div className='w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center items-center relative bg-dark pl-4'>
            <GridBackgroundDemo />
            <img src={drinkImg.src} alt="" className='h-full object-contain absolute top-4 bottom-4 left-[calc(50%-1rem)] right-4 -translate-x-1/2' />
          </div>
        </div>
      </FullpageSection>
      <FullpageSection className='relative'>
        <video className='w-full h-full object-cover bg-transparent absolute top-0 bottom-0 left-0 right-0' src="/assets/powerboomvideo.mp4" autoPlay={true} muted loop />
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/80' />
        <div className='flex flex-col gap-4 p-4 justify-end w-full h-full relative z-10'>
          <p className='heading !text-3xl text-sky/50'>{t("do-not-miss")}</p>
          <img src={InstagramImg.src} className='w-20 h-20' alt="" />
        </div>
      </FullpageSection>
      <FullpageSection className='bg-dark'>
        <Carousel showThumbs={false} className='h-full container mx-auto p-0' showStatus={false} swipeable >
          <CarouselItem cover={ShareDrinkImg.src} heading={t("Mission")}>
            <p className='text-3xl max-w-sm text-left'>
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
          <CarouselItem cover={MissionImg.src} heading={t("Mission")}>
            <p className='text-xl max-w-sm'>
              {t("mission")}
            </p>
          </CarouselItem>
        </Carousel>
      </FullpageSection>
      <FullpageSection>

      </FullpageSection>
    </FullPageSections>
  </Fullpage >
}

const CarouselItem = ({ children, cover, heading }: { children: ReactNode, cover: string, heading: string }) => {
  return <div className='flex flex-col md:flex-row gap-4 h-screen'>
    <div className='w-full h-1/2 md:w-1/2 md:h-full relative'>
      <p className='absolute heading top-4 left-4'>{heading}</p>
      <img src={cover} alt="" className='w-full h-full object-contain p-12' />
    </div>
    <div className='w-full h-1/2 md:w-1/2 md:h-full flex justify-center'>
      {children}
    </div>
  </div>
}