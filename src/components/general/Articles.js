import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './../general/Button';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'all', articles: this.props.data, limit: 5 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ limit: 5 });
    this.setState({ value: event.target.value });
    if (event.target.value === 'all') {
      this.state.articles = this.props.data;
    } else {
      this.state.articles = this.props.data.filter(article => article.acf.categorie === event.target.value);
    }
  }

  handleClick = () => {
    this.setState({ limit: this.state.limit + 5 });
  };

  render() {
    const ArticlesContainer = styled.div`
      display: flex;
      flex-direction: column;
      background-color: #3BA9BC;
      width: 100%;
      padding: 100px 20px;
    `;

    const Select = styled.select`
      color: white;
      border: 1px solid white;
      background-color: transparent;
      padding: 10px;
    `;

    const Article = styled.div`
    border-bottom: 1px solid white;
    `;

    const H5 = styled.h5`
      color: white;
    `;

    const DateArticle = styled.span`
      color: white;
    `;

    return (
      <ArticlesContainer>
        <Select id="filter" value={this.state.value} onChange={this.handleChange}>
          <option value="all">Tous les articles</option>
          <option value="Amenagement du littoral">Amenagement du littoral</option>
          <option value="Dechets aquatiques">Dechets aquatiques</option>
          <option value="Infrastructures Maritimes">Infrastructures Maritimes</option>
          <option value="Ocean et Climat">Ocean et Climat</option>
          <option value="Qualité des eaux">Qualité des eaux</option>
          <option value="Surf et Patrimoine">Surf et Patrimoine</option>
        </Select>
        { this.state.articles.slice(0, this.state.limit).map((prop, key) =>
          (
            <Article key={key}>
              <H5>{prop.title.rendered}</H5>
              <DateArticle>{prop.date}</DateArticle>
            </Article>
          ))
        }
        <Button onClick={this.handleClick} buttonTitle={'Charger plus d\'articles'} />
      </ArticlesContainer>
    );
  }
}

Articles.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Articles;
