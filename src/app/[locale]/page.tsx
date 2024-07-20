import { FullPageSections, FullpageSection, Fullpage } from '@/components/react-fullpage'
import drinkImg from "@/assets/drink.png";
import logoImg from "@/assets/logo.svg";
import { createTranslation } from '@/i18n/server';
import { LocaleTypes } from '@/lib/contants';
import ArrowRightUp from "@/assets/square-arrow-right-up-svgrepo-com.svg";
import { GridBackgroundDemo } from '@/components/grid-background';
import { ReactNode } from 'react';
import ShareDrinkImg from "@/assets/share-drink.jpg";
import ChangeLocale from '@/components/change-locale';
import InstagramImg from "@/assets/instagram-1-svgrepo-com.svg"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import footerImg from "@/assets/footer.jpg";

export default async function Home({ params: { locale } }: { params: { locale: LocaleTypes } }) {
  const { t } = await createTranslation(locale, "home")
  // @ts-ignore
  return <Fullpage>
    <FullPageSections className='bg-gradient-to-t md:bg-gradient-to-r from-dark-50 via-dark to-dark'>
      <FullpageSection className='p-4'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 w-full h-full'>
          <div className='w-full h-1/2 md:w-1/2 md:h-full flex flex-col gap-4'>
            <div className='flex-grow flex flex-col justify-center gap-4 md:gap-12 items-center w-full'>
              <div className='flex gap-4 w-full justify-between md:justify-center gap-4'>
                <img src={logoImg.src} alt="" className='md:w-1/2 object-contain' />
                <ChangeLocale />
              </div>
              <div>
                <p className='heading text-sky tracking-widest uppercase'>{t("powerboom")}</p>
                <p className='heading text-sky tracking-widest opacity-50 uppercase'>{t("powerboom")}</p>
                <p className='heading text-sky tracking-widest opacity-10 uppercase'>{t("powerboom")}</p>
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
        <div className='w-full h-full flex flex-col md:flex-row'>
          <img src={ShareDrinkImg.src} className='w-full h-1/2 md:w-1/2 md:h-full object-cover' alt="" />
          <div className='flex flex-col gap-4 p-4 justify-evenly w-full h-1/2 md:w-1/2 md:h-full md:justify-start md:gap-8'>
            <div className='flex flex-col'>
              {Array(3).fill(0).map((_, i) => <p key={i} className='text-lg md:text-xl'>
                &#11044; {t(`about.${i}`)}
              </p>)}
            </div>
            <p className='heading'>{t("mission-heading")}</p>
            <p className='text-xl'>{t("mission")}</p>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        <div className="flex flex-col w-full h-full">
          <img src={footerImg.src} alt="" className='w-full h-1/2 object-cover' />
          <div className='w-full h-1/2 flex flex-col justify-between'>
            <div className="flex flex-col md:flex-row md:justify-around md:items-center w-full md:my-8 items-center justify-center h-full gap-4">
              <div className='flex flex-col gap-4 p-4'>
                <p className='text-xl uppercase'>{t("terms-and-conditions")}</p>
                <p className='text-xl uppercase'>{t("privacy-policy")}</p>
                <p className='text-xl uppercase'>{t("store")}</p>
                <p className='text-xl uppercase'>{t("company-profile")}</p>
              </div>
              <div className='flex justify-center gap-4'>
                <Link href='https://www.instagram.com' underline="none"><InstagramIcon fontSize="large" /></Link>
                <Link href='https://www.instagram.com' underline="none"><XIcon fontSize="large" /></Link>
                <Link href='https://www.facebook.com' underline="none"><FacebookIcon fontSize="large" /></Link>
                <Link href='https://www.facebook.com' underline="none"><YouTubeIcon fontSize="large" /></Link>
                <Link href='https://www.facebook.com' underline="none"><EmailIcon fontSize="large" /></Link>
              </div>
            </div>
            <div className='flex flex-col bg-sky-200 w-full text-dark py-12 mt-auto mb-0'>
              <div className='flex flex-col my-4 justify-center items-center'>
                <p className='text-xl'>{t("made-with")}</p>
              </div>
            </div>
          </div>
        </div>
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