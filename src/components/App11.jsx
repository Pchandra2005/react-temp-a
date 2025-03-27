import React from "react";
import { useNavigate,Link } from "react-router-dom";
export default function App11() {
  const Navigate = useNavigate();
  const handleSubmit = () => {
    Navigate("/app5");
  };
  return (
    <div>
      <h3>This is App11</h3>
      <button onClick={handleSubmit}>Goto App5</button>
      <p>
        <Link to="/app5">App5</Link>
      </p>
    </div>
  );
}