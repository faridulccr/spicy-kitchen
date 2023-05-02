import "./TextInput.style.scss";

const TextInput = ({ type, placeholder, iconName, ...rest }) => {
    return (
        <div className="textInput">
            <input type={type} placeholder={placeholder} {...rest} />
            <span className="material-icons-outlined"> {iconName} </span>
        </div>
    );
};

export default TextInput;
