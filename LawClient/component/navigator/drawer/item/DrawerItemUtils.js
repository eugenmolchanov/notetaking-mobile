const navigateToScreen = (route, navigation, props) => () => {
    navigation.closeDrawer();
    navigation.navigate(route, props);
};

export { navigateToScreen };
