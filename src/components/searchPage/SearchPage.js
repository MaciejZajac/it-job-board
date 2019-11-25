import React from "react";
import OfferList from "../OfferList/OfferList";

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityFilter: [],
      specializationFilter: [],
      techFilter: []
    };
    this.setCityFilter = this.setCityFilter.bind(this);
    this.setTechFilter = this.setTechFilter.bind(this);
    this.setSpecFilter = this.setSpecFilter.bind(this);
  }

  componentDidMount() {
    const params = new URLSearchParams(this.props.history.location.search);
    const spec = params.get("type");
    if (spec) {
      this.setState({
        specializationFilter: [...this.state.specializationFilter, spec]
      });
    }
  }

  setCityFilter = city => {
    let newCityArr = this.state.cityFilter;
    if (newCityArr.includes(city)) {
      newCityArr = newCityArr.filter(item => item !== city);
    } else {
      newCityArr.push(city);
    }

    this.setState({
      ...this.state,
      cityFilter: newCityArr
    });
  };

  setSpecFilter = spec => {
    let newSpecArray = this.state.specializationFilter;
    if (newSpecArray.includes(spec)) {
      newSpecArray = newSpecArray.filter(item => item !== spec);
    } else {
      newSpecArray.push(spec);
    }

    this.setState({
      ...this.state,
      specializationFilter: newSpecArray
    });
  };

  setTechFilter = tech => {
    let newTechArr = this.state.techFilter;
    if (newTechArr.includes(tech)) {
      newTechArr = newTechArr.filter(item => item !== tech);
    } else {
      newTechArr.push(tech);
    }

    this.setState({
      ...this.state,
      techFilter: newTechArr
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
      <div className="body">
        {console.log("this.state", this.state)}
        <div className="filter">
          <div className="filter-container">
            <div className="filter__row">
              Miejsce:
              {cityArray.map((cityObj, index) => (
                <div
                  className={`filter__item ${this.state.cityFilter.includes(
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
                    ${this.state.specializationFilter.includes(jobObj.value) &&
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
                  className={`filter__item ${this.state.techFilter.includes(
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
        <div className="body-container">
          <div className="body__offers">
            <OfferList />
          </div>
          {/* <div className="body__map">
            <Map />
          </div> */}
        </div>
      </div>
    );
  }
}
