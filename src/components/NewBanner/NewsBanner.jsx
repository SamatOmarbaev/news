import React from "react";

import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../ImageComponent/Image";
import withSkeleton from "../../helpers/hocs/withSkeleton";

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item.image} />
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

export default NewsBannerWithSkeleton;
