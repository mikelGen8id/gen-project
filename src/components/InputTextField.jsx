import COLORS from "../constants/colors";
import Button from "./Button";

const InputTextField = ({ label, value, onChange, placeholder }) => {
  return (
    <div>
      <label className="block text-gray-700 text-[20px] font-bold mb-1">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 w-full rounded-[8px] py-[12px] px-[16px] leading-tight focus:outline-none text-[20px] mb-2"
        style={{ borderColor: COLORS.gray, transition: 'border-color 0.3s' }}
        onFocus={(e) => e.target.style.borderColor = "purple"}
        onBlur={(e) => e.target.style.borderColor = COLORS.gray}
      />
    </div>
  );
};

export default InputTextField;