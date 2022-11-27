import Icon from "components/Icon";

const Input = ({ type, placeHolder, icon, bg }) => {
  return (
    <div className="flex min-w-[50px] h-full items-center">
      {icon?.name && (
        <div className={`${bg} min-w-[50px] h-[50px] flex items-center justify-center`}>
          <Icon size={icon.size} icon={icon.name || ""} color={icon.iconColor} />
        </div>
      )}
      <input
        type={type}
        placeholder={placeHolder}
        className="w-full h-full text-slate-800 capitalize p-2 font-medium focus:outline-none placeholder:text-gray-400 placeholder:capitalize placeholder:font-normal"
      />
    </div>
  );
};

Input.defaultProps = {
  bg: "bg-white",
};

export default Input;
