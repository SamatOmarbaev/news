import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import NewsBanner from "../../components/NewBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";

const Main = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                setNews(response.news);
            } catch (e) {
                console.log(e);
            }
        }

        fetchNews();
    }, []);

    return (
        <main className={styles.main}>
            {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
            <NewsList news={news} />
        </main>
    );
}
 
export default Main;