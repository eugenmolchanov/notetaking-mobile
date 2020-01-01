import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';

class HeaderSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        };
    }

    _onType = (searchValue) => {
        this.setState({
            searchValue,
        }, this.props.onValueChange(searchValue));
    };

    render() {
        return (
            <SearchBar
                placeholder={'Поиск...'}
                containerStyle={[
                    styles.whiteBackground,
                    styles.searchBarContainer,
                ]}
                inputContainerStyle={styles.whiteBackground}
                inputStyle={styles.whiteBackground}
                onChangeText={this._onType}
                value={this.state.searchValue}
                platform={'android'} />
        );
    }
}

const HeaderTitle = ({ onSearchValueChange }) => {
    return (
        <View style={styles.searchWrapper}>
            <HeaderSearchBar onValueChange={onSearchValueChange}/>
        </View>
    );
};

const styles = StyleSheet.create({
    searchWrapper: {
        flex: 1,
    },
    whiteBackground: {
        backgroundColor: 'white',
    },
    searchBarContainer: {
        flex: 1,
        borderBottomColor: 'white',
        borderTopColor: 'white',
    },
});

HeaderSearchBar.propTypes = {
    onValueChange: PropTypes.func.isRequired,
};

HeaderTitle.propTypes = {
    onSearchValueChange: PropTypes.func.isRequired,
};

export default HeaderTitle;
