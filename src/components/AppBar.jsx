import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackgroundColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    grow:0,
    padding: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
  }
});

const AppBar = () => {
  return <View style={styles.container}>
      <AppBarTab text="Repositories" />
    </View>;
};

export default AppBar;

const AppBarTab = (props) => {
return (<Pressable style={styles.button} onPress={() => console.log("pressed!")}>
          <Text style={styles.text}>
            {props.text}
          </Text>
      </Pressable>)
}
