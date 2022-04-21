import Classes from "../assets/styles/Form.module.css";

const Form = ({ action, className, children, ...rest }) => {
  return (
    <form action={action} className={`${className} ${Classes.form}`} {...rest}>
      {children}
    </form>
  );
};

export default Form;
