import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { INews } from "../../interfaces";

interface Props {
  item: INews;
}

const NewsItem = ({ item }: Props) => {
  return (
    <li className={styles.banner}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;