import React from "react";
import Layout from "./components/Layout";
import { Tree } from "./components/Tree";
import data from "./data.json";


const App = () => {
  return (
    <Layout>
      <Tree root={data.body} />
      <Tree root={data.body} />
    </Layout>

  );
};

export default App