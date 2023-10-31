import "./styles.css"

export function Taskbar(props) {
  return (
    <div className="taskbar">
      <strong>{props.name}</strong>
      <button className="closeButton" onClick={props.onClick}>
        <strong>x</strong>
      </button>
    </div>
  )
}
