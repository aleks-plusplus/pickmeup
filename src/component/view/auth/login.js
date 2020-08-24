import React, { useState, useEffect, useRef } from 'react';
import PhoneInput from '../../react-native-phone-input';

import { 
  Container, 
  TopView, 
  Header, 
  Label, 
  ImageView, 
  TitleView, 
  DescView, 
  PhoneView, 
  GoBtn, 
  TextView, 
  SignInTextView, 
  BottomView, 
  FBView, 
  FBTextView, 
  GoogleView, 
  GoogleImageView, 
  GoogleTextWapper, 
  GoogleTextView 
} from './styles';

import logo from '../../../../assets/images/logo.png';
import fb from '../../../../assets/images/facebook.png';
import google from '../../../../assets/images/google.png';

const login = () => {
  const phoneRef = useRef(undefined);

  onPressFlag = () => {
    myCountryPicker.open()
  }

  selectCountry = (country) => {
    phone.selectCountry(country.iso2)
  }

  return (
    <Container>
      <TopView>
        <Header>
          <ImageView source={logo} />
          <Label>Pickmeup</Label>
        </Header>
        
        <TitleView>Hey there!</TitleView>
        <DescView>Type in your phone number{"\n"}to get started</DescView>

        <PhoneView>
          <PhoneInput
            textProps={{ 
              placeholder: '0803 123 4567', 
              placeholderTextColor: '#797979' 
            }}
            initialCountry='ng'
            ref={phoneRef}
          />

          <GoBtn>
            <TextView>GO</TextView>
          </GoBtn>
        </PhoneView>

        <SignInTextView>or you can sign in with</SignInTextView>
      </TopView>

      <BottomView>
        <FBView>
          <ImageView source={fb} />
          <FBTextView>Facebook</FBTextView>
        </FBView>
        <GoogleView>
          <GoogleImageView source={google} />
          <GoogleTextWapper>
            <GoogleTextView>Google</GoogleTextView>
          </GoogleTextWapper>
        </GoogleView>
      </BottomView>

    </Container>
  );
};

module.exports = login;