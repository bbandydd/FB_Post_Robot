import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Login = ({ appId }) => (
    <div>
        <FacebookLogin
            appId={appId}
            fields="name,email,picture"
            callback={() => {}}
            icon="fa-facebook"
            scope="public_profile, user_managed_groups, manage_pages, publish_pages, publish_actions"
        />
    </div>
)

export default Login;