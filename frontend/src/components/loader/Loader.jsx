import { Spinner } from "@vechaiui/react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-wrap w-full p-8 space-x-2">
      <Spinner className="text-primary-500" />
    </div>
  );
};

export default Loader;
