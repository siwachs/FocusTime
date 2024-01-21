import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { FocusContainer } from "../styles/styles";
import RoundedButton from "../components/RoundedButton";
import PropTypes from "prop-types";

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState("");

  return (
    <View style={FocusContainer.container}>
      <View style={FocusContainer.inputContainer}>
        <TextInput
          style={FocusContainer.textInput}
          value={subject}
          onChangeText={(text) => setSubject(text)}
          label="What would you like to focus on?"
        />
        <RoundedButton
          title="+"
          size={52}
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

Focus.propTypes = {
  addSubject: PropTypes.func.isRequired,
};

export default Focus;
