import React from "react";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import NewsBannerWithSkeleton from "../../components/NewBanner/NewsBanner";
import NewsListWithSkeleton from "../../components/NewsList/NewsList";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePage = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
      <NewsBannerWithSkeleton
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />
      <Pagination
        totalPages={TOTAL_PAGES}
        clickNextPage={handleNextPage}
        clickPrevPage={handlePrevPage}
        clickPage={handlePage}
        currentPage={filters.page_number}
      />
      <NewsListWithSkeleton isLoading={isLoading} news={data?.news} />
      <Pagination
        totalPages={TOTAL_PAGES}
        clickNextPage={handleNextPage}
        clickPrevPage={handlePrevPage}
        clickPage={handlePage}
        currentPage={filters.page_number}
      />
    </main>
  );
};

export default Main;
