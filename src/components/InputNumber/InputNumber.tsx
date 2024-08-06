import "../../App.css";
import styles from "./InputNumber.module.css";
import dollar from "./assests/dollar.svg";
import person from "./assests/person.svg";

export interface InputNumberProps {
  /**
   * Label for the number input field
   */
  label: string;
  /**
   * Id  for the number input field
   */
  inputId: string;
  /**
   * Icon
   */
  icon: "dollar" | "person";
  /**
   * Number fed to the input field
   */
  numberInput: number;
  /**
   * Error to display when number is negative
   */

  error?: string;
  /**
   * Function to handle changes to the input value
   */
  onNumberInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumber: React.FC<InputNumberProps> = ({
  label,
  icon,
  numberInput,
  inputId,
  onNumberInputChange,
  error,
}) => { 
  const iconSrc = icon === "dollar" ? dollar : person;
  const inputContStyle = error
    ? styles.inputContainer + " " + styles.errorOutline
    : styles.inputContainer;

return (
  <div className={styles.container}>
    <label className={styles.label} htmlFor={inputId}>
      {label}
    </label>
    <div className={inputContStyle}>
      <img className={styles.img} src={iconSrc} alt="icon" />
      <input
        type="number"
        id={inputId}
        value={numberInput}
        onInput={onNumberInputChange}
        className={styles.numberInput}
        placeholder="0.00"
      />
    </div>
    {error && <div className={styles.errorMsg}>{error}</div>}
  </div>
);
};

export default InputNumber;