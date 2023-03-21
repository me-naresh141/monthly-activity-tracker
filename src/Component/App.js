import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
const App = () => {
  const [data, setData] = useState([]);
  //  get data from localStorage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("list"));
    if (items) {
      setData(items);
    }
  }, []);
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let day = new Date(year, month, 0).getDate();
  // addActivity
  const addActivity = (e) => {
    e.preventDefault();
    let arr = [];
    if (e.target[0].value) {
      for (let i = 1; i <= day; i++) {
        arr.push({
          index: i,
          isActive: false,
        });
      }
    }
    if (e.target[0].value) {
      setData([
        ...data,
        {
          activityN: e.target[0].value,
          days: arr,
          monthN: [
            "January",
            "February",
            "March",
            "April",
            "may",
            "June",
            "july",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNum: month,
        },
      ]);
    }

    e.target[0].value = "";
  };

  // handle active
  const handleActive = (e, i) => {
    let updateData = data.map((obj, index) => {
      if (index === i) {
        obj.days[e].isActive = !obj.days[e].isActive;
      }
      return obj;
    });
    setData([...updateData]);
  };

  // handle delete
  const handleDelete = (index) => {
    let deletedObj = data.splice(index, 1);
    setData([...data]);
  };

  // set  data in local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(data));
  }, [data]);
  return (
    <>
      <Header addActivity={addActivity} />
      <Main
        data={data}
        handleActive={handleActive}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default App;
