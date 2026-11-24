
import { StatusBar } from "expo-status-bar";

import { Text,  View,  Image, TextInput, ScrollView, Pressable } from "react-native";

import styles from "./homeStyle";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <StatusBar style="light" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.conteudoScroll}
            >

                <View style={styles.cabecalho}>

                    <View style={styles.linhaCabecalho}>

                        <View style={styles.marca}>
                            <Image
                                source={require("../../../assets/logoX.png")}
                                style={styles.imagemdentrocabecalho}
                            />

                            <Text style={styles.textoCabecalho}>
                                CodeX
                            </Text>
                        </View>

                        <Pressable style={styles.usuarioFoto}>
                            <Image
                                source={require("../../../assets/perfil2.png")}
                                style={styles.imagemUsuario}
                            />
                        </Pressable>

                    </View>

                    <View style={styles.mensagemCabecalho}>

                        <View style={styles.linhaSaudacao}>
                            <Text style={styles.principal}>
                                Olá!
                            </Text>

                            <Image
                                style={styles.fotoMão}
                                source={require("../../../assets/mão.png")}
                            />
                        </View>

                        <Text style={styles.secundario}>
                            Como podemos ajudar você hoje?
                        </Text>

                    </View>

                </View>

                <View style={styles.container2}>

                    <View style={styles.pesquisa}>

                        <Image
                            source={require("../../../assets/lupa.png")}
                            style={styles.imagemLupa}
                        />

                        <TextInput
                            placeholder="O que você está procurando?"
                            placeholderTextColor="#999999"
                            style={styles.inputPesquisa}
                        />

                    </View>

                    <View style={styles.cardOrientacao}>

                        <View style={styles.destaque}>
                            <Text style={styles.textoDestaque}>
                                Orientações
                            </Text>
                        </View>

                        <Text style={styles.textoOrientacao}>
                            Encontrou algum animal?
                        </Text>

                        <Text style={styles.textoOrientacao2}>
                            Descubra como agir com segurança e respeito com a natureza.
                        </Text>

                        <Pressable style={styles.botãoOrientacao}>
                            <Text style={styles.textoBotaoOrientacao}>
                                Saiba como agir →
                            </Text>
                        </Pressable>

                    </View>

                    <View style={styles.container3}>

                        <Text style={styles.tituloCategorias}>
                            Explore nossos conteúdos
                        </Text>

                        <View style={styles.gradeCards}>

                            <Pressable style={styles.card} onPress={() => navigation.navigate('Animais')}>

                                <Image
                                    style={styles.fotoIcone}
                                    source={require("../../../assets/pata2.png")}
                                />

                                <Text style={styles.tituloCard}>
                                    Animais
                                </Text>

                                <Text style={styles.descricaoCard}>
                                    Conheça diferentes espécies
                                </Text>

                            </Pressable>

                            <Pressable style={styles.card} onPress={() => navigation.navigate("Inseto")}>

                                <Image
                                    style={styles.fotoIcone}
                                    source={require("../../../assets/mos.png")}
                                />

                                <Text style={styles.tituloCard}>
                                    Insetos
                                </Text>

                                <Text style={styles.descricaoCard}>
                                    Identifique e conheça insetos
                                </Text>

                            </Pressable>

                            <Pressable style={styles.card} onPress={() => navigation.navigate('Prevencao')}>

                                <Image
                                    style={styles.fotoIconeFlor}
                                    source={require("../../../assets/flor.png")}
                                />

                                <Text style={styles.tituloCard}>
                                    Prevenção
                                </Text>

                                <Text style={styles.descricaoCard}>
                                    Cuide do seu ambiente
                                </Text>

                            </Pressable>

                            <Pressable style={styles.card} onPress={() => navigation.navigate('Praga')}>

                                <Image
                                    style={styles.fotoIcone}
                                    source={require("../../../assets/casa.png")}
                                />

                                <Text style={styles.tituloCard}>
                                    Pragas urbanas
                                </Text>

                                <Text style={styles.descricaoCard}>
                                    Saiba como lidar com elas
                                </Text>

                            </Pressable>

                        </View>

                    </View>

                  <View style={styles.dica}>

                        <View style={styles.linhaDica}>

                            <Image
                                source={require("../../../assets/lampada.png")}
                                style={styles.iconeDica}
                            />

                            <Text style={styles.tituloDica}>
                                Você sabia?
                            </Text>

                        </View>

                        <Text style={styles.textoDica}>
                            Nem todo animal encontrado em casa representa uma ameaça.
                            Antes de agir, procure identificar a espécie e mantenha
                            uma distância segura.
                        </Text>

                    </View>

                </View>

            </ScrollView>

            <View style={styles.barraNavegacao}>

                <Pressable style={styles.itemNavegacao}>
                    <Image
                        source={require("../../../assets/casa.png")}
                        style={styles.iconeNavegacao}
                    />
                </Pressable>

                <Pressable style={styles.itemNavegacao}>
                    <Image
                        source={require("../../../assets/cam.png")}
                        style={styles.iconeNavegacaoCam}
                    />
                </Pressable>

                <Pressable style={styles.itemNavegacao}>
                    <Image
                        source={require("../../../assets/perfil2.png")}
                        style={styles.iconeNavegacao}
                    />
                </Pressable>

            </View>

        </View>
    );
}
