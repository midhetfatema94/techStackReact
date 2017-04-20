import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    
    componentWillMount () {

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.myDataSource = ds.cloneWithRows(this.props.libraries);
    }
    
    renderEachRow(library) {

        console.log('library item', library);

        return <ListItem library={library}/>;
    }

    render() {
        console.log(this.props.libraries);
        return (
            <ListView 
                dataSource={this.myDataSource}
                renderRow={this.renderEachRow}
            />
        );
    }
}

const mapStatetoProps = state => {
    // console.log(state);
    return { libraries: state.libraries };
};

export default connect(mapStatetoProps)(LibraryList);