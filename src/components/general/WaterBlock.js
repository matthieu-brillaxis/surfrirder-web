import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import ActionBlock from './ActionBlock';
import poisson1 from '../../assets/img/poisson1.png';
import poisson2 from '../../assets/img/poisson2.png';
import poisson3 from '../../assets/img/poisson3.png';
import bubble3 from '../../assets/img/bulle3.png';
import bubble1 from '../../assets/img/bulle1.png';
import bubble4 from '../../assets/img/bulle4.png';


class WaterBlock extends PureComponent {
  render() {
    const WaterBlockContainer = styled.div`
      display: flex;
      flex-direction: column;
      background-color: #3BA9BC;
      width: 100%;
      padding: 100px 0;
      position:relative;
    `;

    const Img = styled.img`
      position:relative;
      margin-left:16px;
    `;

    const Fish1 = styled.img`
      position:relative;
    `;

    const Fish3 = styled.img`
      position:relative;
    `;

    const Fish2 = styled.img`
      position:relative;
    `;

    const { data } = this.props;

    return (
      <WaterBlockContainer>
        <Parallax
          offsetYMax={1000}
          offsetYMin={200}
          styleInner={{ position: 'absolute', right: '10%' }}
          slowerScrollRate
        >
          <Fish1 src={poisson1} />
        </Parallax>
        <Parallax
          offsetYMax={1000}
          offsetYMin={100}
          styleInner={{ position: 'absolute', left: '10%' }}
          slowerScrollRate
        >
          <Fish2 src={poisson2} />
        </Parallax>
        <Parallax
          offsetYMax={1300}
          offsetYMin={100}
          styleInner={{ position: 'absolute', left: '40%', top:'10%' }}
          slowerScrollRate
        >
          <Img src={bubble3} />
        </Parallax>
        <Parallax
          offsetYMax={1000}
          offsetYMin={100}
          styleInner={{ position: 'absolute', right: '10%' }}
          slowerScrollRate
        >
          <Fish3 src={poisson3} />
        </Parallax>
        <Parallax
          offsetYMax={1400}
          offsetYMin={100}
          styleInner={{ position: 'absolute', left: '55%', top: '15%' }}
          slowerScrollRate
        >
          <Img src={bubble3} />
        </Parallax>
        <Parallax
          offsetYMax={1000}
          offsetYMin={100}
          styleInner={{ position: 'absolute', left: '21%', top: '10%' }}
          slowerScrollRate
        >
          <Img src={bubble3} />
        </Parallax>
        <Parallax
          offsetYMax={1000}
          offsetYMin={100}
          styleInner={{ position: 'absolute', left: '21%', top: '10%' }}
          slowerScrollRate
        >
          <Img src={bubble1} />
        </Parallax>
        <Parallax
          offsetYMax={1000}
          offsetYMin={100}
          styleInner={{ position: 'absolute', left: '10%', top: '20%' }}
          slowerScrollRate
        >
          <Img src={bubble1} />
        </Parallax>
        <Parallax
          offsetYMax={1000}
          offsetYMin={100}
          styleInner={{ position: 'absolute', right: '10%', top: '10%' }}
          slowerScrollRate
        >
          <Img src={bubble4} />
        </Parallax>
        <Parallax
          offsetYMax={1200}
          offsetYMin={100}
          styleInner={{ position: 'absolute', right: '15%', top: '20%' }}
          slowerScrollRate
        >
          <Img src={bubble4} />
        </Parallax>
        { data.map((prop, key) => (
          <ActionBlock key={key} icone={prop.icone.url} title={prop.titre} subtitle={prop.sous_titre} buttonTitle={prop.bouton_label} />
          ))
        }
      </WaterBlockContainer>
    );
  }
}

WaterBlock.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WaterBlock;
