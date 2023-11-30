import "./Input.scss";

const Input = ({ labelText = "", icon, Component }) => {
  return (
    <div className="input-wrapper">
      <Component />
      {labelText !== "" && <p>{labelText}</p>}
      <div className="icon-wrapper">
        <input />
        {icon && <img src={icon} />}
      </div>
    </div>
  );
};

export default Input;
