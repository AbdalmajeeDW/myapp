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
  console.log(categorie,'cat');
  

  useEffect(() => {
    if (categories !== categorie) {
      setCategorie(categories);
    }
  }, [categories]);
  
  useEffect(() => {
    setCount(
      products.products.filter(
        (product) =>
          product.categorie === categorie ||
          product.subCategorie === categorie ||
          categorie === "home"
      )
    );
  }, [categorie]);

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
            style={{boxShadow:'0 1px 7px 4px #cf7e35'}}
            className=" bg-white h-full sm:w-80 xs:w-80 md:w-72 lg:w-72 xl:w-72   py-2 shadow-xl rounded-2xl shadow-shadowCard transition duration-300 dark:bg-darkSecondary dark:text-darkFontHero"
          >
            <div className=" h-96 flex items-center justify-center">
              <img
              key={`${e.product.src}-${categorie}`}
                src={e.product.src}
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
               
              className={`px-2 py-2 flex ${e.title.length>=20 ?' flex-col':'items-center'}  text-titelCard  dark:text-darkText`}
              >
                <div className=" font-bold font-hk text-xl ">{e.title}</div>
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="px-1 font-hk flex gap-1  text-xl text-gray items-center font-bold  dark:text-darkText"
                >
                  {e.price} <span className="text-shadowCard font-hk text-xl  ">ل.س</span>
                </div>
              </div>
              {e.additions && e.additions.length > 0 && (
                <div className="px-2 mt-2">
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
              <div className="px-2 font-hk py-2 text-lg text-gray dark:text-darkText">
                {e.Description}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
