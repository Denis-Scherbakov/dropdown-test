import styles from "./drop-down-sections-content.module.css";

export const DropDownSectionsContent = () => {
  return (
    <form className={styles.form__main}>
      <fieldset className={styles.form__body}>
        <div className={styles.form__body__wrapper}>
          <label className={styles.form__body__label} htmlFor="54">
            Kraken
          </label>
          <input type="checkbox" id="54" name="666" value="K" />
        </div>
        <div className={styles.form__body__wrapper}>
          <label className={styles.form__body__label} htmlFor="55">
            Sasquatch
          </label>
          <input type="checkbox" id="55" name="666" value="S" />
        </div>
        <div className={styles.form__body__wrapper}>
          <label className={styles.form__body__label} htmlFor="57">
            Mothman
          </label>
          <input type="checkbox" id="57" name="666" value="M" />
        </div>
      </fieldset>
    </form>
  );
};
