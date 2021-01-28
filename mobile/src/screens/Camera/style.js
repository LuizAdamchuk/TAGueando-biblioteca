import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  middle: {
    height: height * 0.3,
    width: width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    opacity: 0.9,
    alignSelf: 'center',
    borderBottomRightRadius: 64,
    borderTopLeftRadius: 64,
  },
  buttonOrange: {
    marginTop: 16,
    backgroundColor: '#FF9000',
    width: '100%',
    height: 37,

    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    paddingTop: 6,
  },
});
