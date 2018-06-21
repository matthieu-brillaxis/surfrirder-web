import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from '../general/Button';
import bloc6 from '../../assets/img/bloc6.png';

const NewsletterContainer = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content:center;
  position:relative;

  &:before {
    content:'';
    height:70px;
    width:100%;
    background:url(${bloc6});
    background-size: cover;
    overflow: visible;
    position: absolute;
    top: -70px;
    background-color: transparent;
  }
`;

const NewsletterText = styled.p`
  color:#10677a;
  font-width:bold;
  text-align:center;
  padding:16px;
`;

const NewsletterTextInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Votre adresse email',
})`
  border:none;
  color:#35a9be;
  border-bottom:1px solid #35a9be;
  margin:16px;
  width:60%;
  margin:16px auto 16px auto;

  &::placeholder {
    color:#35a9be;
  }
`;

const Newsletter = () => (
  <NewsletterContainer className="newsletter">
    <NewsletterText>Restez au courant de notre actualité en souscrivant à notre newsletter :</NewsletterText>
    <NewsletterTextInput />
    <Button type="submit" buttonTitle={'S\'inscrire à la newsletter'} />
  </NewsletterContainer>
);

export default connect(null, null)(Newsletter);
