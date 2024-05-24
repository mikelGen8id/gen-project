import InputTextField from "../../components/InputTextField";

import logoImage from '../../assets/images/logo.png';
import PhoneInputField from "../../components/PhoneInputField";
import Button from "../../components/Button";
import COLORS from "../../constants/colors";
import AuthCodeInput from "../../components/AuthCodeInput";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home')
  }
  const goToStart = () => {
    navigate('/')
  }
  return (
    <div className="flex flex-col h-[calc(100vh)] items-center justify-center">
      <div className='absolute top-[0px] right-[0px] '><img onClick={goToStart} src={logoImage} className="w-[150px]" /></div>
      <div className="px-[36px] mt-[150px] w-full">

        <InputTextField label={"Firstname"} placeholder={"First Name"} />
        <InputTextField label={"Lastname"} placeholder={"Last Name"} />
        <PhoneInputField />
        <div className="flex justify-end mt-4">
          <Button label={'Send OTP'} color={COLORS.blue} />
        </div>
      </div>
      <div className="flex-grow" />
      <div className="mb-12">
        <AuthCodeInput />
        <div className="flex justify-end">
          <Button label={"Continue"} color={COLORS.blue} onChange={goToHome} />
        </div>
      </div>
    </div>
  );
}

export default Register;
