import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingVertical: 16,
      },
      android: {
        paddingVertical: 32,
      },
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    marginTop: height * 0.2,
    height: height * 0.4,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    height: 32,
    width: width - 32,
  },
  input: {
    height: 48,
    backgroundColor: 'white',
  },
  bookListContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
  },
  bookListText: {
    padding: 4,
    fontSize: 20,
  },
});
