import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user;
    return (
        <div>
            <h1>Details about user: {name}</h1>
            <h4>Website: {website}</h4>
        </div>
    );
};

export default UserDetails;