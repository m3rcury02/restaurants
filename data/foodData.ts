const foodData = [
  {
    id: 1,
    title: "Margherita Pizza",
    description: "Classic cheese pizza with tomato sauce and mozzarella.",
    price: 10,
    ingredients: ["tomato sauce", "mozzarella"],
    veg: true,
    rating: 4.5,
    specialty: "spicy",
    reviews: [
      {
        id: 1,
        text: "Delicious pizza! The crust was perfectly crispy.",
        author: "John Doe",
      },
      {
        id: 2,
        text: "One of the best Margherita pizzas I have ever had!",
        author: "Jane Doe",
      },
    ],
  },
  {
    id: 2,
    title: "Pepperoni Pizza",
    description:
      "Classic pepperoni pizza with tomato sauce, mozzarella, and pepperoni.",
    price: 12,
    ingredients: ["tomato sauce", "mozzarella", "pepperoni"],
    veg: false,
    rating: 3.7,
    specialty: "spicy",
    reviews: [
      {
        id: 1,
        text: "Amazing pizza! The pepperoni was perfectly spicy.",
        author: "John Smith",
      },
      {
        id: 2,
        text: "The best pepperoni pizza in town! The crust was crispy and the toppings were delicious.",
        author: "Jane Smith",
      },
    ],
  },
  {
    id: 3,
    title: "Hawaiian Pizza",
    description:
      "Delicious pizza with tomato sauce, mozzarella, ham, and pineapple.",
    price: 13,
    ingredients: ["tomato sauce", "mozzarella", "ham", "pineapple"],
    veg: false,
    rating: 2.3,
    specialty: "sweet",
    reviews: [
      {
        id: 1,
        text: "Great pizza! The combination of ham and pineapple is surprisingly good.",
        author: "Bob Johnson",
      },
      {
        id: 2,
        text: "I love this pizza! The crust is crispy and the toppings are well balanced.",
        author: "Alice Johnson",
      },
    ],
  },
  {
    id: 4,
    title: "Veggie Pizza",
    description:
      "Healthy pizza with tomato sauce, mozzarella, and assorted vegetables.",
    price: 11,
    ingredients: ["tomato sauce", "mozzarella", "vegetables"],
    veg: true,
    rating: 1.6,
    specialty: "",
    reviews: [
      {
        id: 1,
        text: "This pizza is amazing! The vegetables are fresh and the crust is crispy.",
        author: "Charlie Brown",
      },
    ],
  },
  {
    id: 5,
    title: "BBQ Chicken Pizza",
    description:
      "Tasty pizza with BBQ sauce, mozzarella, chicken, and red onion.",
    price: 14,
    ingredients: ["BBQ sauce", "mozzarella", "chicken", "red onion"],
    veg: false,
    rating: 4.8,
    specialty: "spicy",
    reviews: [
      {
        id: 1,
        text: "This pizza is amazing! The BBQ sauce adds a nice tangy flavor.",
        author: "Dave Smith",
      },
      {
        id: 2,
        text: "I love this pizza! The chicken is tender and the red onion adds a nice crunch.",
        author: "Emma Smith",
      },
    ],
  },
  {
    id: 6,
    title: "Meat Lovers Pizza",
    description:
      "Hearty pizza with tomato sauce, mozzarella, and assorted meats.",
    price: 15,
    ingredients: ["tomato sauce", "mozzarella", "meats"],
    veg: false,
    rating: 4.9,
    specialty: "",
    reviews: [
      {
        id: 1,
        text: "This pizza is a meat lovers dream! The toppings are generous and delicious.",
        author: "Frank Johnson",
      },
      {
        id: 2,
        text: "I can't get enough of this pizza! The crust is crispy and the meats are well seasoned.",
        author: "Grace Johnson",
      },
    ],
  },
];

export default foodData;
