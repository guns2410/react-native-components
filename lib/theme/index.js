/* @flow */
import merge from 'deepmerge';
import ColorManager from './colors';
import { Platform, PixelRatio, Dimensions } from 'react-native';

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const normalize = (size) => {
    if (pixelRatio === 2) {
        // iphone 5s and older Androids
        if (deviceWidth < 360) {
            return size * 0.95;
        }
        // iphone 5
        if (deviceHeight < 667) {
            return size;
            // iphone 6-6s
        } else if (deviceHeight >= 667 && deviceHeight <= 735) {
            return size * 1.15;
        }
        // older phablets
        return size * 1.25;
    }
    if (pixelRatio === 3) {
        // catch Android font scaling on small machines
        // where pixel ratio / font scale ratio => 3:3
        if (deviceWidth <= 360) {
            return size;
        }
        // Catch other weird android width sizings
        if (deviceHeight < 667) {
            return size * 1.15;
            // catch in-between size Androids and scale font up
            // a tad but not too much
        }
        if (deviceHeight >= 667 && deviceHeight <= 735) {
            return size * 1.2;
        }
        // catch larger devices
        // ie iphone 6s plus / 7 plus / mi note 等等
        return size * 1.27;
    }
    if (pixelRatio === 3.5) {
        // catch Android font scaling on small machines
        // where pixel ratio / font scale ratio => 3:3
        if (deviceWidth <= 360) {
            return size;
            // Catch other smaller android height sizings
        }
        if (deviceHeight < 667) {
            return size * 1.20;
            // catch in-between size Androids and scale font up
            // a tad but not too much
        }
        if(deviceHeight >= 667 && deviceHeight <= 735) {
            return size * 1.25;
        }
        // catch larger phablet devices
        return size * 1.40;
    }
    // if older device ie pixelRatio !== 2 || 3 || 3.5
    return size;
}

export const primary = ColorManager.get('Indigo');
export const primaryDark = ColorManager.get('Indigo', 700);
export const primaryDarker = ColorManager.get('Indigo', 900);
export const primaryLight = ColorManager.get('Indigo', 300);
export const primaryLighter = ColorManager.get('Indigo', 100);
export const info = ColorManager.get('Blue');
export const infoDark = ColorManager.get('Blue', 700);
export const infoDarker = ColorManager.get('Blue', 900);
export const infoLight = ColorManager.get('Blue', 300);
export const infoLighter = ColorManager.get('Blue', 100);
export const success = ColorManager.get('Green');
export const successDark = ColorManager.get('Green', 700);
export const successDarker = ColorManager.get('Green', 900);
export const successLight = ColorManager.get('Green', 300);
export const successLighter = ColorManager.get('Green', 100);
export const warning = ColorManager.get('Amber');
export const warningDark = ColorManager.get('Amber', 700);
export const warningDarker = ColorManager.get('Amber', 900);
export const warningLight = ColorManager.get('Amber', 300);
export const warningLighter = ColorManager.get('Amber', 100);
export const danger = ColorManager.get('Red');
export const dangerDark = ColorManager.get('Red', 700);
export const dangerDarker = ColorManager.get('Red', 900);
export const dangerLight = ColorManager.get('Red', 300);
export const dangerLighter = ColorManager.get('Red', 100);
export const inverse = '#3B4752';
export const inverseDark = '#313B44';
export const inverseDarker = '#232B31';
export const inverseLight = '#626C75';
export const inverseLighter = '#D8DADC';
export const base = ColorManager.get('Grey');
export const baseDark = ColorManager.get('Grey', '700');
export const baseLight = ColorManager.get('Grey', '400');
export const baseLighter = ColorManager.get('Grey', '300');
export const baseLightest = ColorManager.get('Grey', '200');
export const white = '#FFFFFF';
export const black = '#000000';

const defaultTheme = {
    name: 'default',
    primary,
    primaryDark,
    primaryDarker,
    primaryLight,
    primaryLighter,
    info,
    infoDark,
    infoDarker,
    infoLight,
    infoLighter,
    success,
    successDark,
    successDarker,
    successLight,
    successLighter,
    warning,
    warningDark,
    warningDarker,
    warningLight,
    warningLighter,
    danger,
    dangerDark,
    dangerDarker,
    dangerLight,
    dangerLighter,
    inverse,
    inverseDark,
    inverseDarker,
    inverseLight,
    inverseLighter,
    base,
    baseDark,
    baseLight,
    baseLighter,
    baseLightest,
    white,
    black,
    materialColors: (color, variant = '500') => ColorManager.get(color, variant),
    gutter: normalize(10),
    font: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
    fontSize: normalize(14),
    splash: {
        colors: [ '#67B26F', '#4ca2cd' ],
        textColor: baseLighter,
        spinnerColor: baseLightest,
        text: {
            fontSize: normalize(32),
            marginBottom: 20,
            color: white,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    text: {
        container: {
            fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
            fontSize: normalize(14),
            marginBottom: normalize(10),
            color: base,
            backgroundColor: 'transparent',
        }
    },
    footer: {
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            height: 55,
            left: 0,
            right: 0,
            bottom: 0,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 1.5,
        },
        backgroundColor: primary,
    },
    button: {
        default: {
            backgroundColor: 'transparent',
            padding: normalize(10),
            paddingHorizontal: normalize(10),
        },
        rounded: {
            borderRadius: 4,
        },
        raised: {
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 1.5,
            elevation: 4,
            borderRadius: 4,
        },
        bordered: {
            borderWidth: 1,
        },
        text: {
            fontSize: normalize(16),
            fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
            textAlign: 'center',
            marginBottom: 0,
        },
        badge: {
            flex: 1,
            position: 'absolute',
            top: -7,
            right: -7,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: danger,
            flexDirection: 'row',
        },
        badgeText: {
            color: white,
            marginBottom: 0,
            backgroundColor: 'transparent',
            fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
            paddingVertical: 2,
            paddingHorizontal: 4,
            textAlign: 'center',         //for android
            textAlignVertical: 'center', //for android
        },
        color: white,
        backgroundColor: primary,
        badgeBackgroundColor: danger,
    },
    icon: {
        raised: {
            margin: 7,
            shadowColor: baseLightest,
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
            elevation: 2,
            backgroundColor: primary,
        },
        default: {
            alignItems: 'center',
            backgroundColor: 'transparent',
            justifyContent: 'center',
        },
        icon: {
            backgroundColor: 'transparent',
        }
    },
    list: {
        container: {
            marginTop: normalize(20),
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: baseLighter,
        },
    },
    listItem: {
        container: {
            flex: 1,
            paddingTop: 10,
            paddingHorizontal: 10,
            backgroundColor: white,
            marginBottom: 0,
            flexDirection: 'row',
            alignItems: 'stretch',
        },
        wrapper: {
            flex: 1,
            paddingBottom: 10,
            flexDirection: 'row',
            alignItems: 'stretch',
            marginBottom: 0,
            borderBottomColor: baseLightest,
            borderBottomWidth: 1,
        },
        icon: {
            marginRight: 8,
        },
        title: {
            fontSize: normalize(14),
            color: ColorManager.get('Grey', 700),
            marginBottom: 0,
        },
        subtitle: {
            color: ColorManager.get('Grey', 500),
            fontSize: normalize(12),
            marginBottom: 0,
            marginTop: 1,
            ...Platform.select({
                ios: {
                    fontWeight: '600'
                },
                android: {
                    fontFamily: 'Roboto-Bold'
                }
            }),
        },
        titleContainer: {},
        rightIconContainer: {
            flex: 1,
            alignSelf: 'flex-end',
            alignItems: 'flex-end',
            justifyContent: 'center'
        },
        rightIcon: {
        },
    },
    avatar: {
        border: {
            borderColor: base,
            borderWidth: 0.1,
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginRight: normalize(10),
        },
        container: {
            marginRight: normalize(10),
            backgroundColor: 'transparent',
        }
    },
    grid: {
        flex: 1,
        flexDirection: 'row',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        input: {
            height: 35,
            flex: 1,
            paddingHorizontal: normalize(10),
            fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
            fontSize: normalize(14),
        },
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: normalize(10),
            borderWidth: 1,
            borderRadius: 7,
            marginBottom: normalize(10),
            borderColor: baseLighter,
            backgroundColor: white,
        },
    },
    profileHeader: {
        container: {
            paddingBottom: normalize(30),
        },
        backgroundImg: {
            resizeMode: 'cover',
            height: 150,
        },
        profileImg: {
            borderWidth: 2,
            borderColor: '#fff',
            borderRadius: 4,
            width: 100,
            height: 100,
            position: 'absolute',
            alignSelf: 'center',
            top: 75,
            left: (deviceWidth / 2) - 50,
        },
        shadow: {
            position: 'absolute',
            alignSelf: 'center',
            top: 75,
            left: (deviceWidth / 2) - 50,
            borderRadius: 4,
            width: 100,
            height: 100,
            shadowColor: '#D8D8D8',
            shadowRadius: 2,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.8,
        },
        title: {
            flex: 1,
            textAlign: 'center',
            fontSize: normalize(30),
            marginTop: normalize(35),
            marginBottom: normalize(10),
            fontWeight: '300',
        },
        summary: {
            paddingHorizontal: normalize(10),
        },
    },
    card: {
        container: {
            backgroundColor: white,
            borderColor: ColorManager.get('Grey', 400),
            borderWidth: 1,
            padding: normalize(15),
            margin: normalize(15),
            marginBottom: 0,
            ...Platform.select({
                ios: {
                    shadowColor: 'rgba(0,0,0, .2)',
                    shadowOffset: {height: 0, width: 0},
                    shadowOpacity: 1,
                    shadowRadius: 1
                },
                android: {
                    elevation: 1
                }
            })
        },
        imageTitle: {
            fontSize: normalize(14),
            marginBottom: 8,
            color: ColorManager.get('Grey', 700),
            ...Platform.select({
                ios: {
                    fontWeight: '500'
                },
                android: {
                    fontFamily: black
                }
            }),
            fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        },
        wrapper: {
            backgroundColor: 'transparent'
        },
        divider: {
            marginBottom: normalize(15)
        },
        cardTitle: {
            fontSize: normalize(14),
            ...Platform.select({
                ios: {
                    fontWeight: 'bold'
                },
                android: {
                    fontFamily: black
                }
            }),
            textAlign: 'center',
            marginBottom: normalize(15),
            color: ColorManager.get('Grey', 700),
            fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        }
    },
    divider: {
        height: 1,
        backgroundColor: ColorManager.get('Grey', 500),
    },
    heading: {
        marginLeft: normalize(10),
    },
    avatarHeader: {
        header: {
            padding: normalize(10),
            flexDirection: 'row',
            flexWrap: 'wrap',
            flex: 1,
            backgroundColor: primaryLight,
        },
        titleContainer: {
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
    },
    settingsList: {
        itemBox: {
            flex:1,
            justifyContent:'center',
            flexDirection:'row'
        },
        titleBox: {
            flex:1,
            marginLeft:normalize(15),
            flexDirection:'row'
        },
        titleText: {
            flex:1,
            alignSelf:'center'
        },
        rightSideStyle: {
            marginRight:normalize(15),
            alignSelf:'center'
        },
    }
};

const MergeTheme = (theme = {}) => merge(defaultTheme, theme, { clone: true });

export {
    MergeTheme,
    ColorManager,
};

export default defaultTheme;
