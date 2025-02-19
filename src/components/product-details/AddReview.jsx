import { useState } from "react";
import axios from "axios";
import ReuseSubHeader from "../../section/Shared/ReuseSubHeader";

const AddReview = ({ userId, productId }) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await axios.post(
                "https://our-bag-server.onrender.com/api/v1/review",
                {
                    userId,
                    productId,
                    name,
                    rating,
                    comment,
                }
            );
            setMessage("Review added successfully!");
            setName("");
            setComment("");
            setRating(5);
        } catch (error) {
            setMessage("Failed to add review. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (

        <div>
            <ReuseSubHeader title="Add a Review" subtitle="Home / About " />
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg  ">
                {/* <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add a Review</h2>
                <ReuseSubHeader title="Add a Review" subtitle="Home / About " /> */}
                {message && <p className="text-center text-green-600 font-semibold">{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium">Your Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Rating</label>
                        <select
                            value={rating}
                            onChange={(e) => setRating(parseInt(e.target.value))}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        >
                            {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>{num} Star{num > 1 ? "s" : ""}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="font-geist font-medium text-lg leading-[29.52px] tracking-normal">Comment</label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full h-[350px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Write your review here..."
                            required
                        ></textarea>

                        {/* <div>
                        <h3 className="font-geist font-medium text-lg leading-[29.52px] tracking-normal">Your Message*</h3>
                        <Textarea
                            {...register("message", { required: "Message is required" })}
                            placeholder="Your Message"
                            rows={4}
                            className="w-full h-[350px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                    </div> */}
                    </div>
                    <button
                        type="submit"
                        className="bg-black w-full px-[48px] py-[14px] text-[16px] text-white font-semibold rounded-[36px] transition duration-200 ease-in-out disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Add Review"}
                    </button>
                </form>
            </div>
        </div>

    );
};

export default AddReview;
