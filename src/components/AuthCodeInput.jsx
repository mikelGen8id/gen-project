import { useState } from "react";
import COLORS from "../constants/colors";
import { useRef } from "react";


const AuthCodeInput = () => {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  const [fourth, setFourth] = useState();
  const [fifth, setFifth] = useState();
  const [sixth, setSixth] = useState();

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const fifthRef = useRef();
  const sixthRef = useRef();

  return (
    <div className="flex flex-row gap-x-4 justify-center mb-12">
      <input type="text" value={first} className="border-b-2 w-10 text-center text-[24px] outline-none" maxLength={1}
        onFocus={(e) => e.target.style.borderColor = "purple"}
        onBlur={(e) => e.target.style.borderColor = COLORS.gray}
        onChange={(e) => { console.log(e.target.value); setFirst(e.target.value); if(e.target.value) secondRef.current.focus(); }}
        ref={firstRef}
      />
      <input type="text" value={second} className="border-b-2 w-10 text-center text-[24px] outline-none" maxLength={1}
        onFocus={(e) => e.target.style.borderColor = "purple"}
        onBlur={(e) => e.target.style.borderColor = COLORS.gray}
        onChange={(e) => { console.log(e.target.value); setSecond(e.target.value); e.target.value? thirdRef.current.focus():firstRef.current.focus(); }}
        ref={secondRef}
      />
      <input type="text" value={third} className="border-b-2 w-10 text-center text-[24px] outline-none" maxLength={1}
        onFocus={(e) => e.target.style.borderColor = "purple"}
        onBlur={(e) => e.target.style.borderColor = COLORS.gray}
        onChange={(e) => { console.log(e.target.value); setThird(e.target.value); e.target.value? fourthRef.current.focus():secondRef.current.focus(); }}
        ref={thirdRef}
      />
      <input type="text" value={fourth} className="border-b-2 w-10 text-center text-[24px] outline-none" maxLength={1}
        onFocus={(e) => e.target.style.borderColor = "purple"}
        onBlur={(e) => e.target.style.borderColor = COLORS.gray}
        onChange={(e) => { console.log(e.target.value); setFourth(e.target.value); e.target.value? fifthRef.current.focus():thirdRef.current.focus(); }}
        ref={fourthRef}
      />
      <input type="text" value={fifth} className="border-b-2 w-10 text-center text-[24px] outline-none" maxLength={1}
        onFocus={(e) => e.target.style.borderColor = "purple"}
        onBlur={(e) => e.target.style.borderColor = COLORS.gray}
        onChange={(e) => { console.log(e.target.value); setFifth(e.target.value); e.target.value ? sixthRef.current.focus():fourthRef.current.focus(); }}
        ref={fifthRef}
      />
      <input type="text" value={sixth} className="border-b-2 w-10 text-center text-[24px] outline-none" maxLength={1}
        onFocus={(e) => e.target.style.borderColor = "purple"}
        onBlur={(e) => e.target.style.borderColor = COLORS.gray}
        onChange={(e) => { console.log(e.target.value); setSixth(e.target.value); if(!e.target.value) fifthRef.current.focus(); }}
        ref={sixthRef}
      />
    </div>
  )
}

export default AuthCodeInput;