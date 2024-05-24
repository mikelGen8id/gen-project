import logoImage from '../assets/images/logoeight.png';
import account from '../assets/images/account.png';
import dashboard from '../assets/images/dashboard.png';
import datastacking from '../assets/images/datastacking.png';
import verifieddata from '../assets/images/verifieddata.png';
import profilesettings from '../assets/images/profilesettings.png';
import Slider from '../components/carousel/Slider';


const Home = () => {
  return (
    <div className="w-full h-[calc(100vh)] flex flex-col ">
      <div className='absolute top-[0px] right-[0px] '><img src={logoImage} className="w-[150px]" /></div>
      <div className='absolute top-[20px] p-2 left-[20px] rounded-full bg-red-300 overflow-hidden'><img src={account} className="w-[80px]" /></div>
      <div className='mt-[150px]'>
        <p className='text-[20px] font-bold px-10'>WELCOME Mikel !  Let's explore.</p>
      </div>
      <div className='mt-[20px] mb-[20px] justify-center '>
        {/* <Slider /> */}
      </div>
      <div className='flex flex-col gap-y-2'>
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex flex-col'>
            <img src={dashboard} alt="" width={"80"} className='mx-auto' />
            <p className='mx-auto text-[18px] font-bold'>DASHBOARD</p>
          </div>
          <div className='flex flex-col'>
            <img src={datastacking} alt="" width={"80"} className='mx-auto' />
            <p className='mx-auto text-[18px] font-bold'>DATA STAKING</p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex flex-col'>
            <img src={verifieddata} alt="" width={"80"} className='mx-auto' />
            <p className='mx-auto text-[18px] font-bold'>MY VERIFIED</p>
            <p className='mx-auto text-[18px] font-bold'>DATA</p>
          </div>
          <div className='flex flex-col'>
            <img src={profilesettings} alt="" width={"80"} className='mx-auto' />
            <p className='mx-auto text-[18px] font-bold'>PROIFLE</p>
            <p className='mx-auto text-[18px] font-bold'>SETTING</p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex flex-col'>
            <img src={dashboard} alt="" width={"80"} className='mx-auto' />
            <p className='mx-auto text-[18px] font-bold'>ADD CREDINTIAL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
