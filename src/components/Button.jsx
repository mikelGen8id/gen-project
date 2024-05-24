const Button = ({ label, onChange, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={` hover:bg-${color}-700 w-[160px] text-white font-bold py-[16px] px-[16px] rounded-full focus:outline-none focus:shadow-outline text-[20px]`}
      onClick={onChange}
    >

      {label}
    </button>
  )
}

export default Button;