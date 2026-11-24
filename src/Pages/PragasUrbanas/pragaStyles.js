
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

    pesquisa: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: 52,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#D5E2D4",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14,
        elevation: 2,
    },

    imagemLupa: {
        width: 23,
        height: 23,
        resizeMode: "contain",
    },

    inputPesquisa: {
        flex: 1,
        fontSize: 14,
        paddingLeft: 10,
        paddingVertical: 0,
        height: "100%",
        color: "#333333",
    },

    container3: {
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 10,
    },

    cabecalhoPragas: {
        marginBottom: 18,
    },

    tituloPragas: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#008000",
    },

    subtituloPragas: {
        fontSize: 13,
        color: "#666666",
        marginTop: 5,
    },

    linhaPragas: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 15,
    },

    cardPraga: {
        flex: 1,
        backgroundColor: "#F2F8F1",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#D5E2D4",
        padding: 10,
        elevation: 2,
    },

    imagemPraga: {
        width: "100%",
        height: 115,
        resizeMode: "contain",
        borderRadius: 10,
        marginBottom: 10,
    },

    nomePraga: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#075D19",
        marginBottom: 6,
    },

    descricaoPraga: {
        fontSize: 11,
        color: "#555555",
        lineHeight: 16,
        marginBottom: 10,
    },

    linkPraga: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#008000",
        marginTop: 3,
    },
    cardDica: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        padding: 18,
        backgroundColor: "#E4F3DF",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#D5E2D4",
    },

    tituloDica: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#075D19",
        marginBottom: 8,
    },

    textoDica: {
        fontSize: 13,
        color: "#444444",
        lineHeight: 20,
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
