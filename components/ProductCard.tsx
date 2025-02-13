import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Product } from "@/assets/product";

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return <Card className="p-3 bg-black text-white border-grey-500">
    <CardContent>
      <div className="flex justify-between g-2">
        <CardTitle className="text-2xl mb-5">{product.name}</CardTitle>
        <Badge variant="outline" className="bg-white">
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </Badge>
      </div>
      <p className="text-2xl font-bold mb-3">{`${product.price}€`}</p>
      <p className="mb-3">{product.category}</p>
      <CardDescription className="mb-3 text-white">
        {product.description}
      </CardDescription>
      <div className="flex justify-between g-2">
        <p>{product.brand}</p>
        <p>{product.rating}</p>
      </div>
    </CardContent>
  </Card>;
}