import React from "react";

export default function BlogCard(props) {
  return (
    <div className= "p-8">
      <div className={`${props.card.bd} px-5 `}>
        <div className="rounded-lg overflow-hidden p-3">
          <img
            class=" rounded w-full  h-[50vh] transition duration-200 ease-in-out transform hover:scale-110 cursor-pointer"
            src={props.card.src}
            alt="content"
          />
        </div>
        <h3 class="tracking-widest text-sm font-medium title-font ">{props.card.date}</h3>
        <p class="leading-relaxed text-lg font-bold mt-4 duration-300 transform hover:text-red-600">{props.card.head}</p>
      </div>
    </div>
    
  );
}
