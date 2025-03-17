"use client";
import Image from "next/image";
import products from "../COMMON/products";
import { useEffect, useState } from "react";

interface Product {
  categorie: string;
  title: string;
  Description: string;
  price: string;
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

  useEffect(() => {
    setCount(products.products);
    if (props.categories === undefined) {
      setCategorie("home");
    } else {
      setCategorie(props.categories);
    }
  }, [props.categories]);

  let data =
    count &&
    count.map((e, i) => (
      <>
        {e.categorie === categorie ? (
          <div
            className="bg-white h-full w-72 py-2 shadow-xl shadow-shadowCard rounded-2xl transition ease-in-out delay-150  duration-300 font-[Poppins] "
            key={i}
          >
            <Image
              src={e.product.src}
              className="h-72 py-0  p-2 rounded-2xl object-fill"
              width={300}
              height={50}
              alt={e.title}
            />
            <div className="flex justify-between  flex-col flex-1 flex-grow-1">
              <div className="px-6 py-2  text-2xl font-bold text-titelCard flex-1">{e.title}</div>
              <div className="px-6  flex align flex-1  text-lg text-gray ">
                {e.price}<div className='text-shadowCard px-1 flex '>ل.س</div>
              </div>
              <div className="px-6 py-2  text-lg flex flex-col flex-1 text-gray">
                {e.Description}
              </div>
            </div>
              
          </div>
        ) : categorie === 'home' ?  <div
        className="bg-white h-full w-72 py-2 shadow-xl shadow-shadowCard rounded-2xl transition ease-in-out delay-150  duration-300 "
        key={i}
      >
        <Image
          src={e.product.src}
          className="h-72 py-0  p-2 rounded-2xl object-fill"
          width={300}
          height={50}
          alt={e.title}
        />
        <div className="flex justify-between  flex-col flex-1 flex-grow-1">
          <div className="px-6 py-2 text-black text-2xl font-bold text-titelCard flex-1">{e.title}</div>
          <div className="px-6  flex align flex-1  text-lg text-gray ">
            {e.price}<div className='text-shadowCard px-1 flex '>ل.س</div>
          </div>
          <div className="px-6 py-2 text-black text-lg flex flex-col flex-1 text-gray font-[Poppins]">
            {e.Description}
          </div>
        </div>
          
      </div>:null}
      </>
    ));

  return (
    <div className="md:grid  md:grid-cols-2   xl:grid xl:grid-cols-4 lg:grid xs:w-full lg:grid-cols-3 sm:grid sm:grid-cols-2 sm:gap-14  xs:grid xs:justify-items-center xs:grid-cols-1 gap-4 px-10 my-5">
      { data}
    </div>
  );
}
