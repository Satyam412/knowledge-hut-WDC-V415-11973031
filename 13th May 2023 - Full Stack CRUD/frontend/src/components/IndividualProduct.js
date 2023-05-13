import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const IndividualProduct = () => {
  const [productData, setProductData] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/product/${id}`)
      .then((res) => setProductData(res.data));
  }, []);

  return (
    <>
      {/* {productData &&
        productData.map((product) => ( */}
      <div>
        <img src={productData.productImg} />
        <h2>{productData.title}</h2>
        <h3>{productData.price}</h3>
        {/* <div>
              {productData.reviews &&
                productData.reviews.map(({ reviewedBy, reviewContent }) => (
                  <div>
                    <p>{reviewedBy}</p>
                    <p>{reviewContent}</p>
                  </div>
                ))}
            </div> */}
        <button>Add To Cart</button>
      </div>
      {/* ))} */}
    </>
  );
};

export default IndividualProduct;
