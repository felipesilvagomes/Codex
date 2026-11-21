import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';
import styles from './cadastroStyle';

export default function Cadastro({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <View style={styles.imagemCabecalho}>
                    <Image source={require('../../../assets/logoX.png')} style={styles.imagemdentrocabecalho} />
                </View>
                    <Text style={styles.textoCabecalho}>
                        Crie sua conta
                    </Text>                    
                    <Text style={styles.subTextoCabecalho}>
                       Pequenas atitudes, grandes mudanças para os animais.
                    </Text>
            </View>
            <View style={styles.container2}>
                <ScrollView style={styles.formulario} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                <View style={styles.formulario}>
                    <Text style={styles.tituloFormulario}>
                        Vamos começar?
                    </Text>
                    <Text style={styles.descricaoFormulario}>
                        Preencha seus dados para fazer parte da CodeX.
                    </Text>
                    <Text style={styles.label}>Nome completo</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu nome completo"
                        placeholderTextColor="#999"
                    />
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu e-mail"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Text style={styles.label}>Telefone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="(00) 00000-0000"
                        placeholderTextColor="#999"
                        keyboardType="phone-pad"
                    />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Crie uma senha"
                        placeholderTextColor="#999"
                        secureTextEntry
                    />
                    <Text style={styles.label}>Confirmar senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha novamente"
                        placeholderTextColor="#999"
                        secureTextEntry
                    />

                    <Pressable style={styles.botaoCadastro} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.textoBotao}>
                            Criar minha conta
                        </Text>
                    </Pressable>
                    <View style={styles.areaLogin}>
                        <Text style={styles.textoLogin}>
                            Já possui uma conta?
                        </Text>

                        <Pressable onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.linkLogin}>
                                Entrar
                            </Text>
                        </Pressable>
                    </View>

                    <Text style={styles.rodape}>
                        CODEX • ONDE IDEIAS CRIAM RAÍZES
                    </Text>
                </View>
                </ScrollView>
            </View>
        </View>
    )
}