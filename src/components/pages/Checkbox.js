const Checkbox = ({ className, text, correctOrWrong, ...rest }) => {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span style={{ marginLeft: "10px" }}>{text}</span>
      <span style={{ flex: "write" }}>
        {correctOrWrong ? correctOrWrong : null}
      </span>
    </label>
  );
};

export default Checkbox;
