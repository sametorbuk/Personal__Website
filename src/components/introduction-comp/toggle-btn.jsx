import { useState } from "react";

const ToggleButton = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div 
      className={`relative flex items-center justify-center w-16 h-6 rounded-full cursor-pointer ${toggled ? 'bg-indigo-800' : 'bg-gray-300'}`}
      onClick={handleToggle}
    >
      <div 
        className={`absolute w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${toggled ? 'translate-x-[16px]' : 'translate-x-[-14px]'}`}
      />
    </div>
  );
};

export default ToggleButton;
