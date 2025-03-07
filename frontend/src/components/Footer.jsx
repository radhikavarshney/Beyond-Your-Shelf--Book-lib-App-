import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="text-[rgb(37,36,34)] bg-[#F5F5F5] px-4 md:px-12 md:text-lg ">
      <h3 className="border-t border-[#252422] pt-4 pb-6 italic">
        Designed and developed by{" "}
        <Link
          to={"https://github.com/radhikavarshney"}
          className="text-[#944424]"
        >
          Radhika Varshney
        </Link>
      </h3>
    </div>
  );
}
