//importing react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import ChartsMaps from "./pages/ChartsMaps";
import Sidebar from "./components/Sidebar";
import ChartMaps from "./pages/ChartMaps";

function App() {
  const client = new QueryClient();
  return (
    <div className="flex">
      <QueryClientProvider client={client}>
        <Router>
          <Sidebar />
          <Routes>
            {/* home route */}
            <Route path="/" element={<Home />} />
            {/* create contact route  */}
            <Route path="/contact" element={<Contact />} />
            {/* Maps and charts route  */}
            {/* <Route path="/charts" element={<ChartsMaps />} /> */}
            <Route path="/charts" element={<ChartMaps />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;

//I am sorry for not adding multiple styles because of much less and I thought that for a react project it is much less likely to use styles but I have done the work as mentioned in the document. Thankyou for giving me this oppurtunity, it really means a lot to me. I will be waiting for further actions. Thankyou!
