import React from "react";
import { BsMagic } from "react-icons/bs";

const MyInspiration = ({ openDrawer, setOpenDrawer }) => {
    return (
        <>
            {/* OVERLAY */}
            {openDrawer && (
                <div
                    className="fixed inset-0 bg-black/15 z-40"
                    onClick={() => setOpenDrawer(false)}
                />
            )}

            {/* DRAWER */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform ${openDrawer ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-500`}
            >
                <div className="p-6">

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={() => setOpenDrawer(false)}
                        className="text-xl mb-4"
                    >
                        ✖
                    </button>

                    {/* TITLE */}
                    <div className="flex items-center justify-start gap-2">
                        <div><BsMagic className="text-2xl" /></div>
                        <h2 className="text-xl font-bold mb-3">My Inspiration</h2>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-600 mb-4">
                        As your move around our website and see images you like, look for this Inspiration wand and save images to your personal palette. You'll see them appear here. When finished, simply email them to us and we'll be in touch. This is a great way to start your design journey!


                    </p>

                    {/* INPUT */}
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    {/* BUTTON */}
                    <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default MyInspiration;