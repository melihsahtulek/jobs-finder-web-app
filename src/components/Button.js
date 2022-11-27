import Icon from "components/Icon";

const Button = ({ type, value, bg, icon }) => {
  return (
    <div className={`${bg} w-full h-full flex`}>
      {icon?.name && (
        <div className={"min-w-[50px] h-[50px] flex items-center justify-center"}>
          <Icon size={26} icon={icon.name || ""} color={icon.iconColor} />
        </div>
      )}
      <button type={type} className="w-full h-full text-white px-3 font-medium">
        {value}
      </button>
    </div>
  );
};

export default Button;
