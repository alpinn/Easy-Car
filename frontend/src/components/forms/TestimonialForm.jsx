import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getMe } from "../../features/auth-slice";

const TestimonialForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState("");
  const [opinion, setOpinion] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(getMe()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    axios
      .get("/testimonial")
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCreateTestimonial = async (event) => {
    event.preventDefault();
    if (isLoading) return; // wait for getMe action to complete
    if (!user || !user._id) {
      alert("You must be logged in to create a testimonial");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/testimonial", {
        name,
        opinion,
      });
      const { msg } = response.data;
      setMessage(msg);
      setTestimonials([...testimonials, response.data]);
      setName("");
      setOpinion("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-14 py-10 md:px-15 lg:px-[7.2rem] min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Tambah Testimonial
          </h2>
          <form
            onSubmit={handleCreateTestimonial}
            className="flex flex-col gap-4"
          >
            <p className="text-center text-green-600">{message}</p>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="testimonial"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Pendapat anda mengenai Easy Car
              </label>
              <textarea
                type="text"
                id="testimonial"
                value={opinion}
                onChange={(event) => setOpinion(event.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestimonialForm;
