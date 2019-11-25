import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../../history";
import {
  setOfferFilterSpec,
  setOfferFilterTech,
  setOfferFilterCity
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
    let newCityArr = this.props.cityFilter;
    console.log("newCityArr", newCityArr);
    if (newCityArr.includes(city)) {
      newCityArr = newCityArr.filter(item => item !== city);
    } else {
      newCityArr.push(city);
    }

    this.props.setOfferFilterCity({ cityFilter: newCityArr });
  };

  setSpecFilter = spec => {
    let newSpecArray = this.props.specializationFilter;
    console.log("newSpecArray", newSpecArray);
    if (newSpecArray.includes(spec)) {
      newSpecArray = newSpecArray.filter(item => item !== spec);
    } else {
      newSpecArray.push(spec);
    }

    console.log("newSpecArray1", newSpecArray);

    this.props.setOfferFilterSpec({ specializationFilter: newSpecArray });
  };

  setTechFilter = tech => {
    let newTechArr = this.props.techFilter;

    if (!newTechArr) {
      return;
    }
    if (newTechArr.includes(tech)) {
      newTechArr = newTechArr.filter(item => item !== tech);
    } else {
      newTechArr.push(tech);
    }

    this.props.setOfferFilterTech({ techFilter: newTechArr });
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
                className={`filter__item ${this.props.cityFilter.includes(
                  cityObj.value
                ) && "filter__item--active"}`}
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
                  ${this.props.specializationFilter.includes(jobObj.value) &&
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
                className={`filter__item ${this.props.techFilter.includes(
                  techObj.value
                ) && "filter__item--active"}`}
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
  console.log("state", state);
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
    setOfferFilterTech: filter => dispatch(setOfferFilterTech(filter))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
