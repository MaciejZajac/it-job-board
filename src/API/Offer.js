export const getJobOffers = params => {
  const graphqlQuery = {
    query: `
            query {
              getOfferList {
                jobOffers {
                  _id
                  companyCity
                  jobTitle
                  companyName
                  experience 
                  minPayment 
                  maxPayment 
                  companyDescription 
                  projectDescription 
                  companyPage 
                  companyAdress 
                  creationDate
                }
              }
            }
          `
  };

  return fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(graphqlQuery)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {});
};

export const addNewOffer = payload => {
  const {
    jobTitle,
    companyCity,
    companyName,
    experience,
    minPayment,
    maxPayment,
    companyDescription,
    projectDescription,
    companyPage,
    companyAdress
  } = payload.body;
  const graphqlQuery = {
    query: `
      mutation {
        addNewOffer(userInput: {
          companyName: "${companyName}",
          companyCity: "${companyCity}",
          jobTitle: "${jobTitle}"
          companyPage: "${companyPage}",
          experience: "${experience}",
          projectDescription: "${projectDescription}",
          companyDescription: "${companyDescription}",
          minPayment: "${minPayment}",
          maxPayment: "${maxPayment}",
          companyAdress: "${companyAdress}"
        }) {
          _id
          companyCity
          jobTitle
          companyName
          experience 
          minPayment 
          maxPayment 
          companyDescription 
          projectDescription 
          companyPage 
          companyAdress 
          creationDate
        }
      }
    `
  };
  return fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + payload.token
    },
    body: JSON.stringify(graphqlQuery)
  });
};

export const getPrivateOfferList = token => {
  const graphqlQuery = {
    query: `
      query {
        getPrivateOfferList {
          jobOffers {
            _id
            companyCity
            jobTitle
            companyName
          }
        }
      }
    `
  };
  return fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify(graphqlQuery)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {});
};

export const deleteOneOffer = (id, token) => {
  const graphqlQuery = {
    query: `
          mutation {
            deleteOneOffer(id: "${id}") {
              result
            }
          }
        `
  };
  return fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify(graphqlQuery)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {});
};
