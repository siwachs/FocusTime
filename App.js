import { useState } from "react";
import { SafeAreaView } from "react-native";
import { AppContainer } from "./src/styles/styles";

import Timer from "./src/features/Timer";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={AppContainer.container}>
      {currentSubject ? (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) =>
            setHistory((prevHistory) => [...prevHistory, subject])
          }
          clearSubject={() => setCurrentSubject(null)}
        />
      ) : (
        <HomeScreen setCurrentSubject={setCurrentSubject} history={history} />
      )}
    </SafeAreaView>
  );
}
