/*import { useNavigate } from "react-router-dom";
//import { linkWithCredential } from "firebase/auth";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
//import { MyShopData } from "../redux/ownerSlice";
import { useDispatch, useSelector } from "react-redux";
import { setMyShopData } from "../redux/ownerSlice";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:8000";
export default function CreateEditShop() {
  const dispatch = useDispatch();
  const { myShopData } = useSelector((state) => state.owner);
  const navigate = useNavigate();
  const [name, setName] = useState(myShopData?.name || "");
  const [address, setAddress] = useState(myShopData?.address || "");
  const [city, setCity] = useState(myShopData?.city || "");
  const [state, setState] = useState(myShopData?.state || "");

  const [frontendImage, setFrontendImage] = useState(myShopData?.image || null);
  const [bakcendImage, setBackendImage] = useState(myShopData?.image || null);
  const handleImage = (e) => {
    const file = e.target.files[0];
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("address", address);
      if (bakcendImage) {
        formData.append("image", bakcendImage);
      }
      console.log(serverUrl);

      const result = await axios.post(
        `${serverUrl}/api/shop/create-edit`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      dispatch(setMyShopData(result.data));
      console.log(import.meta.env.VITE_SERVER_URL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center p-6  from-orange-50 bg-white relative min-h-screen">
      <div className="absolute top-0 left-0 z-10 mb-10px  ">
        <FaArrowLeft
          size={25}
          className="text-[#ff4d2d]"
          onClick={() => navigate("/home")}
        />
      </div>
      <div>
        <div className="max-w-lg w-full  bg-white shadow-xl rounded-2xl p-8 border border-orange-100">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-orange-100 p-4 rounded-full mb-4 ">
              <FaUtensils className="text-[#ff4d2d] w-16 h-16" />
            </div>
            <div className="text-3xl font-extrabold text-gray-900">
              {myShopData ? "Edit Shop" : "Add Shop"}
            </div>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Shope Name"
                
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shop image{" "}
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                onChange={handleImage}
              ></input>
              {frontendImage && (
                <div className="mt-4">
                  <img
                    src={frontendImage}
                    alt=""
                    className="w-full h-48 object-cover rounded-lg border"
                  />
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter city"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                ></input>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                ></input>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address{" "}
              </label>
              <input
                type="text"
                placeholder="Enter Shop Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>
            <button className="w-full bg-[#ff4d2d] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-200 cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );}*/
/*import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaUtensils } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setMyShopData } from "../redux/ownerSlice";
import axios from "axios";
import { useSelector } from "react-redux";


// Ensure cookies/sessions are handled automatically globally
axios.defaults.withCredentials = true;

const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:8000";

export default function CreateEditShop() {
  
  const dispatch = useDispatch();
  const { myShopData } = useSelector((state) => state.owner);
  const navigate = useNavigate();

  // Controlled states initialize as empty strings to avoid uncontrolled-to-controlled input warnings
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [frontendImage, setFrontendImage] = useState(null);
  const [backendImage, setBackendImage] = useState(null);

  // Sync form states cleanly when Redux data loads or changes
  useEffect(() => {
    if (myShopData) {
      setName(myShopData.name || "");
      setAddress(myShopData.address || "");
      setCity(myShopData.city || "");
      setState(myShopData.state || "");
      setFrontendImage(myShopData.image || null);
      
    }
  }, [myShopData]);

  const handleImage = (e) => {
    

    const file = e.target.files[0];
    if (file) {
      setBackendImage(file);
      // Generate a temporary local URL for immediate frontend image preview
      setFrontendImage(URL.createObjectURL(file)); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    owner: userData?._id || user?._id;

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("address", address);
      formDataToSend.append("owner", userData?._id || user?._id);
      


      if (backendImage) {
        // If user picked a new file, append it
        formData.append("image", backendImage);
      } else if (myShopData?.image) {
        // If no new image was picked, pass the existing string URL back to the backend
        formData.append("oldImage", myShopData.image);
      }

      console.log("Sending data to:", `${serverUrl}/api/shop/create-edit`);

      const result = await axios.post(
        `${serverUrl}/api/shop/create-edit`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(setMyShopData(result.data));
      alert("Shop data saved successfully!");
      navigate("/home");

    } catch (error) {
      console.error("Frontend Submit Error:", error?.response?.data || error.message);
      alert(error?.response?.data?.message || "Something went wrong while saving data.");
    }
  };

  return (
    <div className="flex justify-center flex-col items-center p-6 bg-white relative min-h-screen">
      <div className="absolute top-5 left-5 z-10 cursor-pointer">
        <FaArrowLeft
          size={25}
          className="text-[#ff4d2d]"
          onClick={() => navigate("/home")}
        />
      </div>
      <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8 border border-orange-100 mt-10">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <FaUtensils className="text-[#ff4d2d] w-16 h-16" />
          </div>
          <div className="text-3xl font-extrabold text-gray-900">
            {myShopData ? "Edit Shop" : "Add Shop"}
          </div>
        </div>
        
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Shop Name"
              value={name}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shop Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={handleImage}
              required={!myShopData?.image} 
            />
            {frontendImage && (
              <div className="mt-4">
                <img
                  src={frontendImage}
                  alt="Shop Preview"
                  className="w-full h-48 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                placeholder="Enter city"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                placeholder="Enter State"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter Shop Address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff4d2d] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}*/
import { useNavigate } from "react-router-dom";
//import { linkWithCredential } from "firebase/auth";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
//import { MyShopData } from "../redux/ownerSlice";
import { useDispatch, useSelector } from "react-redux";
import { setMyShopData } from "../redux/ownerSlice";
import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:8000";

export default function CreateEditShop() {
  const dispatch = useDispatch();
  const { myShopData } = useSelector((state) => state.owner);
  const navigate = useNavigate();
  const [name, setName] = useState(myShopData?.name || "");
  const [address, setAddress] = useState(myShopData?.address || "");
  const [city, setCity] = useState(myShopData?.city || "");
  const [state, setState] = useState(myShopData?.state || "");

  const [frontendImage, setFrontendImage] = useState(myShopData?.image || null);
  const [bakcendImage, setBackendImage] = useState(myShopData?.image || null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("address", address);
      if (bakcendImage) {
        formData.append("image", bakcendImage);
      }
      console.log(serverUrl);

      const result = await axios.post(
        `${serverUrl}/api/shop/create-edit`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      dispatch(setMyShopData(result.data));
      console.log(import.meta.env.VITE_SERVER_URL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center p-6  from-orange-50 bg-white relative min-h-screen">
      <div className="absolute top-0 left-2 z-90 mb-10px   mt-2">
        <FaArrowLeft
          size={25}
          className="text-[#ff4d2d]"
          onClick={() => navigate("/home")}
        />
      </div>
      <div>
        <div className="max-w-lg w-full mt-4 bg-white shadow-xl rounded-2xl p-8 border border-orange-100">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-orange-100 p-4 rounded-full mb-4 ">
              <FaUtensils className="text-[#ff4d2d] w-16 h-16" />
            </div>
            <div className="text-3xl font-extrabold text-gray-900">
              {myShopData ? "Edit Shop" : "Add Shop"}
            </div>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Shope Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shop image{" "}
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                onChange={handleImage}
              ></input>
              {frontendImage && (
                <div className="mt-4">
                  <img
                    src={frontendImage}
                    alt=""
                    className="w-full h-48 object-cover rounded-lg border"
                  />
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter city"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                ></input>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                ></input>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address{" "}
              </label>
              <input
                type="text"
                placeholder="Enter Shop Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                ></input>
            </div>
            <button className="w-full bg-[#ff4d2d] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-200 cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ======================================================================
  THE SECOND BLOCK OF CODE BELOW IS CLEANED AND FULLY CLOSED BELOW
====================================================================== */

import { useRouteLoaderData } from "react-router-dom";
import { useEffect } from "react";

axios.defaults.withCredentials = true;

const AlternativeCreateEditShop = () => {
  const dispatch = useDispatch();
  const { myShopData } = useSelector((state) => state.owner);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [frontendImage, setFrontendImage] = useState(null);
  const [backendImage, setBackendImage] = useState(null);

  const userData = null;
  const user = null;

  useEffect(() => {
    if (myShopData) {
      setName(myShopData.name || "");
      setAddress(myShopData.address || "");
      setCity(myShopData.city || "");
      setState(myShopData.state || "");
      setFrontendImage(myShopData.image || null);
    }
  }, [myShopData]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackendImage(file);
      setFrontendImage(URL.createObjectURL(file)); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("address", address);
      formData.append("owner", userData?._id || user?._id || "");

      if (backendImage) {
        formData.append("image", backendImage);
      } else if (myShopData?.image) {
        formData.append("oldImage", myShopData.image);
      }

      console.log("Sending data to:", `${serverUrl}/api/shop/create-edit`);

      const result = await axios.post(
        `${serverUrl}/api/shop/create-edit`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(setMyShopData(result.data));
      alert("Shop data saved successfully!");
      navigate("/home");

    } catch (error) {
      console.error("Frontend Submit Error:", error?.response?.data || error.message);
      alert(error?.response?.data?.message || "Something went wrong while saving data.");
    }
  };

  return (
    <div className="flex justify-center flex-col items-center p-6 bg-white relative min-h-screen">
      <div className="absolute top-5 left-5 z-10 cursor-pointer">
        <FaArrowLeft
          size={25}
          className="text-[#ff4d2d]"
          onClick={() => navigate("/home")}
        />
      </div>
      <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8 border border-orange-100 mt-10">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <FaUtensils className="text-[#ff4d2d] w-16 h-16" />
          </div>
          <div className="text-3xl font-extrabold text-gray-900">
            {myShopData ? "Edit Shop" : "Add Shop"}
          </div>
        </div>
        
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Shop Name"
              value={name}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shop Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={handleImage}
              required={!myShopData?.image} 
            />
            {frontendImage && (
              <div className="mt-4">
                <img
                  src={frontendImage}
                  alt="Shop Preview"
                  className="w-full h-48 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                placeholder="Enter city"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                placeholder="Enter State"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter Shop Address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff4d2d] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
