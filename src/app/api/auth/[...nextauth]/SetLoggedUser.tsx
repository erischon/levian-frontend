"use client";

import { useDispatch } from "react-redux";

import { setLoggedUser } from "@/redux/features/userSlice";

export default function SetLoggedUser() {
  const dispatch = useDispatch();

  const userData = {
    id: "1",
    name: "John Doe",
    email: "",
    image: "",
    providerId: "",
  };

  dispatch(setLoggedUser(userData));
}
