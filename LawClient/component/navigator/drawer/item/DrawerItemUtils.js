const navigateToScreen = (route, navigation, props) => () => {
    navigation.navigate(route, props);
    navigation.closeDrawer();
};

export { navigateToScreen };
