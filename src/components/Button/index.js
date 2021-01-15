import {formatStyle} from "../../utils";
import styles from "./index.less";

export default function Button(data) {
  const {style} = data;

  return (
    <button className={styles.main} style={formatStyle(style, false)}>
      {data.value}
    </button>
  );
}