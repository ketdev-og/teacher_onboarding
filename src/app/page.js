"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const startOnboarding = () => {
    router.push("/onboarding/personal");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-green-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">UNN</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to University of Nigeria
          </h1>
          <p className="text-gray-600 mb-8">
            Complete your Academic Staff Profile to get started with your academic journey.
          </p>
          <button
            onClick={startOnboarding}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors w-full"
          >
            Start Onboarding
          </button>
        </div>
      </div>
    </div>
  );
}
