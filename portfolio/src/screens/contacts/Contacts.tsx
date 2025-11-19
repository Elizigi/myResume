import CustomButton from "../../components/customButton/CustomButton";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.contactsScreen}>
      <div className={styles.titleRow}>
        <h2 className={styles.spacer}>______ </h2>
        <h2>Contacts</h2>
      </div>
      <div className={styles.contactColumn}>
        <div className={styles.contactsContent}>
          <h3>Get in Contact:</h3>
        </div>

        <div></div>
        <CustomButton full written="Send" />
      </div>
    </div>
  );
};

export default Contacts;
