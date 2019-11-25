export const getJobOffers = params => {
  console.log("params", { ...params });
  const graphqlQuery = {
    query: `
            query(filter: {...${params}}) {
              getOfferList {
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
      "Content-Type": "application/json"
    },
    body: JSON.stringify(graphqlQuery)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {});
};

export const addNewOffer = ({ companyName, companyCity, jobTitle }, token) => {
  const graphqlQuery = {
    query: `
      mutation {
        addNewOffer(userInput: {
          companyName: "${companyName}",
          companyCity: "${companyCity}",
          jobTitle: "${jobTitle}"
        }) {
          _id
          jobTitle
          companyCity
          companyName
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
