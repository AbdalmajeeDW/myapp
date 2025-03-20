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
  additions?: { title: string; price: string }[]; 
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
console.log(count);

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
              className="relative bg-white h-full w-72  py-2 shadow-xl rounded-2xl shadow-shadowCard transition duration-300 dark:bg-darkSecondary dark:text-darkFontHero"
            >
              <div className="">

              <Image
                src={e.product.src}
                className={`${e.product.src.includes('/logo_MrCoffe2.png')?`h-52 w-44`:`h-72`} w-full p-1 py-0 rounded-2xl object-fill`}
                width={300}
                height={50}
                alt={e.title}
              />
              </div>
              <div className="flex justify-between flex-col">
                <div className="px-4 py-2  text-titelCard flex  items-center dark:text-darkText">
                  <div className="text-nowrap font-bold  text-xl">{e.title}</div>
                  <div className="px-2 flex gap-1  text-gray font-bold dark:text-darkText">
                    {e.price} <span className="text-shadowCard">ل.س</span>
                  </div>
                </div>
                <div className="px-6 flex text-lg text-graydark:text-darkGray"></div>{" "}
                {e.additions && e.additions.length > 0 && (
                  <div className="px-4 mt-2">
                    {/* <h3 className="text-lg font-semibold text-gray-700 dark:text-darkText">الإضافات:</h3> */}
                    {e.additions.map((addition, index) => (
                      <div
                        key={index}
                        className="text-lg text-gray dark:text-darkText mb-1 flex gap-1"
                      >
                        <span className="text-nowrap">{addition.title}</span>:{" "}
                        {addition.price}{" "}
                        <span className="text-shadowCard">ل.س</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="px-4 py-2 text-lg text-gray dark:text-darkText">
                  {e.Description}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
