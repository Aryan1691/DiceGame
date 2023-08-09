import React, { useEffect, useState } from "react";

const Practice = () => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(null);

  useEffect(() => {
    const FetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b63caa8fd95c0826b370a0db4220a70d&units=metric`;
      const response = await fetch(url);
      const convert = await response.json();
      setValue(convert.main);
      console.log(convert.main);
    };
    FetchApi();
  }, [search]);
  return (
    <>
     <div className="container">
     <input
        type="text"
        placeholder="enter something"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      {!value ? (
        <div>Nothing here</div>
      ) : (
        <div>
          <div>Humidity : {value.humidity}</div>
          <div>Pressue : {value.pressure}</div>
          <div>temp : {value.temp}</div>
          <div>temp_max : {value.temp_max}</div>
          <div>temp_min : {value.temp_min}</div>
        </div>
      )}
     </div>
    </>
  );
};

export default Practice;
