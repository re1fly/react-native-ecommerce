import {Platform, StyleSheet} from 'react-native';

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
        backgroundColor: '#efefef',
    },
    CardTitle: {
        marginLeft: 10,
        marginRight: 10,
    },
});
export const stylesProfile = StyleSheet.create({
    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 45,
    },
    headerContainer: {
        position: 'absolute',
        flex: 3,
        width: '100%',
        borderRadius: 40,
    },
    headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                alignItems: 'center',
                elevation: 1,
                marginTop: -1,
            },
            android: {
                alignItems: 'center',
            },
        }),
    },
    placeIcon: {
        color: 'white',
        fontSize: 26,
    },
    scroll: {
        backgroundColor: '#FFF',
    },
    telContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: '#A5A5A5',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
    userMemberText: {
        color: '#FFD700',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
        paddingBottom: 9,
    },
    userImage: {
        borderColor: '#FFF',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
    },
    userNameText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 6,
        textAlign: 'center',
    },
});
export const stylesDetailProducts = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: 'white',
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
        backgroundColor: '#F6F6F6',
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
