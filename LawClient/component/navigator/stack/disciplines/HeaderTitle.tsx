import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

interface HeaderProps {
    onSearchValueChange: (searchValue: string) => undefined
}

interface HeaderSearchBarState {
    searchValue: string
}

class HeaderSearchBar extends React.Component<HeaderProps, HeaderSearchBarState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            searchValue: '',
        };
    }

    _onType = (searchValue: string) => {
        this.setState({
            searchValue,
        }, this.props.onSearchValueChange(searchValue));
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

const HeaderTitle = ({ onSearchValueChange }: HeaderProps) => {
    return (
        <View style={styles.searchWrapper}>
            <HeaderSearchBar onSearchValueChange={onSearchValueChange}/>
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

export default HeaderTitle;
