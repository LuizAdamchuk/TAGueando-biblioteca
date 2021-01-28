import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../constants/Colors';

const { height, width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: height * 0.4,
    justifyContent: 'center',
    paddingBottom: 16,
    backgroundColor: Colors.primary,
  },
  headerImg: {
    alignSelf: 'center',
    width: 200,
    height: 80,
  },
  textHeaderTitle: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 16,
  },
  textHeader: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'center',
  },
  footer: {
    height: height * 0.7,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    top: '-8%',
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContent: {
    backgroundColor: '#fff',
    width: width - 32,
    flex: 1,
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.81,

    elevation: 4,
  },
  contentDown: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#999',
    padding: 16,

    borderRadius: 12,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    paddingVertical: 0,
    fontSize: 18,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 48,
    width: 288,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButton: {
    width: 288,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    marginBottom: 8,
  },
  textSignButton: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  containerButtonRow: {
    width: 288,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  textSignUpButton: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: 'bold',
  },

  textForgotPassword: {
    fontSize: 18,
    color: '#444',
    marginTop: 16,
    alignSelf: 'center',
  },
});
