import styles from "./CardWrappers.module.css";
import PropTypes from "prop-types";

export default function CardWrapper({ children }) {
  return <div className={styles.cardWrapper}>{children}</div>;
}

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
