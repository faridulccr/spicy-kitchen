import "./Form.style.scss";

const Form = ({ action, className, children, ...rest }) => {
  return (
    <form action={action} className={`${className} form`} {...rest}>
      {children}
    </form>
  );
};

export default Form;
