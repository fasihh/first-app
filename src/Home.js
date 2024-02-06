import PostList from './PostList';
import DotsLoader from './DotsLoader';
import useFetch from './useFetch';

const Home = () => {
    const { data, isLoading, failedLoading, error } = useFetch("http://localhost:3001/posts");

    return (
        <div className="home">
            { failedLoading && <p className="error-message">{ error }</p> }
            { isLoading && <DotsLoader /> }
            { data && <PostList posts={ data.posts } title={ `all (${data.posts.length}) posts >>` }/> }
        </div>
    );
}

export default Home;
