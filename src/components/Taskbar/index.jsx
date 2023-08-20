import './styles.css'

export function Taskbar(props) {
  return(
    <div className="taskbar">
      <strong>{props.name}</strong>
    </div>
  )
}