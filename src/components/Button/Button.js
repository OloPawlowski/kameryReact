import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.click}>
      id_kamery: {props.name}
    </button>
  );
};
export default Button;
