import styles from "./drop-down-tags.module.css";

export const DropDownTags = () => {
  return (
    <div>
      <div className={styles.tag__wrapper}>
        <div className={styles.tag__name}>басманный</div>
        <div className={styles.tag__delete}>
          <label htmlFor="34" className={styles.delete__icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                d="M3.91235 4L11.9128 12.0004M12.0843 4L4.08392 12.0004"
                stroke="#07000F"
                stroke-opacity="0.4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
          <button className="hidden" id="34"></button>
        </div>
      </div>
    </div>
  );
};
