import styles from "./drop-down-button.module.css";

export const DropDownButton = () => {
  return (
    <div className={styles.dropDownButton__wrapper}>
      <label htmlFor="button" className="button-label">
        Локация
      </label>
      <button id="button" className={styles.DropDownButton}>
        <div className={styles.DropDownButton__container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.5 13C10.5376 13 13 10.5376 13 7.5C13 4.46243 10.5376 2 7.5 2C4.46243 2 2 4.46243 2 7.5C2 10.5376 4.46243 13 7.5 13Z"
              stroke="#080908"
              strokeWidth="2"
              strokeLinecap="square"
            />
            <path
              d="M12 12L14 14"
              stroke="#080908"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="body__accent">
            <b>ЖК, ОКРУГ, РАЙОН, МЕТРО</b>
          </span>
        </div>
      </button>
    </div>
  );
};
