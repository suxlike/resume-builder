import { useState } from "react";

const Name = () => {
  const [fullName, setFullName] = useState("");
  return (
    <div>
      <h2>{fullName}</h2>
    </div>
  );
};

export default Name;
