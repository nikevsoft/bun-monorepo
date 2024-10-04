import { useEffect, useState } from "react";
import "./App.css";

import { type AppType } from "../../server/src/index";
import { hc } from "hono/client";

const client = hc<AppType>("/");

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      // types are not getting inferred for my client :(
      const res = await client.api["expenses"].$get();
      const { total } = await res.json();
      setCount(total);
    })();
  }, []);

  return (
    <>
      <strong>{count}</strong>
    </>
  );
}

export default App;
