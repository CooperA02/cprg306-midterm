"use client";
import React, { useState } from "react";

const APICallExam = () => {
  const [responseData, setResponseData] = useState(null);

  const makeAPICall = async () => {
    try {
      const passcode = "ehen2rfow";
      const response = await fetch(`https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`);
      const data = await response.json();
      setResponseData(data.secretCode);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button onClick={makeAPICall} className="bg-red-100 p-2 rounded-md border border-red-500">
          Submit
        </button>
      </div>
      {/* Display response data */}
      {responseData && <p className="mt-4">Secret Code: {responseData}</p>}
    </div>
  );
};

export default APICallExam;
