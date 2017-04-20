import React, { Component } from 'react';
import { CardSection } from './common';
import { Text } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {

    render() {
        const { titleStyle } = styles;
        console.log(this.props);
        return (
            <CardSection>
                <Text style={titleStyle}>
                    {this.props.library.title}
                </Text>
            </CardSection>
        );
    }
}

const styles = {

    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,

    }
};

export default connect(null, actions)(ListItem);