import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import axios from "axios";
import ReuseSubHeader from "../../section/Shared/ReuseSubHeader";


const SellingMade = () => {




    const [formData, setFormData] = useState({
        designer: "",
        category: "",
        productName: "",
        details: "",
        images: {},
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e, type) => {
        if (e.target.files.length > 0) {
            setFormData((prev) => ({
                ...prev,
                images: { ...prev.images, [type]: e.target.files[0] },
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key === "images") {
                Object.keys(formData.images).forEach((imgKey) => {
                    data.append(imgKey, formData.images[imgKey]);
                });
            } else {
                data.append(key, formData[key]);
            }
        });

        try {
            await axios.post("https://your-api-endpoint.com/upload", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Item submitted successfully!");
        } catch (error) {
            console.error("Error submitting form", error);
            alert("There was an error submitting your item.");
        }
    };

    return (
        <div className="">
            <ReuseSubHeader title="Selling Made Simple" subtitle="We Provide upfront quote (by our offer)" />

            <div className="flex flex-col items-center mt-8">
                <h1 className="text-center font-poppins font-semibold text-4xl">Welcome!</h1>
                <p className="mt-4 text-gray-500 text-center text-sm">
                    Email: arfin.cse.green.edu.bd@gmail.com
                </p>
                <p className="text-center mt-2 text-sm font-medium">
                    Not you? <span className="text-gray-700">Sign In to My Account</span>
                </p>
            </div>

            <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-r from-gray-100 to-orange-100 rounded-lg shadow-lg mt-8">
                <h1 className="text-2xl font-bold text-center mb-4">What Are You Selling?</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        <div className="sm:col-span-1 lg:col-span-1">
                            <h3 className="font-medium text-lg">Designer</h3>
                            <Select className="h-16 p-4 "
                                value={formData.designer}
                                onValueChange={(value) => setFormData((prev) => ({ ...prev, designer: value }))}
                            >
                                <SelectTrigger className="p-4 pt-8 pb-8 rounded-[24px] border-[1px]">
                                    <span>{formData.designer || "Select designer"}</span>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Designer A">Designer A</SelectItem>
                                    <SelectItem value="Designer B">Designer B</SelectItem>
                                    <SelectItem value="Designer C">Designer C</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="sm:col-span-1 lg:col-span-1 ml-24">
                            <h3 className="font-medium text-lg">Category</h3>
                            <Select
                                value={formData.category}
                                onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                            >
                                <SelectTrigger className="p-4 pt-8 pb-8 rounded-[24px] border-[1px]">
                                    <span>{formData.category || "Select category"}</span>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Electronics">Electronics</SelectItem>
                                    <SelectItem value="Furniture">Furniture</SelectItem>
                                    <SelectItem value="Clothing">Clothing</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>






                        <div className="col-span-1 sm:col-span-2 lg:col-span-3 w-[1006px]">
                            <h3 className="font-medium text-lg">Item/Product Name</h3>
                            <Input
                                name="productName"
                                /* {...register("product", { required: true })}  */ type='product'
                                placeholder="Enter product name"
                                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <h2 className="text-2xl font-semibold">Any Details Should Know About</h2>
                        <p className="mt-4 text-sm text-gray-500">For Example</p>
                        <div className="space-y-4 mt-8 flex flex-col items-center justify-center">
                            <p className="relative w-full sm:w-[292px] text-center text-sm font-medium">
                                <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-black"></span>
                                Lorem ipsum dolor, Quibusdam quam
                            </p>
                            <p className="relative w-full sm:w-[292px] text-center text-sm font-medium">
                                <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-black"></span>
                                Lorem ipsum dolor, Quibusdam quam
                            </p>
                            <p className="relative w-full sm:w-[292px] text-center text-sm font-medium">
                                <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-black"></span>
                                Lorem ipsum dolor, Quibusdam quam
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="font-medium text-lg mb-3">Item Details and Condition</h3>
                        <Textarea
                            name="details"
                            value={formData.details}
                            onChange={handleInputChange}
                            placeholder="Enter item details and condition"
                            rows={4}
                            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <h1 className="mt-5">Upload Photo Of Your Item</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                            {["", "Front", "Back", "Inside", "Base", "Condition", "Details", "Retail Tag Or Sticker", "Seller Id Or Designer Id"].map((label, index) => (
                                <Card key={label} className="p-4 text-center cursor-pointer h-[186px] w-full sm:w-[186px]">
                                    {index === 0 ? (
                                        <div className="flex flex-col justify-center items-center h-full">
                                            <i className="fas fa-camera text-gray-700 text-4xl"></i> {/* Camera icon */}
                                            <span className="text-sm text-gray-600 mt-2">Add Photo</span>
                                            <input
                                                type="file"
                                                onChange={(e) => handleFileChange(e, label.toLowerCase())}
                                                className="mt-2 opacity-0 cursor-pointer w-full h-full absolute inset-0" // Make the input invisible but still functional
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex flex-col justify-center items-center h-full">
                                            <span className="text-sm font-medium text-gray-700">{label}</span>
                                        </div>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Button */}
                    <div className="text-center mt-8">
                        <button
                            type="submit"
                            className="w-[1006px] max-w-full bg-black h-[54px] px-[48px] py-[14px] text-[16px] text-white font-semibold rounded-[36px]">
                            Submit My Quote
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SellingMade;
