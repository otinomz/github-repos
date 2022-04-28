import { Navbar } from "./components";
import Layout from "./layout";

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Layout/>
      </div>
    </>
  )
}

export default App;
