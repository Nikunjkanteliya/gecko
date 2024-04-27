import { useFormik } from "formik";
import React from "react";

const initalvalues = {
  firstName: "",
  lastName: "",
  mail: "",
  phoneNumber: "",
  budget: "",
  description: "",
};
const Userform = () => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: initalvalues,
    onSubmit: async (value, { resetForm }) => {
      try {
        // Fetch the collection
        const collectionResponse = await fetch(
          "https://api.postman.com/collections/21192250-a50e1277-1ba5-4391-8937-80b388c049d9?access_key=PMAT-01HEAST02Z383GF562ABYFR5RX"
        );
        if (!collectionResponse.ok) {
          throw new Error("Failed to fetch collection");
        }
        const collectionData = await collectionResponse.json();

        // Extract the environment variables
        const variables = collectionData?.collection?.variable?.reduce(
          (acc, variable) => {
            acc[variable.key] = variable?.value;
            return acc;
          },
          {}
        );

        // Find the request for "Contact Form"
        const contactFormRequest = collectionData?.collection?.item?.find(
          (item) => item?.name === "Contact Form"
        )?.request;

        // Replace {{url}} with the actual URL from environment variables
        const apiUrl = contactFormRequest.url.raw.replace(
          "{{url}}",
          variables?.url
        );

        // Fetch data from the endpoint using POST method
        const contactFormResponse = await fetch(apiUrl, {
          method: "POST",
          // Add headers if needed
          headers: {
            "Content-Type": "application/json",
            // Add any other headers required by the API
          },
          // Add body content if needed
          body: JSON.stringify({
            // Add any data you need to send in the request body

            fname: value.firstName,
            lname: value.lastName,
            email: value.mail,
            phone: value.phoneNumber,
            budget: value.budget,
            description: value.description,
          }),
        });

        if (!contactFormResponse.ok) {
          throw new Error("Failed to submit contact form");
        }

        // If needed, process the response
        const responseData = await contactFormResponse.json();
        console.log(responseData);

        // Handle success or further processing here
      } catch (error) {
        console.error("Error:", error);
      }
      resetForm();
    },
  });
  return (<>
  <p className="font-Mulish font-[700] text-[47px] leading-[59px] tracking-[0.16px] text-[#232323] mt-[50px] max-w-[785px] text-center mx-auto"> Contact us</p>
    <form class="max-w-[785px] mx-auto mt-[50px] mb-[100px]" id="form-view" onSubmit={handleSubmit} >
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="firstName"
            id="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={values.firstName}
            onChange={handleChange}
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="lastName"
            id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={values.lastName}
            onChange={handleChange}
          />
          <label
            for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="mail"
            id="floating_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={values.mail}
            onChange={handleChange}
          />
          <label
            for="floating_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mail
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="phoneNumber"
            id="floating_company"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={values.phoneNumber}
            onChange={handleChange}
          />
          <label
            for="floating_company"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone Number
          </label>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <label for="underline_select" class="sr-only">
            Underline select
          </label>
          <select
            name="budget"
            onChange={handleChange}
            value={values.budget}
            id="underline_select"
            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Budget</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
          </select>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="description"
            id="floating_company"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={values.description}
            onChange={handleChange}
          />
          <label
            for="floating_company"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <button
          type="submit"
          class="bg-[#FF6400] w-[248px] h-[54px] rounded-[30px] text-[#fff] max-w-[250px] font-Mulish text-[20px] font-[500] mt-[50px] hover:opacity-[0.6]"
        >
          Submit
        </button>
      </div>
    </form>
    </>
  );
};

export default Userform;
