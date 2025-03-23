"use client";
import Image from "next/image";
import products from "../COMMON/products";
import { useEffect, useState } from "react";

interface Product {
  categorie: string;
  title: string;
  Description: string;
  price: string;
  width?: string;
  height?: string;
  additions?: { title: string; price: string }[];
  subCategorie?: string;
  product: { src: string };
}

interface CardProps {
  categories: string;
}

export default function Home({ categories }: CardProps) {
  const [count, setCount] = useState<Product[]>([]);
  const [categorie, setCategorie] = useState(categories || "home");

  useEffect(() => {
    setCategorie(categories);
    setCount(products.products);
  }, [categories]);

  return (
    <div className="md:grid md:grid-cols-2 xl:grid xl:grid-cols-4 lg:grid xs:w-full lg:grid-cols-3 sm:grid sm:grid-cols-1 sm:gap-14 xs:grid xs:justify-items-center xs:grid-cols-1 gap-4 px-10 my-5 dark:bg-darkPrimary">
      {count
        .filter(
          (product) =>
            product.categorie === categorie ||
            product.subCategorie === categorie ||
            categorie === "home"
        )
        .map((e, i) => (
          <div
            key={i}
            style={{boxShadow:'0 1px 7px 5px #cf7e35'}}
            className=" bg-primaryColor h-full sm:w-80 xs:w-80 md:w-72 lg:w-72 xl:w-72   py-2 shadow-xl rounded-2xl shadow-shadowCard transition duration-300 dark:bg-darkSecondary dark:text-darkFontHero"
          >
            <div className=" h-96 flex items-center justify-center">
              <Image
                src={e.product?.src}
                className={`${
                  e.height ? `h-auto` : `h-96`
                } p-1 w-full h-96 object-cover rounded-2xl`}
                width={2239}
                height={2799}
                alt={e.title}
              />
            </div>
            <div className="">
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="px-4 py-2  text-titelCard dark:text-darkText"
              >
                <div className="text-nowrap font-bold font-hk">
                  {e.title}
                </div>
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="px-1 font-hk flex gap-1  text-gray items-center font-bold  dark:text-darkText"
                >
                  {e.price} <span className="text-shadowCard">ل.س</span>
                </div>
              </div>
              {e.additions && e.additions.length > 0 && (
                <div className="px-4 mt-2">
                  {e.additions.map((addition, index) => (
                    <div
                      key={index}
                      className=" text-gray font-hk font-bold dark:text-darkText mb-1 flex gap-1"
                    >
                      <span className="">{addition.title}</span>:{" "}
                      {addition.price}{" "}
                      <span className="text-shadowCard">ل.س</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="px-4 font-hk py-2 text-lg text-gray dark:text-darkText">
                {e.Description}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
