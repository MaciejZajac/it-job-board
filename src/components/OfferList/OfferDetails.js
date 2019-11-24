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
        <div className="offer__extended-experience">Junior</div>
        <br />
        <div>
          <h4 className="offer__extended-header-uni">Opis stanowiska:</h4>
          <div>
            Poszukujemy osób, które tak jak my traktują programowanie jako
            pasję. Najważniejsza jest dla nas ciągła chęć rozwoju, również w
            czasie wolnym. Jeżeli poszukujesz nowinek, a ich testowanie sprawia
            Ci frajdę zdecydowanie powinieneś wysłać do nas swoje CV.
          </div>
        </div>
        <div>
          <h4 className="offer__extended-header-uni">Wymagany:</h4>
          {item.technologies.map(tech => (
            <span className="offer__tech-item">{tech}</span>
          ))}
        </div>
        <div>
          <h4 className="offer__extended-header-uni">Nice to have:</h4>
          {item.technologies.map(tech => (
            <span className="offer__tech-item">{tech}</span>
          ))}
        </div>
        <div>
          <h4 className="offer__extended-header-uni">O projekcie:</h4>
          <div>
            We are looking for highly skilled & motivated Penetration Tester who
            enjoys seeing his/her work making a measurable impact to a business
            and disrupting the status quo. Our development squads consist of
            Software Developers, Test Engineers and IT Analysts and are
            responsible for the end-to-end delivery of the entire product.
          </div>
        </div>
      </div>
    );
  }
}
