"use client";
import React, { useEffect } from "react";
import "../../../public/assets/css/style.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { GrSearch } from "react-icons/gr";
import { LuMouse } from "react-icons/lu";
import { GoArrowDown } from "react-icons/go";
import { TypeAnimation } from "react-type-animation";

export default function Page() {
  useEffect(() => {
    // Function to load a script
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.body.appendChild(script);
      });
    };

    // Load all the scripts
    const loadAllScripts = async () => {
      try {
        await loadScript("assets/js/jquery-2.2.1.min.js");
        await loadScript("assets/js/bootstrap.min.js");
        await loadScript("assets/js/jquery.validate.min.js");
        await loadScript("assets/js/jquery.scrollbar.min.js");
        await loadScript("assets/js/jquery.mousewheel.min.js");
        await loadScript("assets/js/owl.carousel.min.js");
        await loadScript("assets/js/pace.min.js");
        await loadScript("assets/js/custom.js");
        // All scripts are loaded, now you can do something with them
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadAllScripts();
  }, []);

  return (
    <>
      <div className="page-wrapper relative">
        <div className="loading-overlay" />
        <div className="absolute z-50 bottom-[30px] right-1/2 translate-x-1/2 hidden flex-col items-center justify-center gap-5 xl:flex ">
          <LuMouse size={30} />
          <GoArrowDown size={30} className="arrow-icon" />
        </div>
        <div className="slider-navigation">
          <div className="slider-pager owl-carousel md:flex hidden "></div>

          <div className="slider-controls ">
            <a href="#" className="prev ">
              <GrFormPrevious size={25} />
            </a>
            <a href="#" className="next">
              <GrFormNext size={25} />
            </a>
            <a href="#" className="zoom-out ">
              <GrSearch size={20} />
            </a>
          </div>
        </div>
        {/*end slider-navigation*/}
        <div className="outer-wrapper">
          <div className="inner-wrapper">
            <div
              className="slide first"
              id={"0"}
              data-position-x={0}
              data-position-y={0}
              data-position-z={1}
              data-rotation={0}
            >
              <div className="main-title">
                <div className="main-title-wrapper">
                  <h1 className="">
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Sol Media | Kỷ Yếu Lâm Đồng",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        "Chụp Ảnh Kỷ Yếu",
                        1000,
                        "Lưu Giữ Kỷ Niệm",
                        1000,
                        "Chia Sẻ Hạnh Phúc",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      className="text-white text-[40px] inline-block md:text-[60px]"
                      repeat={Infinity}
                    />
                  </h1>
                  <h2>giới thiệu sơ sơ</h2>
                  <a href="#" className="btn btn-default next">
                    Xem Allbum
                  </a>
                </div>
              </div>
              <div className="image" data-background="assets/img/0.jpg" />
              {/*end image*/}
            </div>
            {/*end slide*/}
            <div className="slide" id={"1"}>
              <div className="description">
                <h2 className="animate">Tên trường</h2>
                <dl className="animate">
                  <dt>Lớp:</dt>
                  <dd>1</dd>
                  <dt>Ngày:</dt>
                  <dd>1/1/1/</dd>
                  <dt>Concept:</dt>
                  <dd>TT</dd>
                  <dt>Photographer</dt>
                  <dd>hau</dd>
                </dl>
              </div>
              {/*end description*/}
              <div className="image" data-background="assets/img/1.jpg" />
              {/*end image*/}
            </div>
            {/*end slide*/}
            <div className="slide" id={"2"}>
              <div className="description">
                <h2 className="animate">Tên Trường</h2>
                <dl className="animate">
                  <dt>Lớp:</dt>
                  <dd>1</dd>
                  <dt>Ngày:</dt>
                  <dd>1/1/1/</dd>
                  <dt>Concept:</dt>
                  <dd>TT</dd>
                  <dt>Photographer</dt>
                  <dd>hau</dd>
                </dl>
              </div>
              {/*end description*/}
              <div className="image" data-background="assets/img/2.jpg" />
              {/*end image*/}
            </div>
            {/*end slide*/}
            <div className="slide" id={"3"}>
              <div className="description">
                <h2 className="animate">Tên Trường</h2>
                <dl className="animate">
                  <dt>Lớp:</dt>
                  <dd>1</dd>
                  <dt>Ngày:</dt>
                  <dd>1/1/1/</dd>
                  <dt>Concept:</dt>
                  <dd>TT</dd>
                  <dt>Photographer</dt>
                  <dd>hau</dd>
                </dl>
              </div>
              {/*end description*/}
              <div className="image" data-background="assets/img/3.jpg" />
              {/*end image*/}
            </div>
            {/*end slide*/}
            <div className="slide" id={"4"}>
              <div className="description">
                <h2 className="animate">Tên Trường</h2>
                <dl className="animate">
                  <dt>Lớp:</dt>
                  <dd>1</dd>
                  <dt>Ngày:</dt>
                  <dd>1/1/1/</dd>
                  <dt>Concept:</dt>
                  <dd>TT</dd>
                  <dt>Photographer</dt>
                  <dd>hau</dd>
                </dl>
              </div>
              {/*end description*/}
              <div className="image" data-background="assets/img/4.jpg" />
              {/*end image*/}
            </div>
            {/*end slide*/}
            <div className="slide" id={"5"}>
              <div className="description">
                <h2 className="animate">Tên Trường</h2>
                <dl className="animate">
                  <dt>Lớp:</dt>
                  <dd>1</dd>
                  <dt>Ngày:</dt>
                  <dd>1/1/1/</dd>
                  <dt>Concept:</dt>
                  <dd>TT</dd>
                  <dt>Photographer</dt>
                  <dd>hau</dd>
                </dl>
              </div>
              {/*end description*/}
              <div className="image" data-background="assets/img/5.jpg" />
            </div>
            {/*end slide*/}
            <div className="slide" id={"6"}>
              <div className="description">
                <h2 className="animate">Tên Trường</h2>
                <dl className="animate">
                  <dt>Lớp:</dt>
                  <dd>1</dd>
                  <dt>Ngày:</dt>
                  <dd>1/1/1/</dd>
                  <dt>Concept:</dt>
                  <dd>TT</dd>
                  <dt>Photographer</dt>
                  <dd>hau</dd>
                </dl>
              </div>
              {/*end description*/}
              <div className="image" data-background="assets/img/6.jpg" />
            </div>
            {/*end slide*/}
            <div className="slide" id={"7"}>
              <div className="description">
                <h2 className="animate">Tên Trường</h2>
                <dl className="animate">
                  <dt>Lớp:</dt>
                  <dd>1</dd>
                  <dt>Ngày:</dt>
                  <dd>1/1/1/</dd>
                  <dt>Concept:</dt>
                  <dd>TT</dd>
                  <dt>Photographer</dt>
                  <dd>hau</dd>
                </dl>
              </div>
              {/*end description*/}
              <div className="image" data-background="assets/img/7.jpg" />
            </div>
            {/*end slide*/}
            <div className="slide" id={"8"}>
              <div className="description">
                <h2 className="animate">Tên Trường</h2>
                <dl className="animate">
                  <dt>Lớp:</dt>
                  <dd>1</dd>
                  <dt>Ngày:</dt>
                  <dd>1/1/1/</dd>
                  <dt>Concept:</dt>
                  <dd>TT</dd>
                  <dt>Photographer</dt>
                  <dd>hau</dd>
                </dl>
              </div>
              {/*end description*/}
              <div className="image" data-background="assets/img/8.jpg" />
            </div>
            {/*end slide*/}
            <div className="slide" id={"9"}>
              <div className="description">
                <h2 className="animate">Tên Trường</h2>
                <dl className="animate">
                  <dt>Lớp:</dt>
                  <dd>1</dd>
                  <dt>Ngày:</dt>
                  <dd>1/1/1/</dd>
                  <dt>Concept:</dt>
                  <dd>TT</dd>
                  <dt>Photographer</dt>
                  <dd>hau</dd>
                </dl>
              </div>
              {/*end description*/}
              <div className="image" data-background="assets/img/9.jpg" />
            </div>
            {/*end slide*/}
            <div className="slide" id={"10"}>
              <div className="description">
                <h2 className="animate">Tên Trường</h2>
                <dl className="animate">
                  <dt>Lớp:</dt>
                  <dd>1</dd>
                  <dt>Ngày:</dt>
                  <dd>1/1/1/</dd>
                  <dt>Concept:</dt>
                  <dd>TT</dd>
                  <dt>Photographer</dt>
                  <dd>hau</dd>
                </dl>
              </div>
              {/*end description*/}
              <div className="image" data-background="assets/img/10.jpg" />
            </div>
            {/*end slide*/}
            <div className="slide" id={"11"}>
              <div className="description">
                <h2 className="animate">Tên Trường</h2>
                <dl className="animate">
                  <dt>Lớp:</dt>
                  <dd>1</dd>
                  <dt>Ngày:</dt>
                  <dd>1/1/1/</dd>
                  <dt>Concept:</dt>
                  <dd>TT</dd>
                  <dt>Photographer</dt>
                  <dd>hau</dd>
                </dl>
              </div>
              {/*end description*/}
              <div className="image" data-background="assets/img/11.jpg" />
            </div>
            {/*end slide*/}
            <div className="slide" id={"12"}>
              <div className="description">
                <h2 className="animate">Tên Trường</h2>
                <dl className="animate">
                  <dt>Lớp:</dt>
                  <dd>1</dd>
                  <dt>Ngày:</dt>
                  <dd>1/1/1/</dd>
                  <dt>Concept:</dt>
                  <dd>TT</dd>
                  <dt>Photographer</dt>
                  <dd>hau</dd>
                </dl>
              </div>
              {/*end description*/}
              <div className="image" data-background="assets/img/12.jpg" />
            </div>
            {/*end slide*/}
          </div>
          {/*end page-wrapper*/}
        </div>
        {/*end outer-wrapper*/}
      </div>
      {/*end off-screen-content*/}
      {/*end page-wrapper*/}
    </>
  );
}
