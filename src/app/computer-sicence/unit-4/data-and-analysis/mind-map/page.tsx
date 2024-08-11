import React from 'react'
import PlantUMLDiagram from '@/components/PlantUMLDiagram'; // Ensure this component handles PlantUML code

const page = () => {
    const umlCode = `
@startmindmap
skinparam handwritten true
skinparam defaultFontName "Comic Sans MS"
skinparam backgroundColor #FFFAF0

<style>
mindmapDiagram {
  .keyconcepts {
    BackgroundColor #FF9999
    BorderColor #FF0000
  }
  .applications {
    BackgroundColor #99FF99
    BorderColor #00FF00
  }
  .businessproblems {
    BackgroundColor #9999FF
    BorderColor #0000FF
  }
  .industry {
    BackgroundColor #FFFF99
    BorderColor #FFFF00
  }
}
</style>

* Data Science
** Key Concepts <<keyconcepts>>
*** Data
*** Data Analytics
*** Statistics and Probability
*** Mathematics
*** Machine Learning
**** Deep Learning
*** Data Mining
*** Data Visualization
*** Big Data
*** Predictive Analysis
*** Natural Language Processing (NLP)
** Applications <<applications>>
*** Predictive Analytics
*** Machine Learning Implementation
*** Data Visualization Techniques
*** Recommendation Systems Development
*** Sentiment Analysis
*** Fraud Detection Mechanisms
*** Decision-Making Support
** Business Problems <<businessproblems>>
*** Optimizing Shipping Routes
*** Product Selection Among Multiple Options
*** Forecasting Delays in Transportation
*** Optimizing Delivery Times
*** Predicting Company Revenue
*** Analyzing Health Benefits of Training Programs
left side
** Industry Applications <<industry>>
*** Retail
**** Data-driven decisions
**** Trend prediction
**** Marketing improvement
*** Supply Chain
**** Inventory optimization
**** Demand forecasting
*** Logistics
**** Route optimization
**** Load balancing
**** Carrier selection
*** Stock Markets
**** Algorithmic trading
**** Sentiment analysis
**** Risk management
*** E-commerce
**** Recommendation systems
**** Customer behavior analysis
**** Fraud detection

@endmindmap
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