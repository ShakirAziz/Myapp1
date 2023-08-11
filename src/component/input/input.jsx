import "./style.css";

const Input = (props) => {
  return (
    <div className="inputform">
      <label htmlFor="#">{props.htmlFor}</label>
      <input
        type={props.type}
        className={props.className}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        maxlength={props.maxlength}
        value={props.value}
        required={props.required}
      />
    </div>
  );
};

export default Input;
