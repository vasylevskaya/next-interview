import ProductCard from "./ProductCard";
import { products } from '../assets/product'

type Props = {

}

export default function Products({ }: Props) {
  return <div className="grid grid-cols-3 gap-4 p-6">
    {products.map((product) => (
      <ProductCard product={product} />
    ))}
  </div>;
}