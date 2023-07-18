import { useRouter } from 'next/router';

const NewsDetailsPage = () => {
    const router =useRouter()
    return (
        <div>
            <h1>News Detaisl of: {router.query.newsId}</h1>
        </div>
    );
};

export default NewsDetailsPage;