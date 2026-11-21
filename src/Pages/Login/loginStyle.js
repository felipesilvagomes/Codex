
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    // CABEÇALHO
    cabecalho: {
        backgroundColor: '#A9EBA4',
        width: '100%',
        height: 240,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
    },

    imagemCabecalho: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
        backgroundColor: '#A9EBA4',
    },

    textoCabecalho: {
        fontSize: 30,
        color: '#075D19',
        fontWeight: 'bold',
        marginTop: 10,
    },

    subTextoCabecalho: {
        fontSize: 15,
        color: '#075D19',
        marginTop: 5,
        textAlign: 'center',
    },

    imagemdentrocabecalho: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
    },

    // FORMULÁRIO
    container2: {
        flex: 1,
        backgroundColor: '#F2F5F1',
        paddingHorizontal: 25,
        paddingTop: 25,
    },

    formulario: {
        flex: 1,
    },

    conteudoFormulario: {
        flexGrow: 1,
    },

    tituloFormulario: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#075D19',
        alignSelf: 'center',
        marginBottom: 20,
    },

    descricaoFormulario: {
        fontSize: 14,
        color: '#657365',
        marginTop: 5,
        marginBottom: 25,
    },

    // CAMPOS
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#075D19',
        marginBottom: 8,
    },

    input: {
        width: '100%',
        height: 52,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D5E2D4',
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 14,
        marginBottom: 18,
        color: '#333333',
    },

    // BOTÃO DE LOGIN
    botaoCadastro: {
        width: '100%',
        height: 53,
        backgroundColor: '#075D19',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        elevation: 3,
    },

    textoBotao: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    // ÁREA DE CADASTRO
    areaLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        gap: 5,
    },

    textoLogin: {
        fontSize: 14,
        color: '#657365',
    },

    linkLogin: {
        fontSize: 14,
        color: '#075D19',
        fontWeight: 'bold',
    },

    // RODAPÉ
    rodape: {
        fontSize: 11,
        color: '#8A9A89',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        letterSpacing: 1,
    },

    containerodape: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },

});
