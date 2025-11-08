import { CartItem } from "@/contexts/CartContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard = ({ item }: CartItemCardProps) => {
  const { updateQuantity, removeItem } = useCart();

  const handleDecrease = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  const subtotal = item.price * item.quantity;

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4 p-4">
        {/* Product Image */}
        <div className="w-full sm:w-32 aspect-square bg-secondary rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg mb-1 text-foreground">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
              {item.description}
            </p>
            <p className="text-lg font-semibold text-primary">
              ${item.price.toFixed(2)}
            </p>
          </div>

          {/* Quantity Controls and Remove Button */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleDecrease}
                disabled={item.quantity <= 1}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <span className="font-semibold text-lg min-w-[2rem] text-center">
                {item.quantity}
              </span>
              
              <Button
                variant="outline"
                size="icon"
                onClick={handleIncrease}
                className="h-8 w-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Subtotal</p>
                <p className="font-bold text-lg text-foreground">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              
              <Button
                variant="destructive"
                size="icon"
                onClick={handleRemove}
                className="h-8 w-8"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItemCard;
