
import { StatusBar } from "expo-status-bar";

import { Text, View, Image, ScrollView, Pressable } from "react-native";

import styles from "./prevencaoStyle";

export default function Prevencao({ navigation }) {
    return (
        <View style={styles.container}>

            <StatusBar style="dark" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.conteudoScroll}
            >

                <View style={styles.navBar}>

                    <View>
                        <Text style={styles.TextoCodexCabecalho}>
                            Codex
                        </Text>

                        <Text style={styles.segTextoCabecalho}>
                            Prevenção
                        </Text>

                        <Text style={styles.segTextoCabecalho2}>
                            Pequenos cuidados fazem toda a diferença!
                        </Text>
                    </View>

                    <Image
                        source={require("../../../assets/logoX.png")}
                        style={styles.navbarImage}
                    />

                </View>
                <View style={styles.container2}>

                    <View style={styles.cardInicial}>

                        <View style={styles.textosCard}>

                            <Text style={styles.textoCardInicial}>
                                Proteja sua casa!
                            </Text>

                            <Text style={styles.textoCardInicial2}>
                                Aprenda a prevenir o aparecimento de
                                animais e pragas no seu ambiente.
                            </Text>

                        </View>

                        <Image
                            source={require("../../../assets/protecao.png")}
                            style={styles.protecaoCard}
                        />

                    </View>

                </View>
                <View style={styles.container3}>

                    <Text style={styles.tituloAnimais}>
                        O que você deseja prevenir?
                    </Text>
                    <View style={styles.linhaCards}>

                        <Pressable style={styles.cardsPrevencao} onPress={() => navigation.navigate("PrevencaoAranha")}>

                            <Image
                                source={require("../../../assets/aranha.webp")}
                                style={styles.imagemAnimal}
                            />

                            <Text style={styles.nomeAnimal}>
                                Aranha-armadeira
                            </Text>

                        </Pressable>

                        <Pressable style={styles.cardsPrevencao}>

                            <Image
                                source={require("../../../assets/escorpiao4.jpeg")}
                                style={styles.imagemAnimal}
                            />

                            <Text style={styles.nomeAnimal}>
                                Escorpião-amarelo
                            </Text>

                        </Pressable>

                    </View>
                    <View style={styles.linhaCards}>

                        <Pressable style={styles.cardsPrevencao}>

                            <Image
                                source={require("../../../assets/mosquito.jpeg")}
                                style={styles.imagemAnimal}
                            />

                            <Text style={styles.nomeAnimal}>
                                Aedes aegypti
                            </Text>

                        </Pressable>

                        <Pressable style={styles.cardsPrevencao}>

                            <Image
                                source={require("../../../assets/RATO.webp")}
                                style={styles.imagemAnimal}
                            />

                            <Text style={styles.nomeAnimal}>
                                Rato urbano
                            </Text>

                        </Pressable>

                    </View>

                </View>

            </ScrollView>
            <View style={styles.barraNavegacao}>

                <Pressable
                    style={styles.itemNavegacao}
                    onPress={() => navigation.navigate("Home")}
                >
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
