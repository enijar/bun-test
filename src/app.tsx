import React from "react";

export default function App() {
  React.useEffect(() => {
    console.log("App");
  }, []);

  return (
    <main>
      <h1>App</h1>
    </main>
  );
}
