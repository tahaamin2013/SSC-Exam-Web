import React from 'react'
import PlantUMLDiagram from '@/components/PlantUMLDiagram'; // Ensure this component handles PlantUML code

const page = () => {
    const umlCode = `
@startuml
title Data Science Overview

package "Data Science Concepts" {
    [Data] : Observations, facts, information
    [Dataset] : Structured data collection
    [Statistics and Probability] : Analysis of data frequency and likelihood
    [Mathematics] : Fundamental problem-solving tools
    [Machine Learning] : AI techniques for data analysis
    [Deep Learning] : Neural networks and advanced ML
    [Data Mining] : Pattern extraction from data
    [Data Visualization] : Graphical data representation
    [Big Data] : Managing large data volumes
    [Predictive Analysis] : Forecasting future trends
    [NLP] : Natural Language Processing
}

package "Data Science Applications" {
    [Predictive Analytics] : Insight into future trends
    [Machine Learning Implementation] : Deploying ML models
    [Data Visualization Techniques] : Creating charts and graphs
    [Recommendation Systems] : Personalized suggestions
    [Sentiment Analysis] : Analyzing opinions
    [Fraud Detection] : Identifying fraudulent activities
    [Decision-Making Support] : Aiding business decisions
}

package "Business Problems Solved" {
    [Optimize Shipping Routes] : Improving logistics efficiency
    [Product Selection] : Choosing optimal products
    [Forecasting Delays] : Predicting transportation delays
    [Optimizing Delivery Times] : Reducing delivery costs
    [Predicting Revenue] : Financial forecasting
    [Health Benefits Analysis] : Evaluating physical training effects
}

package "Industry Applications" {
    [Retail] : Trend analysis and marketing
    [Supply Chain] : Optimizing inventory and demand
    [Logistics] : Route optimization and load balancing
    [Stock Markets] : Trading algorithms and risk management
    [E-commerce] : Recommendations and fraud detection
}

@enduml

  `;
    return (
        <div>      <h2 className="text-2xl font-semibold mb-4">Data Science Overview</h2>
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-6 border-b text-left">Section</th>
                        <th className="py-3 px-6 border-b text-left">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-3 px-6 border-b">4.1 Data and Analysis</td>
                        <td className="py-3 px-6 border-b">
                            Data science uses methods, processes, algorithms, and systems to extract knowledge from structured and unstructured data.
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">4.1.2 Concepts of Data Science</td>
                        <td className="py-3 px-6 border-b">
                            <ul className="list-disc pl-6">
                                <li>Data: Observations, facts, or information collected</li>
                                <li>Dataset: Structured collection of data</li>
                                <li>Statistics and Probability: Frequency and event likelihood</li>
                                <li>Mathematics: Problem-solving tools</li>
                                <li>Machine Learning: AI for data analysis</li>
                                <li>Deep Learning: Neural networks focus</li>
                                <li>Data Mining: Extracting patterns from data</li>
                                <li>Data Visualization: Graphical representation</li>
                                <li>Additional Concepts: Big Data, Predictive Analysis, NLP</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">4.1.3 Scope and Application of Data Science</td>
                        <td className="py-3 px-6 border-b">
                            <ul className="list-disc pl-6">
                                <li>Predictive analytics</li>
                                <li>Machine learning implementation</li>
                                <li>Data visualization techniques</li>
                                <li>Recommendation systems development</li>
                                <li>Sentiment analysis</li>
                                <li>Fraud detection mechanisms</li>
                                <li>Decision-making support</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">Business Problems Solved</td>
                        <td className="py-3 px-6 border-b">
                            <ul className="list-disc pl-6">
                                <li>Optimizing shipping routes</li>
                                <li>Product selection</li>
                                <li>Forecasting delays</li>
                                <li>Optimizing delivery times</li>
                                <li>Predicting company revenue</li>
                                <li>Health benefits analysis</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b">4.1.4 Industry Applications</td>
                        <td className="py-3 px-6 border-b">
                            <ul className="list-disc pl-6">
                                <li>Retail: Decisions, trend prediction</li>
                                <li>Supply Chain: Inventory, demand forecasting</li>
                                <li>Logistics: Route optimization, load balancing</li>
                                <li>Stock Markets: Algorithmic trading, risk management</li>
                                <li>E-commerce: Recommendation systems, fraud detection</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <PlantUMLDiagram code={umlCode} />

        </div>
    )
}

export default page