// src/App.js
import React, { useState } from "react";
import { sendEmail } from "./api/email";

export default function App() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        setSuccess(false);
        setError("");

        try {
            const response = await fetch("/api/insights", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || "Failed to get insights");

            await sendEmail(email, data.insights);

            setSuccess(true);
            setEmail("");
        } catch (err) {
            console.error("Error:", err);
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4">
            <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full border border-gray-200">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
                    Get Your UX Insights
                </h1>
                <p className="text-gray-600 mb-6 text-center">
                    Enter your email and receive 3 proven UX tips for your landing page.
                </p>

                {success && (
                    <div className="bg-green-100 text-green-800 p-3 rounded mb-4 text-sm text-center">
                        ✅ Insights sent! Please check your inbox.
                    </div>
                )}

                {error && (
                    <div className="bg-red-100 text-red-800 p-3 rounded mb-4 text-sm text-center">
                        ❌ {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex justify-center items-center"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Sending...
              </span>
                        ) : (
                            "Send UX Tips"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}