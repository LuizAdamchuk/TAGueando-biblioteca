import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  header: {
    height: height * 0.22,
    justifyContent: 'flex-start',
  },
  headerImg: {
    alignSelf: 'center',
    width: 200,
    height: 80,
  },
  headerContent: {},
  textTitleHeader: {
    color: '#444',
    fontWeight: 'bold',
    fontSize: 32,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 16,
  },
  textHeader: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'center',
  },
  containerSeparatorStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginTop: 40,
  },
  separatorStyle: {
    backgroundColor: Colors.primary,
    height: 8,
    width: 8,
    alignSelf: 'center',
    transform: [{ rotate: '45deg' }],
    marginBottom: -4,
  },
  footer: {
    flex: 1,
    marginTop: 24,
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    padding: 8,
    alignItems: 'center',
  },
  inputContainerWrong: {
    flexDirection: 'row',
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F85568',
    padding: 8,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 48,
    width: 288,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonSignUp: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    flexDirection: 'row',
    backgroundColor: Colors.primary,
  },
  textButtonSignUp: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
