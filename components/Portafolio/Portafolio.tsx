import React from "react";
import Tilt from "react-vanilla-tilt";
import axios from "axios";

export const Portafolio = () => {
  const [proyects, setProyects] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://docs.google.com/spreadsheets/d/168w2UO0emiLD9TKy00D65mCr5W3B6zz3hhsndK-rMfU/gviz/tq?tqx=out:json"
      )
      .then((response) => {
        const newData = response.data.replace("/*O_o*/", "");
        const startIdx = newData.indexOf("{"); // Find the starting index of the JSON object
        const jsonString = newData.substring(startIdx, newData.length - 2); // Extract the JSON object

        const parsedData = JSON.parse(jsonString);

        // Mapear los datos necesarios
        const dataArray = parsedData.table.rows.slice(1).map((row) => {
          const img = row.c[0].v;
          const title = row.c[1].v;
          return { img, title };
        });
        setProyects(dataArray);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {proyects.map((pro: any) => (
        <div className="my-5 mx-5">
          <Tilt
            style={{
              backgroundColor: "trasparent",
              width: "20rem",
              height: "10rem",
              border: "2px solid white",
              borderRadius: "10px",
            }}
          >
            <div className="relative">
              <img
                src={pro?.img}
                alt="as"
                width="400"
                className="rounded"
                style={{ height: "9.7rem" }}
              />
              <p className="text-red-200 absolute bottom-0 w-full text-center bg-black/50 rounded-b">
                {pro?.title}
              </p>
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  );
};
