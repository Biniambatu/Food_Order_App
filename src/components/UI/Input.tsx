import classes from './Input.module.css'
const Input = (props:any) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.inputs.id}>{props.label}</label>
        <input {...props.inputs} />
    </div>
  )
}

export default Input