import { useQuery } from "@tanstack/react-query";
import { productsApi } from "@/api";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

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
