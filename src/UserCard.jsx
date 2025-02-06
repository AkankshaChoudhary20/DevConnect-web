import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender } = user;
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1047556886/photo/3d-render-female-mannequin-head-hand-fashion-concept-isolated-object-minimal-yellow.jpg?s=612x612&w=0&k=20&c=ZK0mcIzYmNRl-cahK1akECCjG2QjWjyP07_MoZRvxrw="
            alt={firstName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + "" + lastName}</h2>
          {age && gender && <p>{age + "," + gender}</p>}

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Ingore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
