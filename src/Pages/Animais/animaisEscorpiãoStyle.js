
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    conteudoScroll: {
        paddingBottom: 25,
    },

    // CABEÇALHO
    navBar: {
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 15,
    },

    linhaNav: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },

    botaoVoltar: {
        width: 42,
        height: 42,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    setaNav: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },

    textosNav: {
        flex: 1,
    },

    tituloNav: {
        fontSize: 21,
        fontWeight: "bold",
        color: "#075D19",
    },

    subtituloNav: {
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#228B22",
        marginTop: 4,
    },

    logoNav: {
        width: 55,
        height: 55,
        resizeMode: "contain",
        marginLeft: 5,
    },

    descricaoNav: {
        fontSize: 14,
        color: "#333333",
        lineHeight: 21,
        marginTop: 20,
    },

    // IMAGEM PRINCIPAL
    containerImagem: {
        marginHorizontal: 20,
        height: 210,
        borderRadius: 18,
        overflow: "hidden",
        position: "relative",
        marginBottom: 15,
    },

    imagemPrincipal: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    etiquetaImagem: {
        position: "absolute",
        top: 12,
        right: 12,
        backgroundColor: "#FFF1C9",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
    },

    textoEtiqueta: {
        color: "#805600",
        fontWeight: "bold",
        fontSize: 12,
    },

    // SEÇÕES
    secao: {
        paddingHorizontal: 20,
        marginTop: 20,
    },

    tituloSecao: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#075D19",
        marginBottom: 15,
    },

    // INFORMAÇÕES GERAIS
    linhaInformacoes: {
        flexDirection: "row",
        gap: 12,
        marginBottom: 12,
    },

    cardInformacao: {
        flex: 1,
        minHeight: 125,
        backgroundColor: "#E4F3DF",
        borderRadius: 16,
        padding: 13,
        justifyContent: "center",
    },

    iconeInformacao: {
        fontSize: 24,
        marginBottom: 6,
    },

    nomeInformacao: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#333333",
    },

    valorInformacao: {
        fontSize: 13,
        color: "#444444",
        marginTop: 4,
    },

    // CURIOSIDADES
    cardCuriosidade: {
        backgroundColor: "#EAF5E4",
        borderWidth: 1,
        borderColor: "#B9DC9C",
        borderRadius: 20,
        padding: 18,
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },

    iconeCuriosidade: {
        fontSize: 38,
    },

    textoCuriosidade: {
        flex: 1,
        fontSize: 14,
        lineHeight: 21,
        color: "#333333",
    },

    // LOCAIS ONDE SE ESCONDE
    cardLista: {
        backgroundColor: "#F2F8F1",
        borderRadius: 16,
        padding: 18,
        borderWidth: 1,
        borderColor: "#D5E2D4",
        gap: 13,
    },

    itemLista: {
        fontSize: 14,
        lineHeight: 21,
        color: "#333333",
    },

    // PREVENÇÃO
    cardPrevencao: {
        backgroundColor: "#F2F8F1",
        borderRadius: 18,
        padding: 15,
        borderWidth: 1,
        borderColor: "#D5E2D4",
    },

    itemPrevencao: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18,
    },

    numeroPrevencao: {
        width: 43,
        height: 43,
        borderRadius: 22,
        backgroundColor: "#075D19",
        color: "#FFFFFF",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 15,
        fontWeight: "bold",
        overflow: "hidden",
        marginRight: 12,
    },

    textosPrevencao: {
        flex: 1,
    },

    nomePrevencao: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#075D19",
        marginBottom: 4,
    },

    descricaoPrevencao: {
        fontSize: 12,
        color: "#555555",
        lineHeight: 18,
    },

    // ALERTA
    cardAlerta: {
        marginHorizontal: 20,
        marginTop: 25,
        padding: 18,
        backgroundColor: "#FFF1C9",
        borderWidth: 1,
        borderColor: "#F5D36C",
        borderRadius: 18,
    },

    tituloAlerta: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#805600",
        marginBottom: 8,
    },

    textoAlerta: {
        fontSize: 14,
        color: "#493A1C",
        lineHeight: 21,
    },

    // PICADA
    cardPicada: {
        backgroundColor: "#F2F8F1",
        borderRadius: 16,
        padding: 18,
        borderWidth: 1,
        borderColor: "#D5E2D4",
        gap: 12,
    },

    textoPicada: {
        fontSize: 14,
        color: "#333333",
        lineHeight: 21,
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
