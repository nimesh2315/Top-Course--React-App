import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";
import { apiUrl , filterData} from "./data";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // Output
      setCourses(output.data);
    }
    catch(error) {
      toast.error("Issue in Network");
    }
    setLoading(false);
  }

  // Render first time only
  useEffect( () => {
    fetchData();
  }, [])


  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
        <Navbar />
      </div>

      <div>
        <div>
          <Filter filterData = {filterData}
            category = {category}
            setCategory = {setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center item-center min-h-[50vh]">
          {
            loading ? (<Spinner />) : (<Cards courses = {courses} category = {category}/>)
          }
        </div>
      </div>

    </div>
  );
};

export default App;
