import CategoryMenu from "./components/category-menu/category-menu.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Cloths",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 2,
      title: "Books",
      imageUrl: "https://i.ibb.co/HC8WLfS/book.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Electronics",
      imageUrl: "https://i.ibb.co/9bj2LfR/electronics.png",
    },
    {
      id: 5,
      title: "Sports",
      imageUrl: "https://i.ibb.co/1nwWwVd/sports.png",
    },
  ];

  return <CategoryMenu categories={categories} />;
};

export default App;
