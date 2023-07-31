"use client";
import { useEffect, useState } from "react";
import api from "@/api/index";
import { ProductPost } from "@/types/types";
import { ProductCard } from "@/components/ProductCard";
import useCartStore from "@/modules/store";
import Swal from "sweetalert2";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductPost[] | []>([]);
  const { addToCart, cart } = useCartStore();

  const handleAddToCart = (product: ProductPost) => {
    addToCart(product);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product Added",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get("/product");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);
  console.log(cart);

  if (loading) {
    return <div>loading....</div>;
  }

  return (
    <div className="border-[5px] border-[#9288F8] rounded-lg w-[90vw] bg-[#322653]">
      <div className="flex flex-wrap justify-center">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            addToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
