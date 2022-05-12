import React from "react";
import About from "../../About/About";
import StoreManage from "../../StoreManage/StoreManage";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Items></Items>
      <StoreManage></StoreManage>
      <About></About>
    </>
  );
}
