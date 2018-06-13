import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Newsletter extends Component {
  render() {
    const NewsletterContainer = styled.div`
      color:red;
    `;

    const NewsletterText = styled.p`
      color:black;
      text-align:center;
    `;

    const NewsletterTextInput = styled.input.attrs({
      type: 'text',
      placeholder: 'Votre adresse email',
    })`
      color:blue;
    `;

    const NewsletterSubmitButton = styled.button.attrs({
      type: 'submit',
    })`
    
    `;

    return (
      <NewsletterContainer className="footer">
        <NewsletterText>{ this.props.text }</NewsletterText>
        <NewsletterTextInput></NewsletterTextInput>
        <NewsletterSubmitButton>S'inscrire à la newsletter</NewsletterSubmitButton>
      </NewsletterContainer>
    );
  }
}

export default connect(null, null)(Newsletter);
