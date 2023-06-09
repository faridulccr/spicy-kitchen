import "./Button.style.scss";

const Button = ({className, children, ...rest}) => {
  return (
    <button className={`button ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
