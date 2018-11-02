import React from 'react';
import PropTypes from 'prop-types';

class BasicLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>已登录用户</h1>
                {this.props.children}
            </div>
            
        );
    }
}

BasicLayout.propTypes = {};

export default BasicLayout;
