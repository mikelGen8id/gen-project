
import { useState } from 'react';
import logoImage from '../../assets/images/logo.png';
import Button from '../../components/Button';
import Switch from '../../components/Switch';
import COLORS from '../../constants/colors';
import { useNavigate } from 'react-router-dom';

const TermsPage = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register')
  }
  const goToStart = () => {
    navigate('/')
  }

  const [isToogled, setIsToogled] = useState(false);

  const handleSwitch = () => { setIsToogled(!isToogled); console.log("asdf")}

  return (
    <div className="w-full h-[calc(100vh)] flex flex-col justify-between">
      <div className='absolute top-[0px] right-[0px] '><img onClick={goToStart} src={logoImage} className="w-[150px]" /></div>
      <div className='px-[36px] mt-[150px]'>
        <div className='w-full h-[240px]' style={{ backgroundColor: COLORS.gray }} />
        <div className='px-[16px] py-[12px] border border-[4px]' style={{ borderColor: COLORS.gray }}>
          <p className='font-bold text-[32px]' > Introduction</p>
          <p className='text-[18px]' > Terms and conditions</p>
        </div>
      </div>
      <div className='flex-grow' />
      <div className='flex flex-row px-[50px] py-[40px] justify-between'>
        <span className='text-[20px]'>I understand and provide consent</span>
        <Switch isOn={isToogled} handleToggle={handleSwitch} />
      </div>
      <div className='flex flex-row gap-x-[40px] py-[50px] px-[50px] justify-end'>
        <Button label={"Continue"} color={COLORS.blue} onChange={goToRegister} />
      </div>
    </div>
  )
}

export default TermsPage;