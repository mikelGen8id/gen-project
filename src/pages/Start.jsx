
import Button from '../components/Button';
import logoImage from '../assets/images/logo.png';
import COLORS from '../constants/colors';
import { useNavigate } from 'react-router-dom';
function Start() {

  const navigate = useNavigate();

  const goToTermsPage = () => {
    navigate('/terms')
  }
  const goToLogin = () => {
    navigate('/home')
  }

  return (
    <div className=' w-full h-[calc(100vh)] flex flex-col justify-between items-center'>
      <h1 className=' w-full text-center py-10 text-[48px] font-bold'>Gen8ID</h1>
      <img src={logoImage} className=' px-[24px] object-cover' />
      {/* <div className=' flex-grow w-full bg-red-300 '></div> */}
      <div className=' py-[50px] flex flex-row gap-x-[40px]'>
        <Button label="Register" color={COLORS.blue} onChange={goToTermsPage} />
        <Button label="Login" color={COLORS.green} onChange={goToLogin} />
      </div>
    </div>
  )
}

export default Start;
