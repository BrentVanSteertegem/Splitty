const Colors = {
    green: '#2b2',
    white: '#fff',
    black: '#000',
    lightGray: '#eee',
    gray: '#999',
    darkGray: '#777',
    red: '#e22',
    yellow: '#f90',
}
  
const Fonts = {
    title: 'Quicksand-Regular',
    text: 'Poppins-regular',
}
  
const Sizes = {
    xxxsmall: 4,
    xxsmall: 8,
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    xlarge: 24,
    xxlarge: 32,
    title: 64
}
  
const TextSizes = {
    small: Sizes.small,
    medium: Sizes.medium,
    large: Sizes.large,
    header: Sizes.xxlarge,
}
  
const Spacing = {
    xxsmall: Sizes.xxxsmall,
    xsmall: Sizes.xxsmall,
    small: Sizes.xsmall,
    medium: Sizes.medium,
    large: Sizes.xlarge,
    xlarge: Sizes.xxlarge,
}
  
const Rounded = {
    small: Sizes.xsmall,
    medium: Sizes.medium,
}
  
export const Variables = {
    colors: { 
        ...Colors,
        primary: Colors.green,
        secondary: Colors.yellow,
        backgroundColor: Colors.lightGray,
        text: Colors.black,
        headerText: Colors.white,
        placeholderColor: Colors.darkGray,
        buttonText: Colors.white,
        error: Colors.red,
        errorText: Colors.white,
    },
    fonts: { ...Fonts },
    sizes: { 
        ...Sizes,
        icon: Sizes.medium,
        smallIcon: Sizes.small,
        headerIcon: Sizes.xlarge,
    },
    textSizes: { ...TextSizes },
    spacing: { ...Spacing },
    rounded: { ...Rounded },
}
  
export const DefaultStyles = {
    contentStart: {
        marginTop: Sizes.medium,
    },
    container: {
        paddingHorizontal: Spacing.medium,
    },
    centered: {
        alignItems: 'center',
    },
    centeredView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    text: {
        fontFamily: Fonts.text,
        color: Variables.colors.text,
        fontSize: TextSizes.medium,
        lineHeight: TextSizes.medium,
    },
    title: {
        fontFamily: Fonts.title,
        fontSize: TextSizes.header,
        color: Variables.colors.headerText,
        lineHeight: TextSizes.header,
    },
    error: {
        padding: Sizes.xsmall,
        textAlign: 'center',
        color: Variables.colors.errorText,
        backgroundColor: Variables.colors.error,
        borderRadius: Rounded.medium,
    },
    button: {
        backgroundColor: Variables.colors.primary,
        color: Variables.colors.buttonText,
        padding: Spacing.medium,
        borderRadius: Rounded.medium,
    },
    buttonText: {
        textAlign: 'center',
    }
}
  
export const DefaultNavigatorOptions = {
    tabBarHideOnKeyboard: true,
    headerTitleStyle: {
        fontFamily: Fonts.title,
        fontSize: Variables.textSizes.header,
        lineHeight: Variables.textSizes.header,
    },
    headerStyle: {
        // height: Variables.textSizes.header
    },
    tabBarIconStyle: {
        height: Sizes.xlarge,
    },
    tabBarShowLabel: false,
    tabBarStyle: {
        height: Variables.sizes.headerIcon + 2 * Variables.spacing.medium,
        backgroundColor: Variables.colors.white,
        borderTopColor: Variables.colors.primary,
    },
    tabBarActiveTintColor: Variables.colors.primary,
    tabBarInactiveTintColor: Variables.colors.gray,
}
