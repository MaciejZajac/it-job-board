import React from "react";
import OfferListItem from "./OfferListItem";

const offerJSON = [
    {
        logoUrl: "asd",
        jobTitle: "Front-end developer",
        companyName: "Valuadd",
        city: "Kraków",
        streetName: "Jana kazimierza 5",
        creationDate: "01.01.2019",
        minPayment: "3000",
        maxPayment: "5000",
        technologies: ["git", "mysql", "react"]
    },
    {
        logoUrl: "asdsd",
        jobTitle: "fullstack developer",
        companyName: "Vinity",
        city: "Warszawa",
        streetName: "Słowackiego",
        creationDate: "03.06.2019",
        minPayment: "7000",
        maxPayment: "9000",
        technologies: ["js", "html", "react"]
    },
    {
        logoUrl: "asdfas",
        jobTitle: "back-end developer",
        city: "Poznań",
        companyName: "Cupes",
        streetName: "Lecha 12",
        creationDate: "10.11.2019",
        minPayment: "5500",
        maxPayment: "9500",
        technologies: ["c#", "scala", "java"]
    },
    {
        logoUrl: "asd",
        jobTitle: "Front-end developer",
        companyName: "Valuadd",
        city: "Kraków",
        streetName: "Jana kazimierza 5",
        creationDate: "01.01.2019",
        minPayment: "3000",
        maxPayment: "5000",
        technologies: ["git", "mysql", "react"]
    },
    {
        logoUrl: "asdsd",
        jobTitle: "fullstack developer",
        companyName: "Vinity",
        city: "Warszawa",
        streetName: "Słowackiego",
        creationDate: "03.06.2019",
        minPayment: "7000",
        maxPayment: "9000",
        technologies: ["js", "html", "react"]
    },
    {
        logoUrl: "asdfas",
        jobTitle: "back-end developer",
        city: "Poznań",
        companyName: "Cupes",
        streetName: "Lecha 12",
        creationDate: "10.11.2019",
        minPayment: "5500",
        maxPayment: "9500",
        technologies: ["c#", "scala", "java"]
    },
    {
        logoUrl: "asd",
        jobTitle: "Front-end developer",
        companyName: "Valuadd",
        city: "Kraków",
        streetName: "Jana kazimierza 5",
        creationDate: "01.01.2019",
        minPayment: "3000",
        maxPayment: "5000",
        technologies: ["git", "mysql", "react"]
    },
    {
        logoUrl: "asdsd",
        jobTitle: "fullstack developer",
        companyName: "Vinity",
        city: "Warszawa",
        streetName: "Słowackiego",
        creationDate: "03.06.2019",
        minPayment: "7000",
        maxPayment: "9000",
        technologies: ["js", "html", "react"]
    },
    {
        logoUrl: "asdfas",
        jobTitle: "back-end developer",
        city: "Poznań",
        companyName: "Cupes",
        streetName: "Lecha 12",
        creationDate: "10.11.2019",
        minPayment: "5500",
        maxPayment: "9500",
        technologies: ["c#", "scala", "java"]
    },
    {
        logoUrl: "asdfas",
        jobTitle: "back-end developer",
        city: "Poznań",
        companyName: "Cupes",
        streetName: "Lecha 12",
        creationDate: "10.11.2019",
        minPayment: "5500",
        maxPayment: "9500",
        technologies: ["c#", "scala", "java"]
    },
    {
        logoUrl: "asdfas",
        jobTitle: "back-end developer",
        city: "Poznań",
        companyName: "Cupes",
        streetName: "Lecha 12",
        creationDate: "10.11.2019",
        minPayment: "5500",
        maxPayment: "9500",
        technologies: ["c#", "scala", "java"]
    },
    {
        logoUrl: "asdfas",
        jobTitle: "back-end developer",
        city: "Poznań",
        companyName: "Cupes",
        streetName: "Lecha 12",
        creationDate: "10.11.2019",
        minPayment: "5500",
        maxPayment: "9500",
        technologies: ["c#", "scala", "java"]
    }
];

export default class OfferList extends React.Component {
    render() {
        return (
            <div className='offer'>
                <div className='offer-container'>
                    <ul className='offer__list'>
                        {offerJSON.map((item, index) => {
                            return <OfferListItem key={index} item={item} />;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
