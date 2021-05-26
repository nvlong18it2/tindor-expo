
import React, { useState, useEffect } from "react";
import firebase from "../../firebase.config"
import { DataT } from "../../types";
require("firebase/firestore");
const db = firebase.firestore();
const IMAGE_01 = "https://gonatour.vn/vnt_upload/news/05_2020/hinh_anh_cac_dia_danh_tren_dong_tien_viet_nam_1.jpg";

  const data : DataT[] = [{
    id: 1,
    name: "Loading...",
    isOnline: true,
    match: "100",
    description:
      "Loading...",
    message:
      "",
    image: IMAGE_01,
  },
  ]

export default data;

