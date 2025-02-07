import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "./utils/connectionsSlice";
import axios from "axios";
import { BASE_URL } from "./utils/constants";

const Connections = () => {
  const connections = useSelector((store) => store.connections);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log("Connectins--->", res?.data?.data);

      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      // if (err?.status === 401) {
      //   navigate("/login");
      // }

      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) {
    return;
  }

  if (connections?.length === 0) {
    <h1>No Connections Found</h1>;
  }

  return (
    <div className="flex justify-center my-10">
      <h1 className="text-bold text-2xl ">Connections</h1>
      {connections?.map((connection) => {
        const { firstName, lastName, age, gender } = connection;
        return (
          <div className="flex m-20">
            <div>
              <div>
                <img
                  className="w-20 h-20"
                  alt="photo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Mickey-Mouse.png/800px-Mickey-Mouse.png"
                />
              </div>
            </div>
            <div>
              <h1>{firstName + " " + lastName + " " + age + " " + gender}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
