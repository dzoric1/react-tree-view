import React from "react";
import Layout from "./components/Layout";
import { Tree } from "./components/Tree";
import data from "./data3.json";


const App = () => {
  return (
    <Layout>
      <Tree root={data} />
      <Tree root={data} />
    </Layout>

  );
};

export default App