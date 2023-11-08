import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Game from "./src/components/Game";
import { SafeAreaView } from "react-native";

const App = (): JSX.Element => (
  <SafeAreaView>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Game />
    </GestureHandlerRootView>
  </SafeAreaView>
);

export default App;
