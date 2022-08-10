import React from "react";
import wallet from '../assets/wallet.png'
import suitcase from '../assets/suitcase.png'
import customer from '../assets/customer.png'
import payment from '../assets/payment.png';
import './Services.css'

export default function Services() {
  const data = [
    {
      icon: wallet,
      title: "Affordable",
      subTitle:
        "Choose a deal which suits you best, in an unbeatable price.",
    },
    {
      icon: suitcase,
      title: "Quality Assured",
      subTitle:
        "Best quality service makes your travel experience hassle free.",
    },
    {
      icon: payment,
      title: "Flexible Payment",
      subTitle:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: customer,
      title: "24/7 Customer Support",
      subTitle:
        "Our human friendly support works 24/7 to provide you a great experience.",
    },
  ];
  return (
    <div className='services-main' id='services'>
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" style={{width:'50px'}}/>
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </div>
  );
}