import React from "react";

export default class OfferDetails extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="offer__extended">
        <h4 className="offer__extended-header">
          Wymagany poziom doświadczenia:{" "}
        </h4>
        <div className="offer__extended-exp">{item.experience}</div>
        <br />
        <div>
          <h4 className="offer__extended-title">Opis stanowiska:</h4>
          <div className="offer__extended-text">{item.projectDescription}</div>
        </div>
        <div>
          {/* <h4 className="offer__extended-title">Wymagany:</h4>
          <div className="offer__extended-text"> */}
          {/* {item.technologies.map((tech, index) => (
              <span className="offer__tech-item" key={index}>
                {tech}
              </span>
            ))} */}
        </div>
        <div>
          <h4 className="offer__extended-title">Opis firmy:</h4>
          <div className="offer__extended-text">{item.companyDescription}</div>
        </div>
        <div>
          <h4 className="offer__extended-title">Adres www:</h4>
          <div className="offer__extended-text">
            <a href={`#${item.companyPage}`}>{item.companyPage}</a>
          </div>
        </div>
      </div>
    );
  }
}
