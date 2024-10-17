"use client";
import { litSetup } from 'lit-client-setup';

export default function Home() {


    return (
        <div className="flex flex-col items-center gap-[1.2rem]">
            <h1>Lit with Next</h1>
            <p>Check console</p>
            <button
                onClick={litSetup}
                className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline"
            >
                Instantiate Lit
            </button>
        </div>
    );
}
