import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a4909ef60d6746e7a009acfa0176b5c0_9366/Pro_N3XT_2021_Shoes_Black_G58893_01_standard.jpg",
    heading: "PRO N3XT 2021 SHOES",
    subTitle: "Mens Sneakers",
    discountedPrice: "3,999",
    price: "7,999",
    discount: "50%",
    categoryName: "mens",
  },
  {
    _id: uuid(),
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/75302ec7445440d08019ae1d00c8d97a_9366/Running_Adi_Classic_Sneakers_Black_EY2914_01_standard.jpg",
    heading: "RUNNING ADI CLASSIC SNEAKERS",
    subTitle: "Mens Sneakers",
    discountedPrice: "1,499",
    price: "2,499",
    discount: "40%",
    categoryName: "mens",
  },
  {
    _id: uuid(),
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0312973e643a473fa86bad1f007ebe51_9366/Response_Super_2.0_Shoes_Black_H02027_01_standard.jpg",
    heading: "PRO N3XT 2021 SHOES",
    subTitle: "Women Sneakers",
    discountedPrice: "6,999",
    price: "9,999",
    discount: "30%",
    categoryName: "women",
  },
  {
    _id: uuid(),
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ce99bbe2a83462f9becadf80180ba8d_9366/Donovan_Mitchell_D.O.N._Issue_3_Shoes_-_Stars_of_Utah_Black_GZ5526_01_standard.jpg",
    heading: "DONOVAN MITCHELL D.O.N. - STARS OF UTAH",
    subTitle: "Women Sneakers",
    discountedPrice: "9,999",
    price: "14,999",
    discount: "40%",
    categoryName: "women",
  },
  {
    _id: uuid(),
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f2203ea9a97748309077ad0a008adaba_9366/CourtJam_Tennis_Shoes_Black_H67972_01_standard.jpg",
    heading: "COURTJAM TENNIS SHOES",
    subTitle: "Kids Shoes",
    discountedPrice: "3,919",
    price: "5,599",
    discount: "30%",
    categoryName: "kids",
  },
];
