import React from "react";
import OfferListItem from "./OfferListItem";
import { connect } from "react-redux";
import { getJobOffers } from "../../actions/offerActions";

class OfferList extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this.props.getJobOffers();
  }

  render() {
    return (
      <div className="offer">
        <div className="offer-container">
          <ul className="offer__list">
            {this.props.jobOffers &&
              this.props.jobOffers.map(item => {
                return <OfferListItem key={item._id} item={item} />;
              })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getJobOffers: filter => dispatch(getJobOffers(filter))
  };
}

function mapStateToProps(state) {
  return {
    jobOffers: state.offerReducer.jobOffers
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);

// const offerJSON = [
//   {
//     logoUrl: "asd",
//     _id: "1",
//     jobTitle: "Front-end developer",
//     companyName: "Valuadd",
//     city: "Kraków",
//     streetName: "Jana kazimierza 5",
//     creationDate: "01.01.2019",
//     minPayment: "3000",
//     maxPayment: "5000",
//     technologies: ["git", "mysql", "react"]
//   },
//   {
//     logoUrl: "asdsd",
//     _id: "2",
//     jobTitle: "fullstack developer",
//     companyName: "Vinity",
//     city: "Warszawa",
//     streetName: "Słowackiego",
//     creationDate: "03.06.2019",
//     minPayment: "7000",
//     maxPayment: "9000",
//     technologies: ["js", "html", "react"]
//   },
//   {
//     logoUrl: "asdfas",
//     _id: "3",
//     jobTitle: "back-end developer",
//     city: "Poznań",
//     companyName: "Cupes",
//     streetName: "Lecha 12",
//     creationDate: "10.11.2019",
//     minPayment: "5500",
//     maxPayment: "9500",
//     technologies: ["c#", "scala", "java"]
//   },
//   {
//     logoUrl: "asd",
//     _id: "4",
//     jobTitle: "Front-end developer",
//     companyName: "Valuadd",
//     city: "Kraków",
//     streetName: "Jana kazimierza 5",
//     creationDate: "01.01.2019",
//     minPayment: "3000",
//     maxPayment: "5000",
//     technologies: ["git", "mysql", "react"]
//   },
//   {
//     logoUrl: "asdsd",
//     _id: "5",
//     jobTitle: "fullstack developer",
//     companyName: "Vinity",
//     city: "Warszawa",
//     streetName: "Słowackiego",
//     creationDate: "03.06.2019",
//     minPayment: "7000",
//     maxPayment: "9000",
//     technologies: ["js", "html", "react"]
//   },
//   {
//     logoUrl: "asdfas",
//     _id: "6",
//     jobTitle: "back-end developer",
//     city: "Poznań",
//     companyName: "Cupes",
//     streetName: "Lecha 12",
//     creationDate: "10.11.2019",
//     minPayment: "5500",
//     maxPayment: "9500",
//     technologies: ["c#", "scala", "java"]
//   },
//   {
//     logoUrl: "asd",
//     _id: "7",
//     jobTitle: "Front-end developer",
//     companyName: "Valuadd",
//     city: "Kraków",
//     streetName: "Jana kazimierza 5",
//     creationDate: "01.01.2019",
//     minPayment: "3000",
//     maxPayment: "5000",
//     technologies: ["git", "mysql", "react"]
//   },
//   {
//     logoUrl: "asdsd",
//     _id: "8",
//     jobTitle: "fullstack developer",
//     companyName: "Vinity",
//     city: "Warszawa",
//     streetName: "Słowackiego",
//     creationDate: "03.06.2019",
//     minPayment: "7000",
//     maxPayment: "9000",
//     technologies: ["js", "html", "react"]
//   },
//   {
//     logoUrl: "asdfas",
//     _id: "9",
//     jobTitle: "back-end developer",
//     city: "Poznań",
//     companyName: "Cupes",
//     streetName: "Lecha 12",
//     creationDate: "10.11.2019",
//     minPayment: "5500",
//     maxPayment: "9500",
//     technologies: ["c#", "scala", "java"]
//   },
//   {
//     logoUrl: "asdfas",
//     _id: "10",
//     jobTitle: "back-end developer",
//     city: "Poznań",
//     companyName: "Cupes",
//     streetName: "Lecha 12",
//     creationDate: "10.11.2019",
//     minPayment: "5500",
//     maxPayment: "9500",
//     technologies: ["c#", "scala", "java"]
//   },
//   {
//     logoUrl: "asdfas",
//     _id: "11",
//     jobTitle: "back-end developer",
//     city: "Poznań",
//     companyName: "Cupes",
//     streetName: "Lecha 12",
//     creationDate: "10.11.2019",
//     minPayment: "5500",
//     maxPayment: "9500",
//     technologies: ["c#", "scala", "java"]
//   },
//   {
//     logoUrl: "asdfas",
//     _id: "12",
//     jobTitle: "back-end developer",
//     city: "Poznań",
//     companyName: "Cupes",
//     streetName: "Lecha 12",
//     creationDate: "10.11.2019",
//     minPayment: "5500",
//     maxPayment: "9500",
//     technologies: ["c#", "scala", "java"]
//   }
// ];
