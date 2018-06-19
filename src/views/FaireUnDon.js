/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPage } from './../actions/PageActions';
import Header from '../components/header/Header';
import transition from './../assets/vague_transition4.png';
import plongeur from './../assets/img/plongeur.png';
import WhiteBlock from '../components/general/WhiteBlock';
import Cover from '../components/cover/Cover';
import Button from '../components/general/Button';
import Newsletter from '../components/newsletter/Newsletter';
import Footer from '../components/footer/Footer';

class FaireUnDon extends Component {
  constructor(props) {
    super(props);
    this.props.getPage(this.props.location.pathname);
  }

  componentDidMount = () => {
  }

  render() {
    const WaterBlock = styled.div`
      display: flex;
      flex-direction: column;
      background-color: #3BA9BC;
      width: 100%;
      padding: 100px 20px;
      position:relative;
      text-align: center;
    `;

    const WaterBlock2 = styled.div`
      display: flex;
      flex-direction: column;
      background-color: #176779;
      width: 100%;
      padding: 100px 20px;
      position:relative;
      text-align: center;
    `;

    const DarkBlueBlock = styled.div`
      display: flex;
      flex-direction: column;
      background-color: #0B3E49;
      width: 100%;
      position:relative;
      padding: 30px 40px 150px 40px;

      &:before {
        content:'';
        height:40px;
        width:100%;
        background:url(${transition}) no-repeat;
        background-size: cover;
        overflow: visible;
        position: absolute;
        top: -40px;
        left: 0;
        background-color: transparent;
      }

      &:after {
        content:url(${plongeur});
        overflow: visible;
        position: absolute;
        background-color: transparent;
        width:100%;
        bottom:8px;
        text-align:right;
        padding-right:96px;
        right:0px;
      };
    `;

    const H2 = styled.h2`
    color: white;
    border-bottom: 1px solid white;
    `;

    const Input = styled.input`
    background-color: transparent;
    color: white;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid white;
    width: 250px;
    height: 40px;
    font-size: 0.8em;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: white;
      opacity: 1;
     }
    `;

    const Input2 = styled.input`
    background-color: transparent;
    color: #0B3E4A;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #0B3E4A;
    width: 250px;
    height: 40px;
    font-size: 0.8em;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #0B3E4A;
      opacity: 1;
     }
    `;

    const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    `;

    const Radio = styled.label`
    color: white;
    border: 1px solid white;
    `;

    const Wesh = styled.div`
    background-color: #78CBDA;
    color: #0B3E4A;
    padding: 20px;
    `;

    const page = this.props.pageData.find(obj => obj.slug === this.props.location.pathname.substr(1));
    console.log(page)
    if (this.props.isLoading === true || !page) {
      return (
        <div>Loading</div>
      );
    } else {
      return (
        <div className="FaireUnDon">
          <Cover title={page.title.rendered} subtitle={page.acf.sous_titre}/>
          <WhiteBlock text={''}/>
          <WaterBlock>
            <H2>Montant du don</H2>
            <Input2 type="text" placeholder="Saisissez un momtant libre"/>
            Ou <br />
            Choisir pari nos montants prédéfinis :
            <Flex>
            <Radio for="120">120€</Radio>
            <input type="radio" name="don" value="120" id="120" className="radiobutton"/>
            <input type="radio" name="don" value="200" id="200" className="radiobutton"/>
            <Radio for="200">200€</Radio>
            <input type="radio" name="don" value="520" id="520" className="radiobutton"/>
            <Radio for="520">520€</Radio>
            </Flex>
            <Button buttonTitle={'Faire un don'}/>
            <Wesh>
              <input type="checkbox" name="adherent" value="adherent" id="adherent"/>
              <label for="adherent">Je souhaite devenir adhérent pour 10€ par mois</label>
               <br />
              Période d'adhésion
              <br />
              <select id="adhesion">
                <option value="1">1 mois</option> 
                <option value="2" selected>2 mois</option>
                <option value="3">3 mois</option>
              </select>
              <Button buttonTitle={'Valider l\'adhésion'}/>
              </Wesh>
            </WaterBlock>
            <WaterBlock2>
              <H2>Coordonnées</H2>
              <p className="blueColor">Vos coordonnée seront uniquement utiliséesp pour que vous puissie bénéficier de votre réduction fiscale.</p>
            
              <br />
            
            <input type="radio" name="sexe" value="monsieur"/>
            <label for="monsieur">Monsieur</label>
            <input type="radio" name="sexe" value="madame"/>
            <label for="madame">Madame</label>

            <br />
            <Input type="text" placeholder="Adresse e-mail *"/><br />
            <Input type="text" placeholder="Nom Prénom *"/><br />

            <input type="checkbox" name="donasso" value="donasso" id="donasso"/><br />
              <label for="donasso">Je fais un don au nom d'une association ou d'une entreprise</label>
              
              <br />
              <Input type="text" placeholder="Adresse *"/><br />
              <Input type="text" placeholder="Complément d'adresse"/><br />
              <Input type="text" placeholder="Code Postal"/><br />
              <Input type="text" placeholder="Ville"/><br />
          </WaterBlock2>
          <DarkBlueBlock>
            <h1>Paiement</h1>
          </DarkBlueBlock>
          <Newsletter />
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

export default connect(mapStateToProps, mapDispatchToProps)(FaireUnDon);
