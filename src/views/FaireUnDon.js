/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPage } from './../actions/PageActions';
import Header from '../components/header/Header';
import transition3 from './../assets/vague_transition3.png';
import transition from './../assets/vague_transition4.png';
import plongeur from './../assets/img/plongeur.png';
import WhiteBlock from '../components/general/WhiteBlock';
import Cover from '../components/cover/Cover';
import Button from '../components/general/Button';
import Newsletter from '../components/newsletter/Newsletter';
import Footer from '../components/footer/Footer';

import cb from './../assets/don/carte_bancaire.png';
import paypal from './../assets/don/paypal.png';
import picto_adresse from './../assets/don/picto_adresse.png';
import picto_cadenas from './../assets/don/picto_cadenas.png';
import picto_carte from './../assets/don/picto_carte.png';
import picto_enveloppe from './../assets/don/picto_enveloppe.png';
import picto_nom from './../assets/don/picto_nom.png';
import tongue from './../assets/don/tongue.png';

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
      padding: 100px 35px;
      position:relative;
      text-align: center;
    `;

    const WaterBlock2 = styled.div`
      display: flex;
      flex-direction: column;
      background-color: #176779;
      width: 100%;
      padding: 50px 35px 100px 35px;
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

    const FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
    `;

    const Lol = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    height: 100%;
    margin-bottom: 20px;
    `;

    const Mdr = styled.div`
    text-align: left;
    `;

    const Radio = styled.label`
    color: white;
    border: 2px solid white;
    border-radius: 10px;
    padding: 18px;
    `;

    const Radio2 = styled.label`
    color: white;
    border: 2px solid white;
    border-radius: 10px;
    padding: 10px;
    `;

    const Wesh = styled.div`
    background-color: #78CBDA;
    color: #0B3E4A;
    padding: 30px;
    `;

    const Barre = styled.div`
    border: 1px solid #0B3E4A;
    margin-bottom: 20px;
    `;

    const BarryWhite = styled.div`
    border: 1px solid white;
    margin-bottom: 20px;
    `;

    const InfoSecurite = styled.div`
    background-color: #3D7884;
    color: #94D9E7;
    padding: 20px;
    border-radius: 10px;
    `;

    const Xd = styled.div`
      display: flex;
      align-items: center;
    `;

    const Icone = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    `;

    const Icone2 = styled.img`
    width: 80px;
    height: 35px;
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
            <H2>1 - Montant du don</H2>
            <Input2 type="text" placeholder="Saisissez un momtant libre"/>
            <br />
            <div className="darkColor">
            Ou <br />
            Choisir pari nos montants prédéfinis :
            </div>
            <br />
            <Flex>
            <div className="conteneurRadio">
            <input type="radio" name="don" value="120" id="120" className="radiobutton"/>
            <Radio htmlFor="120">120€</Radio>
            </div>
            <div className="conteneurRadio">
              <input type="radio" name="don" value="200" id="200" className="radiobutton"/>
              <Radio htmlFor="200">200€</Radio>
            </div>
            <div className="conteneurRadio">
              <input type="radio" name="don" value="520" id="520" className="radiobutton"/>
              <Radio htmlFor="520">520€</Radio>
            </div>
            </Flex>
            <Button buttonTitle={'Faire un don'}/>
            <Wesh>
            <div className="inputCheckbox">
              <input type="checkbox" name="adherent" value="adherent" id="adherent"/>
              <span class="checkmark"></span>
              <label htmlFor="adherent">Je souhaite devenir adhérent pour 10€ par mois
              </label>
            </div>
               <br />
              <Mdr>Période d'adhésion</Mdr>
              <br />
              <select id="adhesion" defaultValue="1" className="selectDonation">
                <option value="1">1 mois</option> 
                <option value="2">2 mois</option>
                <option value="3">3 mois</option>
              </select>

              <Barre/>

              <div className="inputCheckbox">
              <input type="checkbox" name="use" value="use" id="use"/>
              <span class="checkmark"></span>
              <label htmlFor="use">Utiliser les même coordonnées
              </label>
            </div>
              </Wesh>
              <Button buttonTitle={'Valider l\'adhésion'}/>
            </WaterBlock>
            <WaterBlock2>
              <H2>2 - Coordonnées</H2>
              <p className="blueColor sizeText">Vos coordonnée seront uniquement utiliséesp pour que vous puissie bénéficier de votre réduction fiscale.</p>
              <br />
            
              <Flex>
              <div className="inputRadio">
              <input type="radio" name="sexe" value="monsieur" id="monsieur"/>
              <span class="checkmark"></span>
              <label htmlFor="monsieur">Monsieur</label>
            </div>

            <div className="inputRadio">
              <input type="radio" name="sexe" value="madame" id="madame"/>
              <span class="checkmark"></span>
              <label htmlFor="madame">Madame</label>
            </div>
              </Flex>

            <Xd>
            <Icone src={picto_enveloppe}/>
            <Input type="text" placeholder="Adresse e-mail *"/><br />
            </Xd>

            <Xd>
            <Icone src={picto_nom}/>
            <Input type="text" placeholder="Nom Prénom *"/><br />   
            </Xd>

            <br />

            <div className="inputCheckbox blanc">
              <input type="checkbox" name="donasso" value="donasso" id="donasso"/>
              <span class="checkmark blancBorder"></span>
              <label htmlFor="donasso">Je fais un don au nom d'une association ou d'une entreprise
              </label>
            </div>

              <br />
              <Xd>
              <Icone src={picto_adresse}/>
              <Input type="text" placeholder="Adresse *"/><br />
              </Xd>
              <div>
              <Input type="text" placeholder="Complément d'adresse"/><br />
              </div>
              <div>
              <Input type="text" placeholder="Code Postal *"/><br />
              </div>
              <div>
              <Input type="text" placeholder="Ville *"/><br />
              </div>
              <br />
              <div>
              <div className="blanc left sizeText marginBottom">Pays *</div>
              <select id="pays" defaultValue="france" className="selectDonation blanc blancBorder">
                <option value="france">France</option> 
                <option value="2">Congo</option>
                <option value="3">Australie</option>
              </select>
              </div>

              <div className="backgroundBlue">
              <Button buttonTitle={'Valider les coordonnées'} className="xd"/>
              </div>
          </WaterBlock2>
          <DarkBlueBlock>
            <H2>3 - Paiement</H2>

            <div className="blanc left sizeText marginBottom">Choisissez votre moyen de paiement :</div>

            <br />
            <FlexBetween>s
            <div className="conteneurRadio lol">
            <input type="radio" name="don" value="cb" id="cb" className="radiobutton"/>
            <Radio2 htmlFor="cb"><Icone2 src={cb}/></Radio2>
            </div>
            <div className="conteneurRadio lol">
              <input type="radio" name="don" value="Cheque" id="Cheque" className="radiobutton"/>
              <Radio2 htmlFor="Cheque">Cheque</Radio2>
            </div>
            </FlexBetween>

            <FlexBetween>
            <div className="conteneurRadio lol">
            <input type="radio" name="don" value="paypal" id="paypal" className="radiobutton"/>
            <Radio2 htmlFor="paypal"><Icone2 src={paypal}/></Radio2>
          </div>
          <div className="conteneurRadio lol">
            <input type="radio" name="don" value="IBAN" id="IBAN" className="radiobutton"/>
            <Radio2 htmlFor="IBAN">IBAN</Radio2>
          </div>
            </FlexBetween>

            <Xd>
              <Icone src={picto_carte}/>
              <Input type="text" placeholder="Numéro de carte"/><br />
            </Xd>

            <br />

            <div className="blanc left sizeText marginBottom">Date d'expiration</div>

            <div>
            <select id="pays" defaultValue="mois" className="selectDonation blanc blancBorder">
              <option value="mois">Mois</option> 
              <option value="01">01</option>
              <option value="02">02</option>
            </select>

            <select id="pays" defaultValue="annee" className="selectDonation blanc blancBorder">
              <option value="annee">annee</option> 
              <option value="2017">2017</option>
              <option value="2018">2018</option>
            </select>
            </div>

            <Xd>
              <Icone src={picto_cadenas}/>
              <Input type="text" placeholder="Code de sécurité"/><br />
            </Xd>

            <br />

            <InfoSecurite className="sizeText">
            Le code de sécurité est constitué des 3 derniers chiffres inscrits au dos de votre carte bancaire.
            </InfoSecurite>

            <div>
            <H2>Récapitulatif</H2>
            </div>

            <FlexBetween className="blanc sizeText marginBottom">
            <span>Votre don</span>
            <span>200€</span>
            </FlexBetween>

            <FlexBetween className="blanc sizeText marginBottom">
            <span>Votre adhésion - 1 mois</span>
            <span>10€</span>
            </FlexBetween>

            <BarryWhite />

            <FlexBetween className="blanc sizeText">
            <span>TOTAL</span>
            <span>210€</span>
            </FlexBetween>

            <div className="backgroundBlue">
              <Button buttonTitle={'Valider le don à surfrider'} className="xd"/>
              </div>

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
