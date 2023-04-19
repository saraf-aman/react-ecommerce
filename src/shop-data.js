const SHOP_DATA = [
  {
    title: "Cloths",
    items: [
      {
        id: 1,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 79,
      },
      {
        id: 2,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 169,
      },
      {
        id: 3,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 329,
      },
      {
        id: 4,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 49,
      },
      {
        id: 5,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 39,
      },
      {
        id: 6,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 89,
      },
      {
        id: 7,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 19,
      },
      {
        id: 8,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 99,
      },
      {
        id: 9,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 19,
      },
      {
        id: 10,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 149,
      },
      {
        id: 11,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 199,
      },
    ],
  },
  {
    title: "Books",
    items: [
      {
        id: 12,
        name: "A Clash of Kings by George R.R. Martin",
        imageUrl: "https://i.ibb.co/Y0qMn6b/a-clash-of-king.png",
        price: 14.99,
      },
      {
        id: 13,
        name: "A Long Walk to Water by Linda Sue Park",
        imageUrl: "https://i.ibb.co/ZTdYkkR/A-long-walk-to-water.png",
        price: 12.99,
      },
      {
        id: 14,
        name: "A Passage to India by E.M. Forster",
        imageUrl: "https://i.ibb.co/hHwmzVn/a-passage-to-india.png",
        price: 17.99,
      },
      {
        id: 15,
        name: "Anna karenina by Leo Tolstoy",
        imageUrl: "https://i.ibb.co/0BBtx4R/anna-karenina.png",
        price: 16.99,
      },
      {
        id: 16,
        name: "Harry Potter and the Order of the Phoenix by J.K. Rowling",
        imageUrl: "https://i.ibb.co/5n0bcNb/harry-potter.png",
        price: 14.99,
      },
      {
        id: 17,
        name: "The Godfather by Mario Puzo",
        imageUrl: "https://i.ibb.co/dkKqtr1/the-godfather.png",
        price: 10.99,
      },
      {
        id: 18,
        name: "The Great Gatsby by John Grisham",
        imageUrl: "https://i.ibb.co/mFXbPKn/the-great-gatsby.png",
        price: 17.99,
      },
      {
        id: 19,
        name: "The Invisible Man by H.G. Wells",
        imageUrl: "https://i.ibb.co/ZVs3KSB/the-invisible-man.png",
        price: 19.99,
      },
      {
        id: 20,
        name: "To Kill a Mockingbird by Harper Lee",
        imageUrl: "https://i.ibb.co/K5f7WGM/to-kill-a-mockingbird.png",
        price: 15.99,
      },
    ],
  },
  {
    title: "Sneakers",
    items: [
      {
        id: 21,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 219,
      },
      {
        id: 22,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 279,
      },
      {
        id: 23,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 109,
      },
      {
        id: 24,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 159,
      },
      {
        id: 25,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 159,
      },
      {
        id: 26,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 159,
      },
      {
        id: 27,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 189,
      },
      {
        id: 28,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 199,
      },
    ],
  },
  {
    title: "Electronics",
    items: [
      {
        id: 29,
        name: 'MacBook Pro 14" M2 Pro - Space Grey',
        imageUrl: "https://i.ibb.co/4fvhnbY/Mac.png",
        price: 1999,
      },
      {
        id: 30,
        name: "iPhone 14 Pro - Space Black",
        imageUrl: "https://i.ibb.co/kXzDsb4/iphone.png",
        price: 999,
      },
      {
        id: 31,
        name: "Watch Series 8 - Midnight Aluminum Case with Nike Sport Loop",
        imageUrl: "https://i.ibb.co/W39YJ8b/Watch.png",
        price: 399,
      },
      {
        id: 32,
        name: 'iPad Pro 12.9" - Space Grey',
        imageUrl: "https://i.ibb.co/CJ6ChyB/ipad.png",
        price: 1099,
      },
      {
        id: 33,
        name: "AirPods Pro (2nd Gen)",
        imageUrl: "https://i.ibb.co/ssLfnjW/airpods.png",
        price: 249,
      },
      {
        id: 34,
        name: "Home Pod",
        imageUrl: "https://i.ibb.co/RPKmfJV/homepod.png",
        price: 299,
      },
    ],
  },
  {
    title: "Sports",
    items: [
      {
        id: 35,
        name: "Wilson NCAA BasketBall",
        imageUrl: "https://i.ibb.co/6rgd5y7/basketball.png",
        price: 29.99,
      },
      {
        id: 36,
        name: "Tennis Racquet",
        imageUrl: "https://i.ibb.co/0DgXPsb/tennis-racquet.png",
        price: 99.99,
      },
      {
        id: 37,
        name: "Adidas Cleats",
        imageUrl: "https://i.ibb.co/87VFPnF/adidas-cleat.png",
        price: 69.99,
      },
      {
        id: 38,
        name: "Golf Set",
        imageUrl: "https://i.ibb.co/LzCPtv4/golf-set.png",
        price: 299.99,
      },
      {
        id: 39,
        name: "Women's Swin Top",
        imageUrl: "https://i.ibb.co/kgFMH7M/swim-top.png",
        price: 45.99,
      },
    ],
  },
];

export default SHOP_DATA;
