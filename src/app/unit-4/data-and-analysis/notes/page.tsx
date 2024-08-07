import Head from 'next/head'
import React from 'react'

const page = () => {
    return (
        <div className="min-h-screen py-7 bg-gray-100">
            <Head>
                <title>Data Science Notes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">4.1 Data and Analysis</h2>

                <p className="mb-3 text-gray-600">
                    Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.
                </p>

                <div className="bg-gray-100 p-3 rounded-md mb-3">
                    <h3 className="text-lg font-semibold mb-2">Key Concepts:</h3>
                    <ul className="list-disc pl-5 text-sm">
                        <li>Data: Collection of information or facts (e.g., temperatures, survey responses)</li>
                        <li>Data Analytics: Process of examining data to draw conclusions</li>
                        <li>Data Science: Combines multiple disciplines to analyze data and extract insights</li>
                    </ul>
                </div>

                <p className="mb-3 text-gray-600">
                    Data analysis involves using mathematical calculations, statistical techniques, charts, and other tools to understand patterns and trends.
                </p>

                <div className="bg-gray-100 p-3 rounded-md mb-3">
                    <h3 className="text-lg font-semibold mb-2">4.1.2 Concepts of Data Science:</h3>
                    <ul className="list-disc pl-5 text-sm">
                        <li>Data: Observations, facts, or information collected</li>
                        <li>Dataset: Structured collection of data associated with a specific topic</li>
                        <li>Statistics and Probability: Analysis of data frequency and event likelihood</li>
                        <li>Mathematics: Fundamental tools for problem-solving in data science</li>
                        <li>Machine Learning: Application of AI for data analysis</li>
                        <li>Deep Learning: Subset of machine learning focusing on neural networks</li>
                        <li>Data Mining: Extracting patterns from large datasets</li>
                        <li>Data Visualization: Graphical representation of data</li>
                    </ul>
                </div>

                <p className="mb-3 text-gray-600">
                    Additional concepts include Big Data (handling large volumes of data), Predictive Analysis, and Natural Language Processing (NLP).
                </p>

                <div className="bg-gray-100 p-3 rounded-md mb-3">
                    <h3 className="text-lg font-semibold mb-2">4.1.3 Scope and Application of Data Science:</h3>
                    <ul className="list-disc pl-5 text-sm">
                        <li>Predictive analytics</li>
                        <li>Machine learning implementation</li>
                        <li>Data visualization techniques</li>
                        <li>Recommendation systems development</li>
                        <li>Sentiment analysis</li>
                        <li>Fraud detection mechanisms</li>
                        <li>Decision-making support in various industries</li>
                    </ul>
                </div>

                <p className="mb-3 text-gray-600">
                    Data science solves various business problems across different sectors.
                </p>

                <div className="bg-gray-100 p-3 rounded-md mb-3">
                    <h3 className="text-lg font-semibold mb-2">Business Problems Solved:</h3>
                    <ul className="list-disc pl-5 text-sm">
                        <li>Optimizing shipping routes for goods or passenger airplanes</li>
                        <li>Product selection among multiple options</li>
                        <li>Forecasting delays in transportation</li>
                        <li>Optimizing delivery times to reduce costs</li>
                        <li>Predicting company revenue</li>
                        <li>Analyzing health benefits of physical training programs</li>
                    </ul>
                </div>

                <div className="bg-gray-100 p-3 rounded-md">
                    <h3 className="text-lg font-semibold mb-2">4.1.4 Industry Applications:</h3>
                    <ul className="list-disc pl-5 text-sm">
                        <li>Retail: Data-driven decisions, trend prediction, marketing improvement</li>
                        <li>Supply chain: Inventory optimization, demand forecasting</li>
                        <li>Logistics: Route optimization, load balancing, carrier selection</li>
                        <li>Stock markets: Algorithmic trading, sentiment analysis, risk management</li>
                        <li>E-commerce: Recommendation systems, customer behavior analysis, fraud detection</li>
                    </ul>
                </div>
            </div>
        </div>)
}

export default page