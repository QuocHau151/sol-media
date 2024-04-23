import Carousel from "@/components/Carousel";
import Fancybox from "@/components/Fancybox";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className=" px-3 fancy_box">
      <div className="h-screen">
        <Fancybox
          // Sample options
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <Carousel
            // Sample options
            options={{ infinite: false }}
          >
            <div
              className="f-carousel__slide "
              data-fancybox="gallery"
              data-src="/assets/img/13.jpg"
              data-thumb-src="/assets/img/13.jpg"
            >
              <Image
                className="rounded-3xl "
                alt=""
                src="/assets/img/13.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <div
              className="f-carousel__slide "
              data-fancybox="gallery"
              data-src="/assets/img/14.jpg"
              data-thumb-src="/assets/img/14.jpg"
            >
              <Image
                className="rounded-3xl"
                alt=""
                src="/assets/img/14.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <div
              className="f-carousel__slide "
              data-fancybox="gallery"
              data-src="/assets/img/15.jpg"
              data-thumb-src="/assets/img/15.jpg"
            >
              <Image
                className="rounded-3xl"
                alt=""
                src="/assets/img/15.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <div
              className="f-carousel__slide "
              data-fancybox="gallery"
              data-src="/assets/img/16.jpg"
              data-thumb-src="/assets/img/16.jpg"
            >
              <Image
                className="rounded-3xl"
                alt=""
                src="/assets/img/16.jpg"
                width={2000}
                height={2000}
              />
            </div>

            <div
              className="f-carousel__slide "
              data-fancybox="gallery"
              data-src="/assets/img/17.jpg"
              data-thumb-src="/assets/img/17.jpg"
            >
              <Image
                className="rounded-3xl"
                alt=""
                src="/assets/img/17.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <div
              className="f-carousel__slide "
              data-fancybox="gallery"
              data-src="/assets/img/18.jpg"
              data-thumb-src="/assets/img/18.jpg"
            >
              <Image
                className="rounded-3xl"
                alt=""
                src="/assets/img/18.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <div
              className="f-carousel__slide "
              data-fancybox="gallery"
              data-src="/assets/img/19.jpg"
              data-thumb-src="/assets/img/19.jpg"
            >
              <Image
                className="rounded-3xl"
                alt=""
                src="/assets/img/19.jpg"
                width={2000}
                height={2000}
              />
            </div>
            <div
              className="f-carousel__slide "
              data-fancybox="gallery"
              data-src="/assets/img/20.jpg"
              data-thumb-src="/assets/img/20.jpg"
            >
              <Image
                className="rounded-3xl"
                alt=""
                src="/assets/img/20.jpg"
                width={2000}
                height={2000}
              />
            </div>
          </Carousel>
        </Fancybox>
      </div>
    </div>
  );
}
