import { React, Component } from 'react';
import { connect } from 'react-redux';


class LibraryList extends Component {
    
    render() {
        return;
    }
}

const mapStatetoProps = state => {
    console.log(state);
};

export default connect()(LibraryList);