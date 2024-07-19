import { FullPageSections, FullpageSection, Fullpage } from '@/components/react-fullpage'
import drinkImg from "@/assets/drink.png";
import { Parallax } from '@/components/parallax';

export default function Home() {
  // @ts-ignore
  return <Fullpage>
    <FullPageSections>
      <FullpageSection className="bg-gradient-to-br from-dark-50 to-dark">
        <div className='container flex gap-4 justify-center items-center'>
          <div className='w-1/2'>
            <img src={drinkImg.src} alt="" className='h-[1000px] object-contain' />
          </div>
          <div className='w-1/2'>

          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        {/* <Parallax scale={[0, 10]}> */}
          <video className='w-[calc(100%-1rem)] h-[calc(100%-1rem)] object-cover' src="/powerboomvideo.mp4" autoPlay muted loop></video>
        {/* </Parallax> */}
      </FullpageSection>
    </FullPageSections>
  </Fullpage>
}
