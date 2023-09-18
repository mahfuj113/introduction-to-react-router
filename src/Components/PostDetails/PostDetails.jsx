import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate()
    const {postId} = useParams();
    const {userId,body} = post;
    console.log(postId);
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>User Id: {userId}</h2>
            <h2>This is post body {body}</h2>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;