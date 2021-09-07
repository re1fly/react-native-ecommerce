import {Platform, StyleSheet} from 'react-native';

export const stylesAccount = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        position: 'relative',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: 'black',
    },
    inputView: {
        width: '80%',
        backgroundColor: '#465881',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'white',
    },
    desc: {
        color: 'black',
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 200,
    },
    loginBtn: {
        width: '70%',
        backgroundColor: 'black',
        borderRadius: 25,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    registerBtn: {
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 25,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginText: {
        color: 'white',
    },
    registerText: {
        color: 'black',
    },
    bottomViewLogin: {
        backgroundColor: '#fff',
        width: '100%',
        height: 450,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    bottomViewRegister: {
        backgroundColor: '#fff',
        width: '100%',
        height: 600,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
});
export const stylesLoginRegister = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 20,
    },
    textInput: {
        width: '70%',
        marginVertical: 10,
        fontSize: 12,
        height: 45,
    },
    textForgot: {
        color: 'black',
        fontSize: 11,
        marginLeft: 180,
    },
    btn: {
        width: '60%',
        marginTop: 70,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export const stylesHome = StyleSheet.create({
    homeContainer: {
        flex: 1,
    },
    categoriesContainer: {
        height: 100,
    },
    categories: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 7,
        fontSize: 18,
    },
    categories2: {
        flex: 3,
    },
    thumbnail: {
        marginHorizontal: 8,
        borderColor: 'black',
        borderWidth: 0.8,
        overflow: 'hidden',
    },
    thumbnailText: {
        alignSelf: 'center',
        marginTop: 2,
        fontSize: 12,
    },
    textNewArrivals: {
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
});
export const stylesProducts = StyleSheet.create({
    ButtonDetail: {
        alignSelf: 'flex-end',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        marginTop: '-3%',
    },
    ImageCard: {
        width: '90%',
        height: 200,
        marginLeft: 20,
        borderRadius: 15,
        overflow: 'hidden',
    },
    CardCategory: {
        marginBottom: '-7%',
        backgroundColor: 'white',
    },
    CardTitle: {
        marginLeft: 10,
        marginRight: 10,
    },
});
export const stylesProfile = StyleSheet.create({
    container: {
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    header: {
        backgroundColor: '#E9ECF4',
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
    },
    headerContent: {
        padding: 20,
        alignItems: 'center',
    },
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 40,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        color: 'black',
        fontWeight: '900',
        textAlign: 'center',
    },
    userCityText: {
        color: '#8a8a8a',
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center',
    },
    userMemberText: {
        color: '#8c8118',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
        paddingVertical: 6,
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    body: {
        backgroundColor: '#E9ECF4',
        height: 900,
        // alignItems:'center',
    },
    placeIcon: {
        color: 'black',
        fontSize: 18,
    },
    titleList: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    descList: {
        fontSize: 10,
        color: '#B0B0B0',
    },

});
export const stylesCart = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
    },
    body: {
        backgroundColor: 'white',
        // borderTopRightRadius: 45,
        // borderTopLeftRadius: 45,
    },
    bodyContent: {
        padding: 14,
    },
    iconTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    textTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: 20,
    },
    myCart: {
        backgroundColor: 'transparent',
        height: 'auto',
        marginTop: 20,
        flexDirection: 'row',
    },
    containerImageCart: {
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 1,
        alignSelf: 'center',
    },
    imageCart: {
        height: 120,
        width: 120,
        borderRadius: 20,
    },
});
export const stylesListProducts = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: '#FFFFFF',
    },
    listContainer: {
        alignItems: 'center',
    },
    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginVertical: 5,
        backgroundColor: '#f1f1f1',
        flexBasis: '46%',
        marginHorizontal: 5,
        borderRadius: 20,
    },
    cardFooter: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    userImage: {
        height: 140,
        width: 140,
        borderRadius: 80,
        alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 10,
    },
    name: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: 'black',
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    category: {
        fontSize: 12,
        flex: 1,
        alignSelf: 'center',
        color: '#696969',
    },
    price: {
        fontSize: 15,
        fontWeight: '800',
        flex: 1,
        alignSelf: 'center',
        color: 'black',
        marginTop: 10,
    },
    cartButton: {
        marginTop: 5,
        height: 23,
        width: 85,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        backgroundColor: '#000000',
    },
    cartButtonText: {
        color: '#FFFFFF',
        fontSize: 12,
    },
    icon: {
        height: 20,
        width: 20,
    },
});
