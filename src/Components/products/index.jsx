import ProductItem from "./Components/product-item";
import "./style.css";

function ProductList({ name, job, listOfProducts, country, district, city }) {
  // console.log(props);
  // const {name,job}=props;

  const info = true;

  function returnInfo(getinfo) {
    return getinfo ? (
      <h4>
        country={country},district={district}
      </h4>
    ) : (
      <h4>Hello World</h4>
    );
  }

  const renderInfo = info ? <h4>city={city}</h4> : <h4>madurai</h4>;

  let returnText = null;
  if (info) {
    returnText = <h4>city={city}</h4>;
  } else {
    returnText = <h4>hello india</h4>;
  }

  return (
    <div>
      <h3 className="title">E-Commerce Project</h3>
      {/* <ProductItem/> */}

      {/* method 1 */}
      {info ? (
        <h4>
          name={name},job={job}
        </h4>
      ) : (
        <h4>jobless person</h4>
      )}
      {/* method 2 */}
      {returnInfo(info)}
      <h5 style={{ fontSize: "15px" }}>
        my name is {name} and my job is {job}
      </h5>
      {/* method 3 */}
      {renderInfo}
      {/* method 4 */}
      {returnText}
      <ol>
        {listOfProducts.map((item, index) => (
          //   <li key={index}>{item}</li>
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ol>
    </div>
  );
}

export default ProductList;
