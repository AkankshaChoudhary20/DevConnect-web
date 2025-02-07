import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "./utils/requestsSlice";
import axios from "axios";
import { BASE_URL } from "./utils/constants";

const Requests = () => {
  const requests = useSelector((store) => store.requests);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log("requests received--->", res?.data?.data);

      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      // if (err?.status === 401) {
      //   navigate("/login");
      // }

      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) {
    return;
  }

  if (requests?.length === 0) {
    <h1>No Requests Found</h1>;
  }

  return (
    <div className="flex justify-center my-10">
      <h1 className="text-bold text-2xl ">Requests !</h1>
      {requests?.map((request) => {
        const { firstName, lastName, age, gender } = request?.fromUserId;
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
            <div className="flex flex-right  m-20">
              <button className="btn btn-primary">Accept</button>
              <button className="btn btn-secondary">Reject</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
