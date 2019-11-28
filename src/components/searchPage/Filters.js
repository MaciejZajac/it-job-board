import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../../history";
import {
  setOfferFilterSpec,
  setOfferFilterTech,
  setOfferFilterCity,
  getJobOffers
} from "../../actions/offerActions";

class Filters extends Component {
  constructor(props) {
    super(props);

    this.setCityFilter = this.setCityFilter.bind(this);
    this.setTechFilter = this.setTechFilter.bind(this);
    this.setSpecFilter = this.setSpecFilter.bind(this);
  }

  componentDidMount() {
    const params = new URLSearchParams(history.location.search);
    const spec = params.get("type");
    if (spec) {
      this.props.setOfferFilterSpec({ specializationFilter: [spec] });
    }
  }

  setCityFilter = city => {
    let newCity = this.props.cityFilter;
    if (newCity === city) {
      newCity = "";
    } else {
      newCity = city;
    }

    this.props.setOfferFilterCity({ cityFilter: newCity });
    this.props.getJobOffers({ cityFilter: newCity });
  };

  setSpecFilter = spec => {
    let newSpec = this.props.specializationFilter;
    if (newSpec === spec) {
      newSpec = "";
    } else {
      newSpec = spec;
    }

    this.props.setOfferFilterSpec({ specializationFilter: newSpec });
  };

  setTechFilter = tech => {
    let newTech = this.props.techFilter;

    if (newTech === tech) {
      newTech = "";
    } else {
      newTech = tech;
    }

    this.props.setOfferFilterTech({ techFilter: newTech });

    this.props.getJobOffers({
      cityFilter: this.props.cityFilter,
      specializationFilter: this.props.specializationFilter,
      techFilter: this.props.techFilter
    });
  };

  render() {
    const cityArray = [
      {
        city: "Warszawa",
        value: "warszawa"
      },
      {
        city: "Kraków",
        value: "krakow"
      },
      {
        city: "Wrocław",
        value: "wroclaw"
      },
      {
        city: "Katowice",
        value: "katowice"
      },
      {
        city: "Trójmiasto",
        value: "triplecity"
      },
      {
        city: "Poznań",
        value: "poznan"
      },
      {
        city: "Inne",
        value: "other"
      }
    ];
    const specializationArray = [
      { title: "Frontend", value: "frontend" },
      { title: "Fullstack", value: "fullstack" },
      { title: "Backend", value: "backend" },
      { title: "DevOps", value: "devops" },
      { title: "Tester", value: "tester" },
      { title: "PM", value: "pm" },
      { title: "Security", value: "security" },
      { title: "UI/UX", value: "uiux" },
      { title: "iOS", value: "ios" },
      { title: "Android", value: "android" },
      { title: "AI/machine learning", value: "machinelearning" }
    ];
    const techArray = [
      { tech: "JS", value: "javascript" },
      { tech: "Java", value: "java" },
      { tech: ".NET", value: "dotnet" },
      { tech: "Python", value: "python" },
      { tech: "PHP", value: "php" },
      { tech: "Ruby", value: "ruby" },
      { tech: "Kotlin", value: "kotlin" },
      { tech: "Swift", value: "swift" },
      { tech: "C/C++", value: "cplusplus" },
      { tech: "Web", value: "web" },
      { tech: "Scala", value: "scala" },
      { tech: "Mobile", value: "mobile" },
      { tech: "UX/UI", value: "uxui" },
      { tech: "R", value: "rlang" }
    ];

    return (
      <div className="filter">
        <div className="filter-container">
          <div className="filter__row">
            Miejsce:
            {cityArray.map((cityObj, index) => (
              <div
                className={`filter__item ${this.props.cityFilter ===
                  cityObj.value && "filter__item--active"}`}
                key={cityObj.value}
                onClick={() => this.setCityFilter(cityObj.value)}
              >
                {cityObj.city}
              </div>
            ))}
          </div>
          <div className="filter__row">
            Specjalizacja:
            {specializationArray.map((jobObj, index) => (
              <div
                className={`filter__item 
                  ${this.props.specializationFilter === jobObj.value &&
                    "filter__item--active"}
                  `}
                key={jobObj.value}
                onClick={() => this.setSpecFilter(jobObj.value)}
              >
                {jobObj.title}
              </div>
            ))}
          </div>
          <div className="filter__row">
            Technologia
            {techArray.map((techObj, index) => (
              <div
                className={`filter__item ${this.props.techFilter ===
                  techObj.value && "filter__item--active"}`}
                key={techObj.value}
                onClick={() => this.setTechFilter(techObj.value)}
              >
                {techObj.tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cityFilter: state.offerReducer.cityFilter,
    specializationFilter: state.offerReducer.specializationFilter,
    techFilter: state.offerReducer.techFilter
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setOfferFilterCity: filter => dispatch(setOfferFilterCity(filter)),
    setOfferFilterSpec: filter => dispatch(setOfferFilterSpec(filter)),
    setOfferFilterTech: filter => dispatch(setOfferFilterTech(filter)),
    getJobOffers: filter => dispatch(getJobOffers(filter))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
