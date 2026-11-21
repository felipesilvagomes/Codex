
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },

    conteudoScroll: {
        flexGrow: 1,
        paddingBottom: 30,
    },

    navBar: {
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 15,
    },

    linhaNav: {
        flexDirection: "row",
        alignItems: "center",
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

    subTextoNav: {
        color: "#008000",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 12,
    },

    subTextoNav2: {
        color: "#444444",
        fontSize: 13.5,
        marginTop: 5,
    },

    container2: {
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 22,
        paddingBottom: 20,
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

    categorias: {
        width: "100%",
        marginTop: 15,
    },

    TextoCategoria: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#008000",
        marginBottom: 15,
    },

    linhaCategorias: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },

    cardCategoria: {
        flex: 1,
        height: 115,
        backgroundColor: "#F2F8F1",
        borderWidth: 1,
        borderColor: "#D5E2D4",
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        elevation: 2,
    },

    fotoCard: {
        width: 45,
        height: 45,
        resizeMode: "contain",
        marginBottom: 8,
    },

    textoCard: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#075D19",
        textAlign: "center",
    },

    container3: {
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 25,
    },

    cabecalhoAnimais: {
        marginBottom: 18,
    },

    tituloAnimais: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#008000",
    },

    subtituloAnimais: {
        fontSize: 13,
        color: "#666666",
        marginTop: 5,
    },

    linhaAnimais: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 15,
    },

    cardAnimal: {
        flex: 1,
        backgroundColor: "#F2F8F1",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#D5E2D4",
        padding: 10,
        elevation: 2,
    },

    imagemAnimal: {
        width: "100%",
        height: 115,
        resizeMode: "contain",
        borderRadius: 10,
        marginBottom: 10,
    },

    nomeAnimal: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#075D19",
        marginBottom: 6,
    },

    descricaoAnimal: {
        fontSize: 11,
        color: "#555555",
        lineHeight: 16,
        marginBottom: 10,
    },

    linkAnimal: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#008000",
        marginTop: 3,
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
