import "../styles.css";
import Keypad from "./Keypad";

export default function App() {
  return (
    <div className="calculator">
      <div className="calculator-body">
        <Keypad />
      </div>
    </div>
  );
}
