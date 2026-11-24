
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./src/Pages/Cadastro/cadastro";
import Login from "./src/Pages/Login/login";
import Home from "./src/Pages/home/home";
import Prevencao from "./src/Pages/Prevenção/prevencao";
import PrevencaoAranha from "./src/Pages/Prevenção/prevencaoAranha";
import Animais from "./src/Pages/Animais/animais";
import AnimaisEscorpião from "./src/Pages/Animais/animaisEscorpião";
import Praga from "./src/Pages/PragasUrbanas/praga";
import Inseto from "./src/Pages/Insetos/inseto";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Cadastro">

                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Prevencao"
                    component={Prevencao}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="PrevencaoAranha"
                    component={PrevencaoAranha}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Animais"
                    component={Animais}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="AnimaisEscorpião"
                    component={AnimaisEscorpião}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Praga"
                    component={Praga}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Inseto"
                    component={Inseto}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    );
}
