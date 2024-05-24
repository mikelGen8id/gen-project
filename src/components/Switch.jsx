const Switch = ({ isOn, handleToggle }) => {
  return (
    <div className="flex items-center justify-center">
      <span className="relative">
        <span className={`block w-10 h-6 bg-gray-300 rounded-full shadow-inner ${isOn ? 'bg-green-400' : ''}`}></span>
        <span className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transform transition-transform duration-300 ease-in-out
        ${isOn ? 'translate-x-full bg-white' : 'translate-x-0 bg-white'}`}
            onClick={handleToggle}>
          <input
            placeholder="asdf"
            type="checkbox"
            className="absolute opacity-0 w-0 h-0"
            checked={isOn}
            onChange={handleToggle}
          />
        </span>
      </span>
    </div>
  );
};

export default Switch;