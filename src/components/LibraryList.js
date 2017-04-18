import { React, Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
    
    componentWillMount () {
        
    }

    render() {
        console.log(this.props);
        return (
            <View></View>
        );
    }
}

const mapStatetoProps = state => {
    console.log(state);
    return { libraries: state.libraries };
};

export default connect(mapStatetoProps)(LibraryList);