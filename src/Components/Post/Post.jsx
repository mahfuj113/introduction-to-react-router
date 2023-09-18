import PropTypes from "prop-types"
import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const navigate = useNavigate()
    const {id,title} = post;
    const handlePost = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div>
            <h2>Post of {id}</h2>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}><button>Show Post</button></Link>
            <button onClick={handlePost}>Click to show Details</button>

        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object.isRequired,
}
export default Post;