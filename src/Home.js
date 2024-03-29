import PostList from './PostList';
import DotsLoader from './DotsLoader';
import useFetch from './useFetch';

const Home = () => {
    const { data, isLoading, failedLoading, error } = useFetch(`${process.env.REACT_APP_API_URL}/posts`);

    return (
        <div className="home">
            { failedLoading && <p className="error-message">{ error }</p> }
            { isLoading && <DotsLoader /> }
            { data && <PostList posts={ data.posts } title={ data.posts.length === 0 ? "no posts yet..." : `all (${data.posts.length}) posts >>` }/> }
        </div>
    );
}

export default Home;
