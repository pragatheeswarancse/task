import React from 'react';

const Card = (props) => {
    return (
        <div className="pl-24">
            <div className="flex justify-start gap-4 pt-5">
                <div className="border shadow-lg p-10 bg-purple-500 text-white rounded-lg">
                    <p className="font-bold text-lg">Record Pulled</p>
                    <p className="font-extrabold text-3xl">11K</p>
                </div>
                <div className="border shadow p-10 bg-blue-300 text-indigo-900 rounded-lg">
                    <p className="font-bold text-lg">Page Scrapped</p>
                    <p className="font-extrabold text-3xl">28K</p>
                </div>
                <div className="border shadow p-10 px-12 bg-yellow-200 text-indigo-900 rounded-lg">
                    <p className="font-bold text-lg">Error</p>
                    <p className="font-extrabold text-3xl">173</p>
                </div>
            </div>
        </div>
    )
}

export default Card;