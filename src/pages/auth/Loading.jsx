import logoImage from '../../assets/images/logoeight.png';
import LinearProgressBar from '../../components/LinearProgressBar';

const Loading = () => {
  return (
    <div className="w-full h-[calc(100vh)] flex justify-center">
      <div className="mt-[120px] px-[24px]">
        <img src={logoImage} alt="" />
        <LinearProgressBar progress={10}/>
        <div className='flex justify-center mt-4 text-[20px]'>
          Account creation in progress ...
        </div>
      </div>
    </div>
  )
}

export default Loading;
