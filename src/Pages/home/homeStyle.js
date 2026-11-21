
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F2F5F1",
    },

    conteudoScroll: {
        flexGrow: 1,
        paddingBottom: 15,
    },

    // CABEÇALHO
    cabecalho: {
        backgroundColor: "#008000",
        width: "100%",
        minHeight: 175,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: "space-between",
    },

    linhaCabecalho: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    marca: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    imagemdentrocabecalho: {
        width: 48,
        height: 48,
        resizeMode: "contain",
    },

    textoCabecalho: {
        fontSize: 23,
        color: "#FFFFFF",
        fontWeight: "bold",
        letterSpacing: 0.5,
    },

    usuarioFoto: {
        alignItems: "center",
        justifyContent: "center",
    },

    imagemUsuario: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: "#FFFFFF",
    },

    mensagemCabecalho: {
        marginTop: 15,
    },

    linhaSaudacao: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
    },

    principal: {
        fontSize: 27,
        color: "#FFFFFF",
        fontWeight: "bold",
    },

    fotoMão: {
        width: 27,
        height: 27,
        resizeMode: "contain",
    },

    secundario: {
        fontSize: 14,
        color: "#FFFFFF",
        marginTop: 3,
    },

    // CONTEÚDO PRINCIPAL
    container2: {
        paddingHorizontal: 20,
        paddingTop: 22,
        paddingBottom: 20,
    },

    // PESQUISA
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

    // CARD DE ORIENTAÇÃO
    cardOrientacao: {
        width: "100%",
        minHeight: 225,
        backgroundColor: "#008000",
        borderRadius: 16,
        marginTop: 22,
        padding: 16,
        justifyContent: "center",
        elevation: 3,
    },

    destaque: {
        alignSelf: "flex-start",
        minWidth: 115,
        height: 32,
        backgroundColor: "#228B22",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 12,
    },

    textoDestaque: {
        fontSize: 13,
        color: "#FFFFFF",
        fontWeight: "bold",
    },

    textoOrientacao: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
    },

    textoOrientacao2: {
        color: "#FFFFFF",
        fontSize: 14,
        lineHeight: 21,
    },

    botãoOrientacao: {
        alignSelf: "flex-start",
        minWidth: 155,
        height: 43,
        backgroundColor: "#FFFFFF",
        marginTop: 17,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 14,
        borderRadius: 10,
    },

    textoBotaoOrientacao: {
        fontSize: 14,
        color: "#075D19",
        fontWeight: "bold",
    },

    // CATEGORIAS
    container3: {
        marginTop: 28,
    },

    tituloCategorias: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#075D19",
        marginBottom: 17,
    },

    gradeCards: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: 15,
    },

    card: {
        width: "48%",
        minHeight: 155,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#D5E2D4",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        elevation: 2,
    },

    tituloCard: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#075D19",
        textAlign: "center",
    },

    fotoIcone: {
        width: 65,
        height: 60,
        resizeMode: "contain",
        marginBottom: 8,
    },

    fotoIconeFlor: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        marginBottom: 8,
    },

    descricaoCard: {
        fontSize: 12,
        color: "#666666",
        textAlign: "center",
        marginTop: 6,
        lineHeight: 17,
    },

    // DICA
    dica: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 13,
        marginTop: 25,
        borderWidth: 1,
        borderColor: "#E1E9DF",
        elevation: 2,
    },

    linhaDica: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        gap: 9,
    },

    iconeDica: {
        width: 22,
        height: 22,
        resizeMode: "contain",
    },

    tituloDica: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#075D19",
    },

    textoDica: {
        fontSize: 13,
        color: "#444444",
        lineHeight: 19,
    },

    // NAVEGAÇÃO INFERIOR
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

    iconeLivro: {
        fontSize: 25,
        color: "#7D8E7D",
        fontWeight: "300",
    },

});
