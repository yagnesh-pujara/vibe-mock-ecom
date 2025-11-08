import { useQuery } from "@tanstack/react-query";
import { productsApi } from "@/api";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

const Products = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productsApi.getAll,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
