
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    conteudoScroll: {
        paddingBottom: 30,
    },

    // CABEÇALHO
    navBar: {
        minHeight: 145,
        paddingHorizontal: 15,
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    cabecalhoEsquerdo: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },

    botaoVoltar: {
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    seta: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    },

    textosCabecalho: {
        flex: 1,
    },

    logo: {
        width: 65,
        height: 65,
        resizeMode: "contain",
        marginLeft: 8,
    },

    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#075D19",
    },

    subtitulo: {
        fontSize: 12,
        color: "#555555",
        marginTop: 4,
    },

    // CONTEÚDO PRINCIPAL
    containerPrincipal: {
        paddingHorizontal: 18,
    },

    // APRESENTAÇÃO
    cardApresentacao: {
        backgroundColor: "#A9EBA4",
        borderRadius: 18,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 25,
    },

    textosApresentacao: {
        flex: 1,
    },

    tituloApresentacao: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#075D19",
        marginBottom: 8,
    },

    textoApresentacao: {
        fontSize: 13,
        color: "#263B28",
        lineHeight: 19,
    },

    imagemAranha: {
        width: 105,
        height: 105,
        resizeMode: "contain",
    },

    // SEÇÕES
    secao: {
        marginBottom: 25,
    },

    tituloSecao: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#075D19",
        marginBottom: 12,
    },

    cardInformacao: {
        backgroundColor: "#F2F5F1",
        borderRadius: 15,
        padding: 16,
    },

    textoCardTitulo: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#075D19",
    },

    textoCard: {
        fontSize: 14,
        color: "#333333",
        lineHeight: 22,
    },

    // DICAS
    cardDica: {
        backgroundColor: "#F2F5F1",
        borderRadius: 15,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        gap: 13,
    },

    numeroDica: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#228B22",
    },

    conteudoDica: {
        flex: 1,
    },

    tituloDica: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#075D19",
        marginBottom: 5,
    },

    textoDica: {
        fontSize: 13,
        color: "#444444",
        lineHeight: 19,
    },

    // ALERTA
    cardAlerta: {
        backgroundColor: "#FFF0D9",
        borderRadius: 15,
        padding: 17,
        marginBottom: 25,
        borderLeftWidth: 5,
        borderLeftColor: "#E69A20",
    },

    tituloAlerta: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#A45C00",
        marginBottom: 8,
    },

    textoAlerta: {
        fontSize: 14,
        color: "#5B452A",
        lineHeight: 21,
    },

    // EMERGÊNCIA
    cardEmergencia: {
        backgroundColor: "#FCEAEA",
        borderRadius: 15,
        padding: 16,
        borderLeftWidth: 5,
        borderLeftColor: "#D94A4A",
    },

    textoEmergencia: {
        fontSize: 14,
        color: "#5A2929",
        lineHeight: 22,
    },

    // BARRA DE NAVEGAÇÃO
    barraNavegacao: {
        height: 65,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#E5E5E5",
    },

    itemNavegacao: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    iconeNavegacao: {
        width: 27,
        height: 27,
        resizeMode: "contain",
    },

    iconeNavegacaoCam: {
        width: 32,
        height: 32,
        resizeMode: "contain",
    },

});
