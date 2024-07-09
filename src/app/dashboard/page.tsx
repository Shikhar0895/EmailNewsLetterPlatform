"use client";
import React from "react";
import Dashboard from "../modules/dashboard";
import withAuth from "./withAuth";

const page = () => {
  return <Dashboard />;
};

export default withAuth(page);
