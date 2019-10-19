import { SearchBar } from "react-native-elements";
import React from "react";
import { StyleSheet } from "react-native";

class HeaderSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    styles = StyleSheet.create({
        whiteBackground: {
            backgroundColor: 'white'
        }
    });

    _onType = (searchValue) => {
        this.setState({
            searchValue
        }, this.props.onValueChange(searchValue))
    };

    render() {
        return (
            <SearchBar
                placeholder={'Поиск...'}
                containerStyle={[
                    styles.whiteBackground,
                    { flex: 1, borderBottomColor: 'white', borderTopColor: 'white' }
                ]}
                inputContainerStyle={styles.whiteBackground}
                inputStyle={styles.whiteBackground}
                onChangeText={this._onType}
                value={this.state.searchValue}
                platform={'android'}>
            </SearchBar>
        )
    }
}

export default HeaderSearchBar;