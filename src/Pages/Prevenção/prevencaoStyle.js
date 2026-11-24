
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    conteudoScroll: {
        flexGrow: 1,
        paddingBottom: 30,
    },

    navBar: {
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 18,
        backgroundColor: "#F8FCF7",
        borderBottomWidth: 1,
        borderBottomColor: "#DCE8D9",
    },

    linhaNav: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 12,
    },

    botaoVoltar: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    voltarNav: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },

    textoNav: {
        color: "#008000",
        fontSize: 25,
        fontWeight: "bold",
    },

    areaSubtitulo: {
        borderTopWidth: 1,
        borderTopColor: "#DCE8D9",
        paddingTop: 12,
        paddingLeft: 5,
    },

    subTextoNav: {
        color: "#075D19",
        fontSize: 19,
        fontWeight: "bold",
    },

    subTextoNav2: {
        color: "#444444",
        fontSize: 13.5,
        marginTop: 5,
        lineHeight: 20,
    },

    container2: {
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 22,
    },

    cardInicial: {
        width: "100%",
        minHeight: 170,
        backgroundColor: "#008000",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#D5E2D4",
        padding: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 2,
    },

    textosCard: {
        flex: 1,
        paddingRight: 10,
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
        paddingTop: 25,
        paddingBottom: 10,
    },

    cabecalhoPrevencao: {
        marginBottom: 18,
    },

    tituloAnimais: {
        color: "#008000",
        fontSize: 23,
        fontWeight: "bold",
        marginBottom: 5,
    },

    subtituloPrevencao: {
        fontSize: 13,
        color: "#666666",
        marginTop: 5,
    },

    linhaCards: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 15,
    },

    cardsPrevencao: {
        flex: 1,
        backgroundColor: "#F2F8F1",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#D5E2D4",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
        minHeight: 155,
    },

    imagemAnimal: {
        width: "100%",
        height: 115,
        resizeMode: "contain",
        borderRadius: 10,
        marginBottom: 10,
    },

    nomeAnimal: {
        color: "#075D19",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 5,
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

});
