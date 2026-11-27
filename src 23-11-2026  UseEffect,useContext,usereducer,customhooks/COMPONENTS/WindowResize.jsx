
import React, { useState, useEffect } from 'react';

const WindowResize = () => {

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 p-5">

            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">

                <h1 className="text-2xl font-bold text-slate-800 mb-6">
                    Window Resize Listener
                </h1>

                <div className="grid grid-cols-2 gap-4">

                    <div className="bg-blue-100 rounded-xl p-5">
                        <p className="text-sm text-blue-600 font-medium">
                            Width
                        </p>
                        <h2 className="text-3xl font-bold text-blue-800">
                            {dimensions.width}px
                        </h2>
                    </div>

                    <div className="bg-purple-100 rounded-xl p-5">
                        <p className="text-sm text-purple-600 font-medium">
                            Height
                        </p>
                        <h2 className="text-3xl font-bold text-purple-800">
                            {dimensions.height}px
                        </h2>
                    </div>

                </div>

                <p className="mt-6 text-gray-500 text-sm">
                    Resize your browser window to see the changes.
                </p>

            </div>

        </div>
    );
};

export default WindowResize;
