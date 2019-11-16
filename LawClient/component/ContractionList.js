import React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import Menu from './Menu';

class ContractionList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { contractions } = this.props.navigation.getParam('question', []);
        return (
            <View>
                <Header
                    rightComponent={<Menu navigation={this.props.navigation}/>}
                    centerComponent={{ text: 'Сокращения', style: {fontSize: 20} }}
                    containerStyle={{
                        paddingTop: 0,
                        height: 60,
                    }}
                backgroundColor={'inherit'}/>
                <Text>{contractions.length}</Text>
            </View>
        );
    }
}

export default ContractionList;
