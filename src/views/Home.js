/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPage } from './../actions/PageActions';
import styled from 'styled-components';
import Cover from '../components/cover/Cover';
import WhiteBlock from '../components/general/WhiteBlock';
import StoreBlock from '../components/general/StoreBlock';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/newsletter/Newsletter';
import transition3 from './../assets/vague_transition3.png';
import Button from '../components/general/Button';
import ListeDeroulante from '../components/general/ListeDeroulante'
import actu1 from '../assets/img/actu1.png'
import actu2 from '../assets/img/actu2.png'

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.getPage('/accueil');
    this.state = {
      data1: {'titre': 'Les déchets aquatiques', 'contenu': 'Comme par exemple le concombre de mer ou le WQT'},
      data2: {'titre': 'Qualité de l eau et santé', 'contenu': 'Oui'},
      data3: {'titre': 'Transport Maritime', 'contenu': 'Comme les bateaux ou les voitures sous marine'},
    };
  }
  
  render() {
    const WaterBlock = styled.div`
      display: flex;
      flex-direction: column;
      background-color: #3BA9BC;
      width: 100%;
      padding: 100px 20px;
      position:relative;
    `;

    const WaterBlock2 = styled.div`
      display: flex;
      flex-direction: column;
      background-color: #176779;
      width: 100%;
      padding: 50px 0 100px 0;
      position:relative;
      text-align: center;

      &:before {
        content:'';
        height:40px;
        width:100%;
        background:url(${transition3}) no-repeat;
        background-size: cover;
        overflow: visible;
        position: absolute;
        top: -40px;
        left: 0;
        background-color: transparent;
      }
    `;

    const Margin = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    `;

    const H2 = styled.h2`
    color: white;
    text-transform: uppercase;
    margin-bottom: 0px;
    text-align: left;
    `;

    const Text = styled.div`
    color: #18687B;
    font-size: 0.9em;
    `;

    const Barre = styled.div`
    border: 1px solid white;
    margin-bottom: 20px;
    `;


    const page = this.props.pageData.find(obj => obj.slug === 'accueil');
    console.log(page);

    if (this.props.isLoading === true || !page) {
      return (
        <div>Loading</div>
      );
    } else {
      return (
        <div className="Home">
          <Cover title={page.title.rendered} subtitle={page.acf.sous_titre}/>
          <WhiteBlock text={''}/>
          <WaterBlock>
            <H2>Protéger les océans...</H2>
            <br />
            <Text>Depuis plus de 25 ans, Surfrider agit pour la protection des océans, du littoral
            et de ses usagers. Notre action se structure autour de 5 campagnes fortes :
            </Text>
            <ListeDeroulante data={this.state.data1}/>
            <ListeDeroulante data={this.state.data2}/>
            <ListeDeroulante data={this.state.data3}/>

            <H2>... Et éduquer les citoyens</H2>
            <Text>
            Permettre à chacun d'appréhender la complexité des enjeux environnementaux actuels pour
            devenir pleinement acteur du changement. Tel est l'objectif de Surfrider.
            </Text>
            <ListeDeroulante data={this.state.data1}/>
            <ListeDeroulante data={this.state.data2}/>
            <ListeDeroulante data={this.state.data3}/>
          </WaterBlock>

          <WaterBlock2>
          <Margin>
          <H2>Quoi de neuf chez Surfrider ?</H2>
          </Margin>

          <img src={actu1} className="marginTop"/>
          <Margin>
          <p className="blanc sizeText">Elections européennes 2019 : faisons entendre la voix de l'océan</p>
          </Margin>

          <img src={actu2} className="marginTop"/>
          <Margin>
            <p className="blanc sizeText">Surfrider interpelle les villes dans sa lutte contre les bouteilles en plastique</p>
          </Margin>

          <Margin>
            <Barre />
          </Margin>
            </WaterBlock2>
          <StoreBlock title={page.acf['titre-shop']} subtitle={page.acf['sous-titre-shop']} label={page.acf['bouton-label-shop'] }></StoreBlock>
          <Newsletter text={'Random text'} />
          <Footer />
        </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({getPage}, dispatch));

const mapStateToProps = (state, ownProps) => {
  return { 
    pageData: state.page.page.pageData,
    isLoading: state.page.isLoading,
  }
;}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
