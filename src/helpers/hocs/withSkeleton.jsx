import React from "react";

import Skeleton from "../../components/Skeleton/Skeleton";

function withSkeleton(Component, type, count) {
  return function withSkeleton(props) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton count={count} type={type} />;
    }

    return <Component {...restProps} />;
  };
}

export default withSkeleton;
