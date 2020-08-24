import styled from 'styled-components/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
  
import Text from '../../widget/text';
import Image from '../../widget/image';
import View from '../../widget/view';

export const Container = styled(View)`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TopView = styled(View)`
  height: ${responsiveHeight(87)};
  padding-left: ${responsiveWidth(10)};
  padding-right: ${responsiveWidth(10)};
  padding-top: ${responsiveHeight(9)};
  background: #2667c9;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${responsiveHeight(7)};
`;

export const Label = styled(Text)`
  font-size: ${responsiveFontSize(5)};
  margin-left: 12px;
  color: white;
`;

export const ImageView = styled(Image)`
`;

export const TitleView = styled(Text)`
  margin-top: ${responsiveHeight(6)}
  font-size: ${responsiveFontSize(3.5)}
  color: white;
`;

export const DescView = styled(Text)`
  margin-top: ${responsiveHeight(3)}
  font-size: ${responsiveFontSize(3)}
  line-height: ${responsiveHeight(4)}
  color: white;
`;

export const PhoneView = styled(View)`
  margin-top: ${responsiveHeight(9)}
  margin-bottom: ${responsiveHeight(30)}
  flex-direction: row;
  align-items: flex-start;
  height: ${responsiveHeight(6)}
`;

export const GoBtn = styled.TouchableOpacity`
  margin-left: ${responsiveWidth(2)};
  width: ${responsiveWidth(13)};
  height: ${responsiveHeight(6)}
  border-color: #ddd;
  border-width: 2;
  border-radius: 5;
  justify-content: center;
  align-items: center;
`;

export const TextView = styled(Text)`
  font-size: ${responsiveFontSize(2.5)};
  color: white;
`;

export const SignInTextView = styled(Text)`
  margin-bottom: ${responsiveHeight(1)};
  font-size: ${responsiveFontSize(2)};
  align-self: center;
  color: white;
`;

export const BottomView = styled(View)`
  height: ${responsiveHeight(13)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${responsiveWidth(16)};
`;

export const FBView = styled.TouchableOpacity`
  flex-direction: row;
  border-color: #2667c9;
  border-width: 1;
  border-radius: 10;
  padding: 10px;
  width: ${responsiveWidth(32)}
  justify-content: space-between;
`;

export const FBTextView = styled(Text)`
  font-size: ${responsiveFontSize(2)};
`;

export const GoogleView = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  border-color: #ddd;
  border-width: 1;
  border-radius: 10;
  padding-left: 10px;
  width: ${responsiveWidth(32)}
`;

export const GoogleImageView = styled(Image)`
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const GoogleTextWapper = styled(View)`
  border-color: #2667c9;
  border-width: 1;
  border-radius: 10;
  padding: 10px;
  background: #2667c9;
`;

export const GoogleTextView = styled(Text)`
  font-size: ${responsiveFontSize(2)};
  color: white;
`;
