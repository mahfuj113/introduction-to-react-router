import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>There are posts: {posts.length}</h2>
            <div className="users">
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                    // posts.map(post => <div key={post.id} style={{border: '2px solid goldenrod'}}>{post.title} <br/> <Link to={`/post/${post.id}`}><button>Show</button></Link></div>)
                }
            </div>
        </div>
    );
};

export default Posts;