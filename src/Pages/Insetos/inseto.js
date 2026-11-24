
import { StatusBar } from "expo-status-bar";

import { Text, View, Image, ScrollView, Pressable, TextInput } from "react-native";

import styles from "./insetoStyle";

export default function Inseto({ navigation }) {
    return (
        <View style={styles.container}>

            <StatusBar style="dark" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.conteudoScroll}
            >
                <View style={styles.navBar}>

                    <View style={styles.linhaNav}>

                        <Pressable
                            style={styles.botaoVoltar}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={require("../../../assets/SetaDefinitivaVerde.png")}
                                style={styles.voltarNav}
                            />
                        </Pressable>

                        <Text style={styles.textoNav}>
                            Insetos
                        </Text>

                    </View>

                    <View style={styles.areaSubtitulo}>

                        <Text style={styles.subTextoNav}>
                            Descubra o mundo dos insetos!
                        </Text>

                        <Text style={styles.subTextoNav2}>
                            Conheça diferentes espécies e descubra a
                            importância dos insetos para a natureza.
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
                            placeholder="Pesquise um inseto..."
                            placeholderTextColor="#999999"
                            style={styles.inputPesquisa}
                        />

                    </View>

                </View>

                <View style={styles.container3}>

                    <View style={styles.cabecalhoInsetos}>

                        <Text style={styles.tituloInsetos}>
                            Insetos em destaque
                        </Text>

                        <Text style={styles.subtituloInsetos}>
                            Conheça algumas espécies!
                        </Text>

                    </View>

                    <View style={styles.linhaInsetos}>

                        <View style={styles.cardInseto}>

                            <Image
                                source={require("../../../assets/abelha.webp")}
                                style={styles.imagemInseto}
                            />

                            <Text style={styles.nomeInseto}>
                                Abelha
                            </Text>

                            <Text style={styles.descricaoInseto}>
                                Conheça sua importância na polinização das plantas.
                            </Text>

                            <Text style={styles.linkInseto}>
                                Saiba mais →
                            </Text>

                        </View>

                        <View style={styles.cardInseto}>

                            <Image
                                source={require("../../../assets/besouro.jpeg")}
                                style={styles.imagemInseto}
                            />

                            <Text style={styles.nomeInseto}>
                                Besouro
                            </Text>

                            <Text style={styles.descricaoInseto}>
                                Descubra suas características e funções na natureza.
                            </Text>

                            <Text style={styles.linkInseto}>
                                Saiba mais →
                            </Text>

                        </View>

                    </View>

                    <View style={styles.linhaInsetos}>

                        <View style={styles.cardInseto}>

                            <Image
                                source={require("../../../assets/louva.jpg")}
                                style={styles.imagemInseto}
                            />

                            <Text style={styles.nomeInseto}>
                                Louva-a-deus
                            </Text>

                            <Text style={styles.descricaoInseto}>
                                Conheça esse predador e seus hábitos.
                            </Text>

                            <Text style={styles.linkInseto}>
                                Saiba mais →
                            </Text>

                        </View>

                        <View style={styles.cardInseto}>

                            <Image
                                source={require("../../../assets/joaninha.webp")}
                                style={styles.imagemInseto}
                            />

                            <Text style={styles.nomeInseto}>
                                Joaninha
                            </Text>

                            <Text style={styles.descricaoInseto}>
                                Saiba como ela ajuda no equilíbrio ambiental.
                            </Text>

                            <Text style={styles.linkInseto}>
                                Saiba mais →
                            </Text>

                        </View>

                    </View>

                </View>

                <View style={styles.cardDica}>

                    <Text style={styles.tituloDica}>
                        🌱 Dica CodeX
                    </Text>

                    <Text style={styles.textoDica}>
                        Respeite os insetos e evite eliminá-los sem necessidade.
                        Muitos deles são essenciais para a polinização,
                        o controle de outras espécies e o equilíbrio da natureza.
                    </Text>

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
