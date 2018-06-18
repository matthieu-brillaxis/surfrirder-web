/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './../general/Button';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'all', articles: this.props.data};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    if (event.target.value === 'all') {
      this.state.articles = this.props.data;
    } else {
      this.state.articles = this.props.data.filter(article => article.acf.categorie === this.state.value);
    }
  }

  handleClick = (event) => {
    console.log('lol');
  };

  render() {
    console.log(this.props.data);
    const Article = styled.div`
      display: flex;
      flex-direction: column;
      background-color: #3BA9BC;
      width: 100%;
      padding: 100px 20px;
    `;

    const H5 = styled.h5`
      color: white;
    `;

    const DateArticle = styled.span`
      color: white;
    `;
  
    return (
      <Article>
      <select id="filter" value={this.state.value} onChange={this.handleChange}>
        <option value="all">Tous les articles</option> 
        <option value="Amenagement du littoral">Amenagement du littoral</option> 
        <option value="Dechets aquatiques">Dechets aquatiques</option>
        <option value="Infrastructures Maritimes">Infrastructures Maritimes</option>
        <option value="Ocean et Climat">Ocean et Climat</option>
        <option value="Qualité des eaux">Qualité des eaux</option>
        <option value="Surf et Patrimoine">Surf et Patrimoine</option>
      </select>
      { this.state.articles.map((prop, key) => {
        return (
          <div key={key}>
            <H5>{prop.title.rendered}</H5>
            <DateArticle>{prop.date}</DateArticle>
          </div>
        );
     })}
     <Button buttonTitle={'Charger plus d\'articles'} onClick={() => this.handleClick}/>
     <button onClick={this.handleClick}>Activate Lasers</button>
      </Article>
    );
  }
}

export default Articles;
