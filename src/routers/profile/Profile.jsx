import React from "react";
import { useAuth } from "../../providers/AuthProvider";

const Profile = () => {
    const { currentUser } = useAuth();
    return <div>Profile</div>;
};

export default Profile;
