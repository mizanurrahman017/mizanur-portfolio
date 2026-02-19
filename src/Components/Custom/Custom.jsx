import React from "react";
import { NavLink } from "react-router";

const Custom = () => {
    return (
        <section 
            data-aos="fade-up"
            className="w-full px-6 md:px-16 py-20"
        >
            <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">

                {/* Left Content */}
                <div 
                    data-aos="fade-right"
                    data-aos-delay="200"
                    className="max-w-xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Need a custom web application?
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Let’s discuss your project requirements and build a high-quality
                        solution tailored to your business needs.
                    </p>

                    <ul className="space-y-2 text-gray-700">
                        <li>• Custom solutions for your business</li>
                        <li>• Modern, responsive UI</li>
                        <li>• Clean & maintainable code</li>
                    </ul>
                </div>

                {/* Right Button */}
                <div 
                    data-aos="fade-left"
                    data-aos-delay="400"
                >
                    <NavLink to="/contact">
                        <button className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-md hover:bg-purple-700 transition">
                            Get in Touch
                        </button>
                    </NavLink>
                </div>

            </div>
        </section>
    );
};

export default Custom;
