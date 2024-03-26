import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SearchBar({ searchDisplay }) {
  return (
    <div
      className={`flex w-full max-w-sm items-center space-x-2 ${searchDisplay}`}
    >
      <Input type="email" placeholder="Buscar" />
      <Button type="submit" className="bg-[#46FCD6] hover:bg-[#ffffff] p-2">
        <img className="fill-[#46FCD6]" src="./lupa.svg" alt="" />
      </Button>
    </div>
  );
}

export default SearchBar;
