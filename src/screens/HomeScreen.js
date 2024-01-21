import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import Focus from "../features/Focus";
import FocusHistory from "../features/FocusHistory";
import PropTypes from "prop-types";

const HomeScreen = ({ setCurrentSubject, history }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <Focus addSubject={setCurrentSubject} />
        {history && history.length > 0 && <FocusHistory history={history} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

HomeScreen.propTypes = {
  setCurrentSubject: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired,
};

export default HomeScreen;
