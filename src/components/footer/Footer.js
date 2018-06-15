import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import google from './../../assets/img/google.png';
import twitter from './../../assets/img/twitter.png';
import facebook from './../../assets/img/facebook.png';
import instagram from './../../assets/img/instagram.png';
import youtube from './../../assets/img/youtube.png';

class Footer extends Component {
  render() {
    const Footer = styled.footer`
      background-color:#10677a;
      padding:16px;
      display:flex;
      justify-content:space-around;
      margin-top:32px;
    `;

    return (
      <Footer className="footer">
        <img src={youtube} />
        <img src={facebook} />
        <img src={google} />
        <img src={twitter} />
        <img src={instagram} />
      </Footer>
    );
  }
}

export default connect(null, null)(Footer);
