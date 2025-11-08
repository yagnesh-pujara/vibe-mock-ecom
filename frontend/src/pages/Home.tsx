import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, ShieldCheck, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";

const Home = () => {
  const features = [
    {
      icon: Package,
      title: "Quality Products",
      description: "Curated selection of premium items for every need"
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Quick delivery right to your doorstep"
    },
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      description: "Safe and secure checkout process"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-muted-foreground">
            Shop the latest trends and find everything you need in one place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-lg">
              <Link to="/products">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link to="/cart">
                View Cart
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center space-y-3 p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center space-y-6 bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Shopping?
          </h2>
          <p className="text-lg opacity-90">
            Join thousands of happy customers and find your perfect products today
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/products">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
