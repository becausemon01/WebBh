// Libraries
import React, {Component} from 'react';
import {connect} from 'react-redux';

// actions
import {layoutPath} from 'Layouts/actions';

class Products extends Component {
    componentDidMount() {
        this.props.layoutPath({
            path:'products'
        });
    }

    render() {
        return (
            <div style={{color:'black'}}>
                ##$#$
            </div>
        
        );
    }
}

const mapDispatchToProps = {
    layoutPath    
};

export default connect(null, mapDispatchToProps)(Products);