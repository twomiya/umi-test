import React from 'react';
import PropTypes from 'prop-types';

class UserLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>赛多分数学登录</h1>
                 {this.props.children}
            </div>
           
        );
    }
}

UserLayout.propTypes = {};

export default UserLayout;
