
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    conteudoScroll: {
        paddingBottom: 30,
    },

    navBar: {
        width: "100%",
        height: 150,
        paddingHorizontal: 15,
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },

    navbarImage: {
        width: 55,
        height: 55,
        resizeMode: "contain",
        marginTop: 10,
    },

    TextoCodexCabecalho: {
        color: "#000000",
        fontSize: 30,
        fontWeight: "bold",
    },

    segTextoCabecalho: {
        marginTop: 10,
        color: "#008000",
        fontSize: 25,
        fontWeight: "bold",
    },

    segTextoCabecalho2: {
        marginTop: 5,
        color: "#008000",
        fontSize: 13,
    },

    container2: {
        paddingHorizontal: 20,
        marginTop: 5,
    },

    cardInicial: {
        width: "100%",
        height: 180,
        backgroundColor: "#008000",
        borderRadius: 25,
        padding: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    textosCard: {
        flex: 1,
        paddingRight: 5,
    },

    textoCardInicial: {
        color: "#FFFFFF",
        fontSize: 23,
        fontWeight: "bold",
    },

    textoCardInicial2: {
        color: "#FFFFFF",
        fontSize: 13,
        marginTop: 12,
        lineHeight: 19,
    },

    protecaoCard: {
        width: 85,
        height: 85,
        resizeMode: "contain",
    },

    container3: {
        paddingHorizontal: 20,
        marginTop: 25,
    },

    tituloAnimais: {
        color: "#075D19",
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: 18,
    },

    linhaCards: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        gap: 12,
    },

    cardsPrevencao: {
        flex: 1,
        height: 175,
        backgroundColor: "#F2F5F1",
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#DCE8D9",
    },

    imagemAnimal: {
        width: 110,
        height: 110,
        resizeMode: "contain",
        borderRadius: 15,
    },

    nomeAnimal: {
        color: "#075D19",
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 8,
    },

    barraNavegacao: {
        height: 62,
        backgroundColor: "#F2F5F1",
        borderTopWidth: 1,
        borderTopColor: "#E0E8DF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: 15,
    },

    itemNavegacao: {
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
    },

    iconeNavegacao: {
        width: 22,
        height: 22,
        resizeMode: "contain",
    },

    iconeNavegacaoCam: {
        width: 32,
        height: 32,
        resizeMode: "contain",
    },

    iconeLivro: {
        fontSize: 25,
        color: "#7D8E7D",
        fontWeight: "300",
    },

});
