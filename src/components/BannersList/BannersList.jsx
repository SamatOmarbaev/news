import React from "react";

import styles from "./styles.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../NewBanner/NewsBanner";

const BannersList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 12, "row");

export default BannersListWithSkeleton;
