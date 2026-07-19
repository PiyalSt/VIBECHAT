import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import assets from "../assets/assets";

const UserList = () => {
  const db = getDatabase();
  let userRef = ref(db, "users/");
  const [resiveData, setResiveData] = useState([])

  useEffect(() => {
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const users = Object.entries(data || {}).map(([id, user]) => ({
        id,
        ...user
      }))

      setResiveData(users)
    });
  }, []);


  return (
    <>
      <div className="flex flex-col gap-4">
        {resiveData.map((user, index) => (
          <div
            key={index}
            className="py-2 px-4 hover:bg-slate-800/60 cursor-pointer rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="w-14 rounded-full"
                  src={assets.avatar_icon}
                  alt=""
                />
              </div>
              <div className="mb-2">
                <h4 className="font-nunito font-normal text-lg text-secondText">
                  {user.username}
                </h4>
                <p className="font-nunito font-normal text-xs text-secondText/50">
                  {user.useremail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
