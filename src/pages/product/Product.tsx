import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

export default function Product() {
  return (
    <div>
      <Single {...singleProduct} />
    </div>
  );
}
