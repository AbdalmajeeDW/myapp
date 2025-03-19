"use client";
import Image from "next/image";
import products from "../COMMON/products";
import { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Product {
  categorie: string;
  title: string;
  Description: string;
  price: string;
  additions?: { title: string; price: string }[]; // ✅ تعديل `additions` إلى مصفوفة
  product: {
    src: string;
  };
}

interface CardProps {
  categories: string;
}

export default function Home(props: CardProps) {
  const [count, setCount] = useState<Product[]>([]);
  const [categorie, setCategorie] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setCount(products.products);
    setCategorie(props.categories ?? "home");
  }, [props.categories]);

  const toggleLayer = (product: Product) => {
    setSelectedProduct(selectedProduct === product ? null : product);
  };

  return (
    <div className="md:grid md:grid-cols-2 xl:grid xl:grid-cols-4 lg:grid xs:w-full lg:grid-cols-3 sm:grid sm:grid-cols-2 sm:gap-14 xs:grid xs:justify-items-center xs:grid-cols-1 gap-4 px-10 my-5 dark:bg-darkPrimary">
      {count.map(
        (e, i) =>
          (e.categorie === categorie || categorie === "home") && (
            <div
              key={i}
              className="relative bg-white h-full w-80  py-2 shadow-xl rounded-2xl transition duration-300 dark:bg-darkSecondary dark:text-darkFontHero"
            >
              <Image
                src={e.product.src}
                className="h-72 py-0 p-2 rounded-2xl object-fill"
                width={300}
                height={50}
                alt={e.title}
              />
              <div className="flex justify-between flex-col">
                <div className="px-4 py-2  text-titelCard flex justify-between items-center dark:text-darkText">
                  <div className="text-nowrap font-bold text-xl">{e.title}</div>
                  <div className="px-6 flex text-z text-gray font-bold dark:text-darkGray">
                    {e.price} <span className="text-shadowCard px-1">ل.س</span>
                  </div>
                </div>
                <div className="px-6 flex text-lg text-graydark:text-darkGray"></div>{" "}
                {e.additions && e.additions.length > 0 && (
                  <div className="px-4 mt-2">
                    {/* <h3 className="text-lg font-semibold text-gray-700 dark:text-darkText">الإضافات:</h3> */}
                    {e.additions.map((addition, index) => (
                      <div
                        key={index}
                        className="text-lg text-gray dark:text-darkGray mb-1 flex gap-1"
                      >
                        <span className="text-nowrap">{addition.title}</span>:{" "}
                        {addition.price}{" "}
                        <span className="text-shadowCard">ل.س</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="px-4 py-2 text-lg text-gray dark:text-darkGray">
                  {e.Description}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
