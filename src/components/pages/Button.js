import Classes from "../assets/styles/Button.module.css";

const Button = ({className, children, ...rest}) => {
  return (
    <button className={`${Classes.button} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
