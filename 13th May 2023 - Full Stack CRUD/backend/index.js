const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3001;

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://aquibajanikh:aquibajanikh@cluster0.05kygrt.mongodb.net/productData?retryWrites=true&w=majority"
);

const app = express();

// let allProducts = [
//   {
//     id: 1,
//     title: "Shampoo",
//     category: "Hair Care",
//     price: 500,
//     productImg:
//       "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     reviews: [
//       {
//         reviewID: 1,
//         reviewedBy: "John",
//         reviewContent:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia architecto, sed eligendi harum ratione similique earum suscipit reiciendis veniam ea voluptas pariatur amet dolores, excepturi quos iure corporis rerum necessitatibus?",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Toothbrush",
//     category: "Skin Care",
//     price: 200,
//     productImg:
//       "https://plus.unsplash.com/premium_photo-1676635271060-7aa7483781c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//     reviews: [
//       {
//         reviewID: 1,
//         reviewedBy: "Jane",
//         reviewContent:
//           "This toothbrush is great! It's gentle on my teeth and gums, but still effective at cleaning.",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Sunscreen",
//     category: "Skin Care",
//     price: 350,
//     productImg:
//       "https://images.unsplash.com/photo-1594055103006-7871176f1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     reviews: [
//       {
//         reviewID: 1,
//         reviewedBy: "David",
//         reviewContent:
//           "I love this sunscreen! It goes on smoothly and doesn't leave a white cast like some other sunscreens do.",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Deodorant",
//     category: "Hair Care",
//     price: 250,
//     productImg:
//       "https://images.unsplash.com/photo-1608529305888-7bd2628c1d49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     reviews: [
//       {
//         reviewID: 1,
//         reviewedBy: "Sarah",
//         reviewContent:
//           "This deodorant is great! It smells nice and keeps me feeling fresh all day long.",
//       },
//     ],
//   },
//   {
//     id: 6,
//     title: "Facial Moisturizer",
//     category: "Skin Care",
//     price: 800,
//     productImg:
//       "https://images.unsplash.com/photo-1591134608223-67005960e763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     reviews: [],
//   },
//   {
//     id: 7,
//     title: "Protein Powder",
//     category: "Hair Care",
//     price: 1200,
//     productImg:
//       "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     reviews: [
//       {
//         reviewID: 1,
//         reviewedBy: "Mark",
//         reviewContent:
//           "This protein powder is great! It mixes easily and has a smooth, delicious taste.",
//       },
//       {
//         reviewID: 2,
//         reviewedBy: "Kate",
//         reviewContent:
//           "This facial moisturizer is amazing! It keeps my skin feeling soft and hydrated all day long.",
//       },
//       {
//         reviewID: 3,
//         reviewedBy: "Sarah",
//         reviewContent:
//           "This deodorant is great! It smells nice and keeps me feeling fresh all day long.",
//       },
//     ],
//   },
// ];

const Product = mongoose.model("Product", {
  id: Number,
  title: String,
  category: String,
  price: Number,
  productImg: String,
});

// allProducts.forEach((product) => {
//   product = new Product({
//     id: product.id,
//     title: product.title,
//     category: product.category,
//     price: product.price,
//     productImg: product.productImg,
//   });
//   product.save();
// });

app.use(bodyParser.json());
app.use(cors());

app.get("/", async function (req, res) {
  let result = await Product.find({});
  res.json(result);
});

app.get("/product/:id", async function (req, res) {
  let result = await Product.findOne({ id: req.params.id }).exec();
  console.log(result);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
