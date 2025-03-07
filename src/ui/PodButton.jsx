
  
  const PodButton = ({ title, category, isActive, onClick }) => {
    return (
      <button
        onClick={() => onClick(category)}
        className={`relative text-[12px] md:text-[22px] font-[600] ${
          isActive ? "text-blue-500" : "text-white"
        }`}
      >
        {title}
        {isActive && (
          <span className="absolute bottom-[-2px] left-0 right-0 mx-auto w-[100%] h-[2px] bg-blue-500"></span>
        )}
      </button>
    );
  };
  
  export default PodButton;
  