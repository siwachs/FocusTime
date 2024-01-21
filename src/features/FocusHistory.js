import { View, Text, FlatList } from "react-native";
import { FocusHistoryContainer } from "../styles/styles";
import PropTypes from "prop-types";

const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={FocusHistoryContainer.container}>
      <Text style={FocusHistoryContainer.title}>Task we've completed.</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

FocusHistory.propTypes = {
  history: PropTypes.array.isRequired,
};

export default FocusHistory;
