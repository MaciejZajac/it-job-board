import React from "react";

export default class OfferDetails extends React.Component {
  render() {
    const { item } = this.props;
    console.log("item", item);
    return (
      <div className="offer__extended">
        <h4 className="offer__extended-header">
          Wymagany poziom doświadczenia:{" "}
        </h4>
        <div className="offer__extended-exp">Junior</div>
        <br />
        <div>
          <h4 className="offer__extended-title">Opis stanowiska:</h4>
          <div className="offer__extended-text">
            Poszukujemy osób, które tak jak my traktują programowanie jako
            pasję. Najważniejsza jest dla nas ciągła chęć rozwoju, również w
            czasie wolnym. Jeżeli poszukujesz nowinek, a ich testowanie sprawia
            Ci frajdę zdecydowanie powinieneś wysłać do nas swoje CV.
          </div>
        </div>
        <div>
          <h4 className="offer__extended-title">Wymagany:</h4>
          <div className="offer__extended-text">
            {item.technologies.map((tech, index) => (
              <span className="offer__tech-item" key={index}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="offer__extended-title">O projekcie:</h4>
          <div className="offer__extended-text">
            We are looking for highly skilled & motivated Penetration Tester who
            enjoys seeing his/her work making a measurable impact to a business
            and disrupting the status quo. Our development squads consist of
            Software Developers, Test Engineers and IT Analysts and are
            responsible for the end-to-end delivery of the entire product.
          </div>
        </div>
        <div>
          <h4 className="offer__extended-title">Adres www:</h4>
          <div className="offer__extended-text">
            <a href="#">www.strona.pl</a>
          </div>
        </div>
        {/* <div>
          <h4 className="offer__extended-title">Sposób aplikowania:</h4>
          <div className="offer__extended-text">
            <a href="#">http://////</a>
          </div>
        </div> */}
      </div>
    );
  }
}
