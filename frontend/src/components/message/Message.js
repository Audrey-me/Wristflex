import { Alert } from "@vechaiui/react";
import React from "react";

const Message = () => {
  return (
    <div className="flex flex-col items-center">
      <Alert variant="solid" className="bg-[#a67a68] text-[white] items-center">
       Invalid Credentials
        <Alert.CloseButton />
      </Alert>
    </div>
  );
};

export default Message;
