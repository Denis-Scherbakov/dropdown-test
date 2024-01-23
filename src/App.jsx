import "./normalize.css";
import styles from "./app.module.css";
import { DropDown } from "./components/drop-down/DropDown";

function App() {
  return (
    <div className={styles.App}>
      <DropDown />
    </div>
  );
}

export default App;
