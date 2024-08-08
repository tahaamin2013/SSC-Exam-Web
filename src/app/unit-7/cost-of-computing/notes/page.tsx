import React from 'react';

const PricingAndCosting = () => {
    return (
        <div className="bg-gray-100 text-gray-800 font-sans">
            <div className="container mx-auto py-16">
                <h1 className="text-5xl font-bold mb-12 text-center">Pricing and Costing Considerations</h1>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-6">Cost of Production and Overheads</h2>
                    <p className="mb-4">
                        Cost of production includes the direct costs of materials, labor, and other expenses to manufacture the product or deliver the service. Labor costs should adequately compensate workers based on their experience, qualifications, and prevailing wage rates. Overheads are the indirect costs required to operate the business, such as rent, utilities, insurance, marketing, etc. All these cost components must be accurately calculated to determine the total cost of providing the product or service.
                    </p>
                    <h2 className="text-3xl font-bold mb-6">Calculating Profit</h2>
                    <p className="mb-4">
                        Profit is the difference between the cost price and the selling price. The entrepreneur should set the profit margin carefully, considering the relationship between demand and available supply. If demand is high relative to supply, higher profit margins may be possible. If supply is high relative to demand, lower profit margins may be necessary to remain competitive. Excessively high profit margins can deter customers, while lower margins may allow the business to secure and expand the market. Profit margins should be reasonable and sustainable, not exploitative.
                    </p>
                    <h2 className="text-3xl font-bold mb-6">Determining the Selling Price</h2>
                    <p className="mb-4">
                        The selling price is calculated as the sum of the cost of production, overheads, and the desired profit margin. This comprehensive cost accounting helps ensure the selling price covers all expenses and generates an appropriate level of profit. Regularly reviewing and adjusting the selling price is important as costs, competition, and market conditions change over time.
                    </p>
                    <h2 className="text-3xl font-bold mb-6">Importance of Accurate Costing</h2>
                    <p className="mb-4">
                        Precise calculation of all cost components is crucial for setting a realistic and sustainable selling price. Underestimating costs can lead to pricing that is too low to generate sufficient profit, while overestimating costs can result in prices that are uncompetitive in the market.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricingAndCosting;