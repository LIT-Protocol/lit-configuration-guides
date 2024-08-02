"use client";
import { LitNodeClient } from "@lit-protocol/lit-node-client";
import { LitNetwork } from "@lit-protocol/constants";

export default function Home() {
    async function instantiateLit() {
        console.log("connection lit..");
        const litNodeClient = new LitNodeClient({
            litNetwork: LitNetwork.DatilDev,
            debug: false,
        });

        await litNodeClient.connect();
        console.log("connected!");
    }

    return (
        <div className="flex flex-col items-center gap-[1.2rem]">
            <h1>Lit with Next</h1>
            <p>Check console</p>
            <button
                onClick={instantiateLit}
                className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline"
            >
                Instantiate Lit
            </button>
        </div>
    );
}
