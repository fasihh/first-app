import { useState } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([
        {
            id: "65b91a4b2115307f34d4c6ca",
            creator: "fhk.tcs@gmail.com",
            title: "test post 1 header",
            likes: 0,
            timestamps: {
                createdAt: "2024-01-30T15:48:27.368Z",
                updatedAt: "2024-01-30T15:48:27.368Z"
            }
        },
        {
            id: "65bf2b94c30b7520784552b4",
            creator: "fhk.tcs@gmail.com",
            title: "Joewari da",
            likes: 0,
            timestamps: {
                createdAt: "2024-02-04T06:15:48.632Z",
                updatedAt: "2024-02-04T06:15:48.632Z"
            }
        },
        {
            id: "65bf2b83c30b7520784552b2",
            creator: "fhk.tcs@gmail.com",
            title: "Hello World!",
            likes: 0,
            timestamps: {
                createdAt: "2024-02-04T06:15:31.040Z",
                updatedAt: "2024-02-04T06:15:31.040Z"
            }
        }
    ]);

    return (
        <div className="home">
            {posts.map(post => {
                const date = new Date(post.timestamps.createdAt);
                console.log(date);
                return (<div className="post-preview" key={post.id}>
                    <div className="post-content">
                        <h2>{ post.title }</h2>
                        <p>by { post.creator }</p>
                    </div>
                    <p className="timestamp">{ `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}` }</p>
                </div>);
            })}
        </div>
    );
}

export default Home;