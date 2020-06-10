// Libraries
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout} from 'antd';
import _ from 'lodash';

// Components
import DefaultMain from 'Src/modules/Layouts/containers/DefaultMain';
import Login from 'Src/modules/Login';
import DefaultHeader from 'Layouts/containers/DefaultHeader';

// Actions
import {userLogin} from 'Layouts/actions';

class Layouts extends Component {
    componentDidMount() {
        this.getDataUser();
    }

    getDataUser = async () => {
        // this.props.userLogin({
        //     name: 'hello',
        //     email: 'nltro@gmail'
        // });
        // {_.isEmpty(user) ? <Login /> : <DefaultMain />}
    }

    render() {
        const {user = {}} = this.props;

        return (
            <Layout className='layout'>
                <DefaultHeader />
                <DefaultMain />
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.Layouts.layoutReducer.userLogin
    };
};

const mapDispatchToProps = {
    userLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Layouts);
