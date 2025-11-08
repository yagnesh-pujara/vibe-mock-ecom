import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "@/contexts/CartContext";

interface ReceiptModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  customerName: string;
  customerEmail: string;
}

const ReceiptModal = ({
  open,
  onOpenChange,
  orderNumber,
  items,
  subtotal,
  tax,
  total,
  customerName,
  customerEmail,
}: ReceiptModalProps) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    onOpenChange(false);
    navigate("/products");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <DialogTitle className="text-2xl">Order Confirmed!</DialogTitle>
          <DialogDescription>
            Thank you for your purchase, {customerName}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Order Details */}
          <div className="bg-secondary p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Order Number</p>
            <p className="font-mono font-semibold text-lg">{orderNumber}</p>
          </div>

          <div className="bg-secondary p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{customerEmail}</p>
          </div>

          <Separator />

          {/* Order Items */}
          <div>
            <h3 className="font-semibold mb-3">Order Summary</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-foreground/80">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Totals */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax (10%)</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Action Button */}
          <Button
            onClick={handleContinueShopping}
            className="w-full"
            size="lg"
          >
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReceiptModal;
