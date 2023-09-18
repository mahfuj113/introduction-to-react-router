import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {id,name,phone} = user;
    const userStyle = {
        border: "2px solid blue",
        margin: "10px"
    }
    return (
        <div style={userStyle}>
            <h1>Name: {name}</h1>
            <h3>Phone: {phone}</h3>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object.isRequired,
}
export default User;