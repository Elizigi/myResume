import { contactsModelArray } from "../../model/contactModel";
import styles from "./FooterButtons.module.scss";

const FooterButtons = () => {
  return (
    <div className={styles.footerButtons}>
      {contactsModelArray.map((contact) => (
        <a
          href={contact.link}
          key={contact.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <img src={contact.image} alt={contact.name} />
          </button>
        </a>
      ))}
    </div>
  );
};

export default FooterButtons;
