const navigateToScreen = (route, navigation) => () => {
    navigation.closeDrawer();
    navigation.navigate(route);
};

export { navigateToScreen };
