
import { StatusBar } from 'expo-status-bar';

import { Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';

import styles from './loginStyle';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>

            <StatusBar style="dark" />

            <View style={styles.cabecalho}>

                <View style={styles.imagemCabecalho}>
                    <Image
                        source={require('../../../assets/logoX.png')}
                        style={styles.imagemdentrocabecalho}
                    />
                </View>

                <Text style={styles.textoCabecalho}>
                    bem-vindo de volta!
                </Text>

                <Text style={styles.subTextoCabecalho}>
                    faça seu login para continuar ajudando os animais.
                </Text>

            </View>

            <View style={styles.container2}>

                <ScrollView
                    style={styles.formulario}
                    contentContainerStyle={styles.conteudoFormulario}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >

                    <Text style={styles.tituloFormulario}>
                        Realize seu login
                    </Text>
                    <Text style={styles.label}>
                        E-mail
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu e-mail"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Text style={styles.label}>
                        Senha
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#999"
                        secureTextEntry
                    />

                    <Pressable style={styles.botaoCadastro}>
                        <Text style={styles.textoBotao}>
                            Faça seu login
                        </Text>
                    </Pressable>

                    <View style={styles.areaLogin}>

                        <Text style={styles.textoLogin}>
                            Não possui uma conta?
                        </Text>

                        <Pressable
                            onPress={() => navigation.navigate('Cadastro')}
                        >
                            <Text style={styles.linkLogin}>
                                Cadastre-se
                            </Text>
                        </Pressable>

                    </View>

                    <View style={styles.containerodape}>
                        <Text style={styles.rodape}>
                            CODEX • ONDE IDEIAS CRIAM RAÍZES
                        </Text>
                    </View>

                </ScrollView>

            </View>

        </View>
    );
}
