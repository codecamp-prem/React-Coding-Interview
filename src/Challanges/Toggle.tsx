import "./common.css";
import useToggle from "./hooks/useToggle";

function ToggleUI({ on, toggle }: { on: boolean; toggle: any }) {
  return (
    <div>
      <label className="toggle">
        <input
          className="toggle-checkbox"
          type="checkbox"
          onChange={toggle}
          checked={on}
        />
        <div className="toggle-switch"></div>
        <span className="toggle-label">{on ? "On" : "Off"}</span>
      </label>
    </div>
  );
}
const Toggle = () => {
  const [on, toggle] = useToggle(true);

  return (
    <div className="container">
      <section style={{ textAlign: "center" }}>
        <h2>useToggle hook</h2>
        <button className="link" disabled={on} onClick={() => toggle(true)}>
          Turn On
        </button>
        <button className="link" disabled={!on} onClick={() => toggle(false)}>
          Turn Off
        </button>
        <button className="link" onClick={() => toggle(!on)}>
          Toggle
        </button>
        <button className="link" onClick={() => toggle("nope")}>
          (Also toggles)
        </button>
        <ToggleUI on={on} toggle={toggle} />
      </section>
    </div>
  );
};

export default Toggle;
