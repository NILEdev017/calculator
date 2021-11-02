import React, { useState } from "react";

export default function Display() {
  const [output, setOutput] = useState("");
  return (
    <div className="display">
      <form>
        <input
          disabled
          type="text"
          value={output}
          readOnly={true}
          style={{ textAlign: "right" }}
        />
      </form>
    </div>
  );
}
