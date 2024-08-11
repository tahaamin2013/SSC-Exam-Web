// pages/history.tsx
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="p-6 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">
        Problems
      </h1>

      <section>
            <h2 className="text-xl font-semibold mb-2">2.1 Problems</h2>
            <p className="mb-4">
                A problem is a challenge or situation that needs to be overcome using some action. The problems are present in all fields 
                such as economic, healthcare, education, transportation, internet, biology, and many more.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Economic</h3>
                    <ul className="list-disc pl-5">
                        <li>What to produce?</li>
                        <li>How to manage limited budgets?</li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
                    <ul className="list-disc pl-5">
                        <li>How to expand access to medicines?</li>
                        <li>How to stop infectious diseases?</li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Education</h3>
                    <ul className="list-disc pl-5">
                        <li>How to increase literacy rate in Pakistan?</li>
                        <li>What subject areas of education should be focused on more?</li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Transportation</h3>
                    <ul className="list-disc pl-5">
                        <li>Why is the number of vehicles growing up?</li>
                        <li>Why are the accidents on motorways increasing?</li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Internet</h3>
                    <ul className="list-disc pl-5">
                        <li>How to secure mobile banking transactions?</li>
                        <li>Why do websites show unwanted advertisements?</li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Biology</h3>
                    <ul className="list-disc pl-5">
                        <li>How do 5G cell phone signals harm humans?</li>
                        <li>How do trees give earth all its oxygen?</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  );
};

export default page;
