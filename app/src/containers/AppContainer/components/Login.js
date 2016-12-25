import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Login = ({ appId, fbLogin }) => {
    return (
        <div>
            <FacebookLogin
                appId={appId}
                fields="name,email,picture"
                callback={fbLogin}
                icon="fa-facebook"
                scope="public_profile, user_managed_groups, publish_pages, publish_actions"
            />
        </div>
    )
    
}

export default Login;