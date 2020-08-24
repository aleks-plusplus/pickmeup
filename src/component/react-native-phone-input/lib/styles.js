import { StyleSheet, Dimensions } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { withTheme } from 'styled-components';

const { width } = Dimensions.get('window');

const SCREEN_WIDTH = width;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(6),
    width: responsiveWidth(65),
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    paddingRight: 8
  },
  triangle: {
    marginLeft: 5,
    width: 0, 
    height: 0, 
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'black',
  },
  basicContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  buttonView: {
    width: SCREEN_WIDTH,
    padding: 8,
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomPicker: {
    width: SCREEN_WIDTH,
  },
  flag: {
    height: 20,
    width: 30,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#cecece',
    backgroundColor: '#cecece',
    height: responsiveHeight(3),
    width: responsiveWidth(10),
  },
  text: {
    height: 20,
    padding: 0,
    justifyContent: 'center',
    fontSize: responsiveFontSize(2),
  },
  phoneTextView: {
    flex: 1,
    marginLeft: 5,
    borderLeftColor: "#ddd", 
    height: responsiveHeight(6), 
    borderLeftWidth: 2, 
    paddingLeft: 5, 
    justifyContent: "center",
  },
  countryCodeText: {
    marginLeft: 5, 
    fontSize: responsiveFontSize(2)
  },
  phoneCodeContainer: {
    flexDirection: 'row', 
    justifyContent: "space-around", 
    alignItems: "center"
  }
});
