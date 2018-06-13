import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faYoutube } from '@fortawesome/fontawesome-free-brands';
import { faGoogle } from '@fortawesome/fontawesome-free-brands';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';

class Footer extends Component {
  render() {
    const Footer = styled.footer`
      font-size: 1.5em;
      text-align: center;
    `;

    return (
      <Footer className="footer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        <FontAwesomeIcon icon={faGoogle} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </Footer>
    );
  }
}

export default connect(null, null)(Footer);
