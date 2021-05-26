import React, { useState, useEffect } from "react";

import {ProfileItem, } from "../components";

const Profile = () => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name,
  } = {
    age : "12",
    image: "https://gonatour.vn/vnt_upload/news/05_2020/hinh_anh_cac_dia_danh_tren_dong_tien_viet_nam_1.jpg",
    info1: "abc",
    info2: "abc",
    info3: "abc",
    info4: "abc",
    location: "Da Nang",
    match: "10",
    name: "Tung",
  }
  return (

    <ProfileItem
    age={age}
    image={image}
    location={location}
    info1={info1}
    info2={info2}
    info3={info3}
    info4={info4}
    match={match}
    name={name}

  />

  );
};

export default Profile;
