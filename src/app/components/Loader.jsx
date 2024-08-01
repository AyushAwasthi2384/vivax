"use client"
import React, { useEffect, useState } from 'react';

export default function Loader() {
    const [load, setLoad] = useState(0);

    useEffect(() => {
        let int = setInterval(() => {
            setLoad((prev) => {
                if (prev >= 100) {
                    clearInterval(int);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(int);
    }, []);

    const scale = (number, inMin, inMax, outMin, outMax) => {
        return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-none z-50">
            <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                style={{
                    backdropFilter: `blur(${scale(load, 0, 100, 100, 0)}px)`,
                }}
            ></div>
            <div className="relative z-10 text-center">
                <p
                    className="text-[4rem] font-bold"
                    style={{ opacity: scale(load, 0, 100, 1, 0), fontFamily: 'Monument Extended Bold' }}
                >
                    {load}%
                </p>
            </div>
        </div>
    );
}
