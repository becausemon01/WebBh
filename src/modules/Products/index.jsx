import React from 'react';
import {connect} from 'react-redux';

// actions
import {layoutPath} from 'Layouts/actions';

class Products extends React.Component {
    componentDidMount() {
        this.props.layoutPath({
            path:'products'
        });
    }

    render() {
        return (
            <div style={{color:'black'}}>
                Chưa update
            </div>
        
        );
    }
}

const mapDispatchToProps = {
    layoutPath    
};

export default connect(null, mapDispatchToProps)(Products);