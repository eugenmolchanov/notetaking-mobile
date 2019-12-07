import { SearchBar } from 'react-native-elements';
import React from 'react';
import { StyleSheet } from 'react-native';
import * as PropTypes from 'prop-types';

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

const styles = StyleSheet.create({
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

export default HeaderSearchBar;
