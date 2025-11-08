import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define the Product interface based on our backend model
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem, items } = useCart();
  const { toast } = useToast();
  const [isAdding, setIsAdding] = useState(false);

  const isInCart = items.some((item) => item._id === product._id); // Updated to use _id

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product);

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });

    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
      <div className="relative overflow-hidden aspect-square bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-foreground line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        <p className="text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
          variant={isInCart ? "secondary" : "default"}
        >
          {isAdding ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Added!
            </>
          ) : isInCart ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              In Cart
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
