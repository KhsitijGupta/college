// components/ShortNavbar.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Topbar = ({ show }) => {
    const [data, setData] = useState({ message: "", link: "#" });

    useEffect(() => {
        const fetchTopbar = async () => {
            try {
                const res = await axios.get("/api/topbar/getTopbarData");
                console.log(res.data.data)
                setData(res.data.data);
            } catch (err) {
                console.error("Topbar data fetch failed:", err);
            }
        };

        fetchTopbar();
    }, []);

    return (
        <div
            className={`bg-blue-500 w-full py-1 px-10 flex items-center justify-evenly gap-10 transition-all duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="flex items-center gap-4 w-300">
                <span className="font-extrabold">Note:-</span>
                <div className="w-full py-1 text-white text-bold text-xl">
                    <marquee>
                        {data.message}
                        <span className="mx-2 :underline">
                            <a href={data.link} target="_blank" rel="noopener noreferrer">
                                Click Here
                            </a>
                        </span>
                    </marquee>
                </div>
                <div className="flex gap-4 xl:gap-6 text-[#001f4d] items-center">
                    <button className="w-28 ml-4 bg-white hover:bg-blue-950 hover:text-white font-bold text-black p-1 rounded-4xl">
                        <NavLink to="/#">
                            ₹ Pay Fees
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
