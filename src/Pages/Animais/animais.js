
import { StatusBar } from "expo-status-bar";

import { Text, View, Image, ScrollView, Pressable, TextInput } from "react-native";

import styles from "./animaiStyle";

export default function Animais({ navigation }) {
    return (
        <View style={styles.container}>

            <StatusBar style="dark" />

            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.conteudoScroll}
            >

                <View style={styles.navBar}>

                    <View style={styles.linhaNav}>

                        <Pressable
                            onPress={() => navigation.goBack()}
                            style={styles.botaoVoltar}
                        >
                            <Image
                                style={styles.voltarNav}
                                source={require("../../../assets/SetaDefinitivaVerde.png")}
                            />
                        </Pressable>

                        <Text style={styles.textoNav}>
                            Mundo animal
                        </Text>

                    </View>

                    <View style={styles.areaSubtitulo}>

                        <Text style={styles.subTextoNav}>
                            Explore a natureza!
                        </Text>

                        <Text style={styles.subTextoNav2}>
                            Descubra espécies e aprenda sobre o mundo animal.
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

                    <View style={styles.categorias}>

                        <Text style={styles.TextoCategoria}>
                            Categorias
                        </Text>

                        <View style={styles.linhaCategorias}>

                            <Pressable style={styles.cardCategoria}>
                                <Image
                                    style={styles.fotoCard}
                                    source={require("../../../assets/ara.png")}
                                />

                                <Text style={styles.textoCard}>
                                    Aracnídeos
                                </Text>
                            </Pressable>

                            <Pressable style={styles.cardCategoria}>
                                <Image
                                    style={styles.fotoCard}
                                    source={require("../../../assets/inseto.png")}
                                />

                                <Text style={styles.textoCard}>
                                    Insetos
                                </Text>
                            </Pressable>

                            <Pressable style={styles.cardCategoria}>
                                <Image
                                    style={styles.fotoCard}
                                    source={require("../../../assets/rat.png")}
                                />

                                <Text style={styles.textoCard}>
                                    Roedores
                                </Text>
                            </Pressable>

                        </View>

                    </View>

                </View>

                <View style={styles.container3}>

                    <View style={styles.cabecalhoAnimais}>

                        <Text style={styles.tituloAnimais}>
                            Animais em destaque
                        </Text>

                        <Text style={styles.subtituloAnimais}>
                            Conheça algumas espécies!
                        </Text>

                    </View>

                    <View style={styles.linhaAnimais}>

                        <View style={styles.cardAnimal}>

                            <Image
                                source={require("../../../assets/aranha-marrom2.jpg")}
                                style={styles.imagemAnimal}
                            />

                            <Text style={styles.nomeAnimal}>
                                Aranha-marrom
                            </Text>

                            <Text style={styles.descricaoAnimal}>
                                Conheça seus hábitos e características.
                            </Text>

                            <Text style={styles.linkAnimal}>
                                Saiba mais →
                            </Text>

                        </View>

                        <Pressable
                            style={styles.cardAnimal}
                            onPress={() => navigation.navigate("AnimaisEscorpião")}
                        >

                            <Image
                                source={require("../../../assets/escorpiao4.jpeg")}
                                style={styles.imagemAnimal}
                            />

                            <Text style={styles.nomeAnimal}>
                                Escorpião-amarelo
                            </Text>

                            <Text style={styles.descricaoAnimal}>
                                Descubra onde vive e como identificá-lo.
                            </Text>

                            <Text style={styles.linkAnimal}>
                                Saiba mais →
                            </Text>

                        </Pressable>

                    </View>

                    <View style={styles.linhaAnimais}>

                        <View style={styles.cardAnimal}>

                            <Image
                                source={require("../../../assets/barata.jpg")}
                                style={styles.imagemAnimal}
                            />

                            <Text style={styles.nomeAnimal}>
                                Barata
                            </Text>

                            <Text style={styles.descricaoAnimal}>
                                Saiba mais sobre essa barata.
                            </Text>

                            <Text style={styles.linkAnimal}>
                                Saiba mais →
                            </Text>

                        </View>

                        <View style={styles.cardAnimal}>

                            <Image
                                source={require("../../../assets/RATO.webp")}
                                style={styles.imagemAnimal}
                            />

                            <Text style={styles.nomeAnimal}>
                                Rato urbano
                            </Text>

                            <Text style={styles.descricaoAnimal}>
                                Conheça seus hábitos e seu ambiente.
                            </Text>

                            <Text style={styles.linkAnimal}>
                                Saiba mais →
                            </Text>

                        </View>

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
