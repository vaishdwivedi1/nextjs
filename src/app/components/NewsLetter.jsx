"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const NewsLetter = () => {
  const [email, setEmail] = useState({
    value: "",
    errorStatus: false,
    errorMesssage: "",
  });

  const handleEmail = (e) => {
    setEmail({
      ...email,
      value: e.target.value, // Update the email value
      errorMessage: "", // Clear the error message
      errorStatus: false, // Reset the error status
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!email.value || email.value.length === 0) {
  //     setEmail({
  //       ...email,
  //       errorMessage: "Please enter a valid email",
  //       errorStatus: true,
  //     });
  //     return;
  //   }

  //   try {
  //     const res = await fetch("/api/newsletter", {
  //       body: JSON.stringify({ email: email.value }),
  //       headers: { "Content-Type": "application/json" },
  //       method: "POST",
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //     // if (data.error) {
  //     //   toast.error(data?.error?.message);
  //     //   return;
  //     // }

  //     toast.success(data.res);
  //   } catch (error) {
  //     toast.error("Something went wrong, please try again later.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.value || email.value.length === 0) {
      setEmail({
        ...email,
        errorMessage: "Please enter a valid email",
        errorStatus: true,
      });
      return;
    }
    try {
      const response = await axios.post("/api/newsletter", {
        email: email.value,
      });
      console.log(response);
      // setMessage("Subscription successful!");
      // setEmail("");
    } catch (error) {
      // setMessage("Subscription failed. Please try again.");
      console.log(error);

    }
  };

  return (
    <section
      id="newsletter"
      className="py-10 md:py-16 lg:py-20 before:w-full before:h-1/2 relative z-0 before:-z-10 before:absolute before:bottom-0 before:left-0 before:bg-gray-800"
    >
      <div className="box-border mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[980px] max-lg:w-full max-md:w-full max-sm:w-full lg::px-8 flex justify-between p-10 md:p-12 lg:p-16 bg-gray-50 rounded-lg flex-col md:flex-row gap-8 lg:gap-10">
        <div className="grow">
          <h2 className="text-2xl md:text-[28px] font-semibold">
            Join the newsletter
          </h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-2 md:mt-3">
            Get the latest insights and updates straight to your inbox.
          </p>
        </div>
        <form className="grow">
          <div className="flex gap-2 flex-col md:flex-row items-start">
            <div className="space-y-2">
              <input
                value={email.value}
                className="flex w-full rounded-md border border-gray-300 bg-white px-[18px] py-[10px] text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your email"
                id=":R5mjsja:-form-item"
                aria-describedby=":R5mjsja:-form-item-description"
                aria-invalid="false"
                name="email"
                onChange={handleEmail}
              />

              {email.errorStatus ? (
                <p
                  style={{ color: "red" }}
                  className="text-[0.8rem] font-medium text-destructive text-red"
                >
                  Please enter a valid email!
                </p>
              ) : (
                false
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary-700 px-[18px] py-[10px] text-base"
              type="submit"
            >
              Subscribe
            </button>
          </div>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            Your privacy is important. I never share your email.
          </p>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
