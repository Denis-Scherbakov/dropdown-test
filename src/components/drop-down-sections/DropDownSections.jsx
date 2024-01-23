import styles from "./drop-down-sections.module.css";

export const DropDownSections = () => {
  return (
    <form>
      <fieldset className={styles.form__head}>
        <input
          className="hidden"
          type="radio"
          id="jk1"
          name="services"
          value="JK"
          defaultChecked
        />
        <label className={styles.form__tabitem} htmlFor="jk1">
          ЖК
        </label>
        <input
          className="hidden"
          type="radio"
          id="okrug1"
          name="services"
          value="okrug"
        />
        <label className={styles.form__tabitem} htmlFor="okrug1">
          ОКРУГ
        </label>
        <input
          className="hidden"
          type="radio"
          id="rayon1"
          name="services"
          value="rayon"
        />
        <label className={styles.form__tabitem} htmlFor="rayon1">
          РАЙОН
        </label>
        <input
          className="hidden"
          type="radio"
          id="metro1"
          name="services"
          value="metro"
        />
        <label className={styles.form__tabitem} htmlFor="metro1">
          МЕТРО
        </label>
      </fieldset>
    </form>
  );
};
