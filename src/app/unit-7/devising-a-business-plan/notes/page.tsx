import React from 'react';

const BusinessPlanExecutiveSummary = () => {
    return (
        <div className="bg-gray-100 text-gray-800 font-sans">
            <div className="container mx-auto py-16">
                <h1 className="text-5xl font-bold mb-12 text-center">Devising a Business Plan</h1>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-6">Key Sections</h2>
                    <h2 className="text-2xl font-bold mb-2 mt-1">1. Executive Summary</h2>
                    <p className="mb-4">
                        The Executive Summary condenses and provides a high-level overview of the entire business plan. It covers the main aspects like business goals, products/services, costs, timeline, target audience, and promotion strategy. The summary should be concise, typically no more than one page.
                    </p>
                    <div className="list-decimal list-inside mb-4">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 mt-1">2. You and Your Startup</h3>
                            <p>
                                This section introduces the entrepreneur, the company, the team, and the vision/goals. The goals should be SMART (Specific, Measurable, Achievable, Relevant, Time-bound). This helps establish credibility and give potential stakeholders a clear understanding of the venture.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2 mt-1">3. Market Analysis</h3>
                            <p>
                                This section evaluates the market landscape, trends, and competition. A SWOT analysis is a useful tool to assess the business&apos;s Strengths, Weaknesses, Opportunities, and Threats. This ensures the entrepreneur has a realistic understanding of the market conditions.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2 mt-1">4. Products/Services</h3>
                            <p>
                                This section provides detailed information about the offerings, their features, and unique value proposition. It demonstrates the entrepreneur&apos;s deep understanding of their products/services and helps potential stakeholders appreciate the business&apos;s capabilities.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2 mt-1">5. Target Market</h3>
                            <p>
                                This section identifies the specific customer segments the business aims to serve, considering factors like demographics, geography, interests, and purchasing behavior. This ensures the marketing and promotional strategies are well-targeted.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2 mt-1">6. Promotional Strategy</h3>
                            <p>
                                This section outlines the pre-sale and post-sale marketing tactics to attract and retain customers, utilizing various channels like social media, digital marketing, affiliate marketing, etc. It includes specific metrics like pricing, discounts, and upgrades to evaluate the strategy.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2 mt-1">7. Budget</h3>
                            <p>
                                This section provides detailed financial projections, including balance sheet, cash flow, and income statements. It ensures the business model is financially viable and sustainable, and helps identify potential risks and guide timely decision-making.
                            </p>
                        </div>
                    </div>
                    <p className="mb-4">
                        The comprehensive business plan serves as a roadmap for the entrepreneur, helps secure necessary financing, and demonstrates the viability of the venture to potential stakeholders.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BusinessPlanExecutiveSummary;