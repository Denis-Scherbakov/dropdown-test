import { DropDownSectionsContent } from "../drop-down-sections-content/DropDownSectionsContent";
import { DropDownSections } from "../drop-down-sections/DropDownSections";
import { DropDownTags } from "../drop-down-tags/DropDownTags";
import styles from "./drop-down-menu.module.css";

export const DropDownMenu = () => {
  return (
    <div className={styles.form__wrapper}>
      <DropDownSections />
      <DropDownTags />
      <DropDownSectionsContent />
    </div>
  );
};
