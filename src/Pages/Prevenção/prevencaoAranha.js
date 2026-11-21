
import { StatusBar } from "expo-status-bar";

import { Text, View, Image, ScrollView, Pressable} from "react-native";

import styles from "./prevencaoAranhaStyle";

export default function PrevencaoAranha({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.conteudoScroll}
            >

                <View style={styles.navBar}>

                    <View style={styles.cabecalhoEsquerdo}>

                        <Pressable
                            style={styles.botaoVoltar}
                            onPress={() => {
                                if (navigation.canGoBack()) {
                                    navigation.goBack();
                                } else {
                                    navigation.navigate("Prevencao");
                                }
                            }}
                        >
                            <Image
                                source={require("../../../assets/SetaDefinitivaVerde.png")}
                                style={styles.seta}
                            />
                        </Pressable>

                        <View style={styles.textosCabecalho}>
                            <Text style={styles.titulo}>
                                Aranha-armadeira
                            </Text>

                            <Text style={styles.subtitulo}>
                                Conhecimento é a melhor prevenção!
                            </Text>
                        </View>

                    </View>

                    <Image
                        source={require("../../../assets/logoX.png")}
                        style={styles.logo}
                    />

                </View>

                <View style={styles.containerPrincipal}>

                    <View style={styles.cardApresentacao}>

                        <View style={styles.textosApresentacao}>
                            <Text style={styles.tituloApresentacao}>
                                Conheça a aranha-armadeira
                            </Text>

                            <Text style={styles.textoApresentacao}>
                                A aranha-armadeira é uma espécie peçonhenta.
                                Por isso, conhecer seus hábitos e saber como
                                evitar acidentes é muito importante.
                            </Text>
                        </View>

                        <Image
                            source={require("../../../assets/aranha.webp")}
                            style={styles.imagemAranha}
                        />

                    </View>

                    <View style={styles.secao}>

                        <Text style={styles.tituloSecao}>
                            Onde ela pode se esconder?
                        </Text>

                        <View style={styles.cardInformacao}>
                            <Text style={styles.textoCard}>
                                • Dentro de sapatos e roupas.

                                {"\n\n"}• Atrás de móveis e cortinas.

                                {"\n\n"}• Embaixo de pedras, troncos e folhas.

                                {"\n\n"}• Em entulhos e materiais de construção.
                            </Text>
                        </View>

                    </View>

                    <View style={styles.secao}>

                        <Text style={styles.tituloSecao}>
                            Como se prevenir?
                        </Text>

                        <View style={styles.cardDica}>
                            <Text style={styles.numeroDica}>01</Text>

                            <View style={styles.conteudoDica}>
                                <Text style={styles.tituloDica}>
                                    Verifique roupas e calçados
                                </Text>

                                <Text style={styles.textoDica}>
                                    Sacuda roupas, toalhas e sapatos antes
                                    de utilizá-los.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.cardDica}>
                            <Text style={styles.numeroDica}>02</Text>

                            <View style={styles.conteudoDica}>
                                <Text style={styles.tituloDica}>
                                    Mantenha o quintal limpo
                                </Text>

                                <Text style={styles.textoDica}>
                                    Evite o acúmulo de folhas, madeira,
                                    entulhos e objetos sem uso.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.cardDica}>
                            <Text style={styles.numeroDica}>03</Text>

                            <View style={styles.conteudoDica}>
                                <Text style={styles.tituloDica}>
                                    Utilize proteção
                                </Text>

                                <Text style={styles.textoDica}>
                                    Use luvas e calçados fechados ao mexer
                                    em materiais armazenados.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.cardDica}>
                            <Text style={styles.numeroDica}>04</Text>

                            <View style={styles.conteudoDica}>
                                <Text style={styles.tituloDica}>
                                    Proteja sua residência
                                </Text>

                                <Text style={styles.textoDica}>
                                    Vede frestas e mantenha portas e janelas
                                    protegidas com telas quando necessário.
                                </Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.cardAlerta}>

                        <Text style={styles.tituloAlerta}>
                            Atenção!
                        </Text>

                        <Text style={styles.textoAlerta}>
                            Nunca tente tocar, capturar ou matar uma
                            aranha-armadeira. Mantenha distância e procure
                            ajuda especializada.
                        </Text>

                    </View>

                    <View style={styles.secao}>

                        <Text style={styles.tituloSecao}>
                            E se acontecer uma picada?
                        </Text>

                        <View style={styles.cardEmergencia}>

                            <Text style={styles.textoEmergencia}>
                                • Lave o local com água e sabão.

                                {"\n\n"}• Procure atendimento médico imediatamente.

                                {"\n\n"}• Não faça torniquetes, cortes ou tratamentos caseiros.

                                {"\n\n"}• Se possível, fotografe o animal de longe,
                                sem tentar capturá-lo.
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

                <Pressable
                    style={styles.itemNavegacao}
                    onPress={() => navigation.navigate("Prevencao")}
                >
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
