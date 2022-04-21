import Classes from "../assets/styles/TextInput.module.css";

const TextInput = ({type, placeholder, iconName, ...rest}) => {
  return (
    <div className={Classes.textInput}>
      <input type={type} placeholder={placeholder} {...rest} />
      <span className="material-icons-outlined"> {iconName} </span>
    </div>
  );
};

export default TextInput;
