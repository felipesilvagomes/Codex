
import { StatusBar } from "expo-status-bar";

import { Text, View, Image, ScrollView, Pressable, TextInput } from "react-native";

import styles from "./pragaStyles";

export default function Praga({ navigation }) {
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
                            Pragas urbanas
                        </Text>

                    </View>

                    <View style={styles.areaSubtitulo}>

                        <Text style={styles.subTextoNav}>
                            Proteja seu ambiente!
                        </Text>

                        <Text style={styles.subTextoNav2}>
                            Conheça as principais pragas urbanas e aprenda
                            como evitar sua presença.
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
                            placeholder="Pesquise uma praga urbana..."
                            placeholderTextColor="#999999"
                            style={styles.inputPesquisa}
                        />

                    </View>

                </View>

                <View style={styles.container3}>

                    <View style={styles.cabecalhoPragas}>

                        <Text style={styles.tituloPragas}>
                            Pragas em destaque
                        </Text>

                        <Text style={styles.subtituloPragas}>
                            Conheça e saiba como se prevenir!
                        </Text>

                    </View>

                    <View style={styles.linhaPragas}>

                        <View style={styles.cardPraga}>

                            <Image
                                source={require("../../../assets/RATO.webp")}
                                style={styles.imagemPraga}
                            />

                            <Text style={styles.nomePraga}>
                                Rato urbano
                            </Text>

                            <Text style={styles.descricaoPraga}>
                                Conheça seus hábitos e os riscos que oferece.
                            </Text>

                            <Text style={styles.linkPraga}>
                                Saiba mais →
                            </Text>

                        </View>


                        <View style={styles.cardPraga}>

                            <Image
                                source={require("../../../assets/mosquito.jpeg")}
                                style={styles.imagemPraga}
                            />

                            <Text style={styles.nomePraga}>
                                Aedes aegypti
                            </Text>

                            <Text style={styles.descricaoPraga}>
                                Saiba como evitar a reprodução desse mosquito.
                            </Text>

                            <Text style={styles.linkPraga}>
                                Saiba mais →
                            </Text>

                        </View>

                    </View>

                    <View style={styles.linhaPragas}>

                        <View style={styles.cardPraga}>

                            <Image
                                source={require("../../../assets/mosca.jpg")}
                                style={styles.imagemPraga}
                            />

                            <Text style={styles.nomePraga}>
                                Mosca-doméstica
                            </Text>

                            <Text style={styles.descricaoPraga}>
                                Entenda os cuidados com higiene e alimentos.
                            </Text>

                            <Text style={styles.linkPraga}>
                                Saiba mais →
                            </Text>

                        </View>

                        <View style={styles.cardPraga}>

                            <Image
                                source={require("../../../assets/barata.jpg")}
                                style={styles.imagemPraga}
                            />

                            <Text style={styles.nomePraga}>
                                Barata
                            </Text>

                            <Text style={styles.descricaoPraga}>
                                Descubra onde vive e como prevenir infestações.
                            </Text>

                            <Text style={styles.linkPraga}>
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
                        Mantenha os ambientes limpos, descarte corretamente
                        o lixo e evite água parada. Pequenos cuidados ajudam
                        a prevenir a presença de pragas urbanas.
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
