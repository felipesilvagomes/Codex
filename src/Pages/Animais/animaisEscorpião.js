
import { StatusBar } from "expo-status-bar";

import {
    Text,
    View,
    Image,
    Pressable,
    ScrollView
} from "react-native";

import styles from "./animaisEscorpiãoStyle";

export default function AnimaisEscorpião({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.conteudoScroll}
            >

                {/* CABEÇALHO */}
                <View style={styles.navBar}>

                    <View style={styles.linhaNav}>

                        <Pressable
                            style={styles.botaoVoltar}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                style={styles.setaNav}
                                source={require("../../../assets/SetaDefinitivaVerde.png")}
                            />
                        </Pressable>

                        <View style={styles.textosNav}>
                            <Text style={styles.tituloNav}>
                                Escorpião-amarelo
                            </Text>

                            <Text style={styles.subtituloNav}>
                                Pequeno no tamanho, grande na importância!
                            </Text>
                        </View>

                        <Image
                            style={styles.logoNav}
                            source={require("../../../assets/logoX.png")}
                        />

                    </View>

                    <Text style={styles.descricaoNav}>
                        Conheça uma das espécies mais comuns no Brasil e
                        descubra seus hábitos, características e formas de prevenção.
                    </Text>

                </View>

                {/* IMAGEM PRINCIPAL */}
                <View style={styles.containerImagem}>
                    <Image
                        source={require("../../../assets/escorpiao4.jpeg")}
                        style={styles.imagemPrincipal}
                    />

                    <View style={styles.etiquetaImagem}>
                        <Text style={styles.textoEtiqueta}>
                            ⚠ Animal peçonhento
                        </Text>
                    </View>
                </View>

                {/* INFORMAÇÕES GERAIS */}
                <View style={styles.secao}>

                    <Text style={styles.tituloSecao}>
                        ℹ️ Informações gerais
                    </Text>

                    <View style={styles.linhaInformacoes}>

                        <View style={styles.cardInformacao}>
                            <Text style={styles.iconeInformacao}>🔬</Text>
                            <Text style={styles.nomeInformacao}>
                                Nome científico
                            </Text>
                            <Text style={styles.valorInformacao}>
                                Tityus serrulatus
                            </Text>
                        </View>

                        <View style={styles.cardInformacao}>
                            <Text style={styles.iconeInformacao}>🌎</Text>
                            <Text style={styles.nomeInformacao}>
                                Distribuição
                            </Text>
                            <Text style={styles.valorInformacao}>
                                Brasil
                            </Text>
                        </View>

                    </View>

                    <View style={styles.linhaInformacoes}>

                        <View style={styles.cardInformacao}>
                            <Text style={styles.iconeInformacao}>📏</Text>
                            <Text style={styles.nomeInformacao}>
                                Característica
                            </Text>
                            <Text style={styles.valorInformacao}>
                                Corpo amarelado
                            </Text>
                        </View>

                        <View style={styles.cardInformacao}>
                            <Text style={styles.iconeInformacao}>🌙</Text>
                            <Text style={styles.nomeInformacao}>
                                Hábitos
                            </Text>
                            <Text style={styles.valorInformacao}>
                                Atividade noturna
                            </Text>
                        </View>

                    </View>

                </View>

                {/* CURIOSIDADES */}
                <View style={styles.secao}>

                    <Text style={styles.tituloSecao}>
                        🍃 Curiosidades
                    </Text>

                    <View style={styles.cardCuriosidade}>
                        <Text style={styles.iconeCuriosidade}>💡</Text>

                        <Text style={styles.textoCuriosidade}>
                            O escorpião-amarelo costuma ser mais ativo durante
                            a noite. Durante o dia, pode permanecer escondido
                            em locais escuros e protegidos.
                        </Text>
                    </View>

                </View>

                {/* ONDE SE ESCONDE */}
                <View style={styles.secao}>

                    <Text style={styles.tituloSecao}>
                        🏡 Onde ele pode se esconder?
                    </Text>

                    <View style={styles.cardLista}>

                        <Text style={styles.itemLista}>
                            • Entulhos, tijolos e materiais de construção.
                        </Text>

                        <Text style={styles.itemLista}>
                            • Pilhas de madeira e folhas acumuladas.
                        </Text>

                        <Text style={styles.itemLista}>
                            • Ralos, frestas e redes de esgoto.
                        </Text>

                        <Text style={styles.itemLista}>
                            • Sapatos, roupas e objetos guardados no chão.
                        </Text>

                    </View>

                </View>

                {/* PREVENÇÃO */}
                <View style={styles.secao}>

                    <Text style={styles.tituloSecao}>
                        🛡️ Como se prevenir?
                    </Text>

                    <View style={styles.cardPrevencao}>

                        <View style={styles.itemPrevencao}>
                            <Text style={styles.numeroPrevencao}>01</Text>
                            <View style={styles.textosPrevencao}>
                                <Text style={styles.nomePrevencao}>
                                    Mantenha a casa limpa
                                </Text>
                                <Text style={styles.descricaoPrevencao}>
                                    Evite acúmulo de entulhos, lixo e materiais
                                    que possam servir de esconderijo.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.itemPrevencao}>
                            <Text style={styles.numeroPrevencao}>02</Text>
                            <View style={styles.textosPrevencao}>
                                <Text style={styles.nomePrevencao}>
                                    Verifique roupas e calçados
                                </Text>
                                <Text style={styles.descricaoPrevencao}>
                                    Examine roupas, toalhas e sapatos antes
                                    de utilizá-los.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.itemPrevencao}>
                            <Text style={styles.numeroPrevencao}>03</Text>
                            <View style={styles.textosPrevencao}>
                                <Text style={styles.nomePrevencao}>
                                    Proteja os ambientes
                                </Text>
                                <Text style={styles.descricaoPrevencao}>
                                    Vede frestas e instale telas ou proteções
                                    adequadas em ralos.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.itemPrevencao}>
                            <Text style={styles.numeroPrevencao}>04</Text>
                            <View style={styles.textosPrevencao}>
                                <Text style={styles.nomePrevencao}>
                                    Tenha cuidado com entulhos
                                </Text>
                                <Text style={styles.descricaoPrevencao}>
                                    Utilize calçados fechados e luvas adequadas
                                    ao manusear materiais acumulados.
                                </Text>
                            </View>
                        </View>

                    </View>

                </View>

                {/* ALERTA */}
                <View style={styles.cardAlerta}>

                    <Text style={styles.tituloAlerta}>
                        ⚠️ Atenção!
                    </Text>

                    <Text style={styles.textoAlerta}>
                        Nunca tente tocar, capturar ou matar um escorpião.
                        Ao encontrar um, mantenha distância e procure ajuda
                        de um serviço especializado.
                    </Text>

                </View>

                {/* PICADA */}
                <View style={styles.secao}>

                    <Text style={styles.tituloSecao}>
                        🏥 E se acontecer uma picada?
                    </Text>

                    <View style={styles.cardPicada}>

                        <Text style={styles.textoPicada}>
                            • Procure atendimento médico imediatamente.
                        </Text>

                        <Text style={styles.textoPicada}>
                            • Lave o local com água e sabão.
                        </Text>

                        <Text style={styles.textoPicada}>
                            • Não faça torniquetes, cortes ou tratamentos caseiros.
                        </Text>

                        <Text style={styles.textoPicada}>
                            • Não tente capturar o animal.
                        </Text>

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
