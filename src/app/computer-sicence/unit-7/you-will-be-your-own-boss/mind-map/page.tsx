"use client"
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const Page = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const [zoomLevel1, setZoomLevel1] = useState(1);

    const umlCode = `
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightGreen
  }
  :depth(1) {
    BackgroundColor lightBlue
  }
  :depth(2) {
    BackgroundColor lightYellow
  }
  :depth(3) {
    BackgroundColor lightPink
  }
  :depth(4) {
    BackgroundColor lightGray
  }
}
</style>
* Design Thinking Process
right side
** 1. Empathize
*** Understand the user within the design challenge context.
** 2. Define
*** Identify the problem and define an actionable problem statement.
** 3. Ideate
*** Generate as many ideas as possible to solve the problem.
left side
** 4. Prototype
*** Build sample models to learn quickly, cheaply, and early.
** 5. Test
*** Collect user feedback to refine the problem, solution, and user needs.
@endmindmap
`;


    const umlCode2 = `
@startmindmap
*[#FFD700] Business Plan Development
++[#FF6347] 1.1 Definition
+++[#FFA07A] 1.1.1 A written summary of the proposed business venture.
++++_ Operational, financial, marketing, and management details.
++++_ A roadmap for building a successful business.
++++_ Describes company&apos;sdirection, goals, and plans.
++++_ Reflects strengths of the business model, team, and culture.
++[#FF8C00] 1.2 Purpose and Benefits
+++[#FFD700] 1.2.1 Guides entrepreneurs in launching and financing their business.
++++_ Systematic, realistic evaluation of market success potential.
++++_ Identifies principal risks facing the venture.
++++_ Provides a "game plan" for managing the business during start-up.
++++_ Allows comparing actual results against targeted performance.
++++_ Important tool for attracting capital and financing.
++++_ Critical in today&apos;scompetitive global environment.
++[#4682B4] 1.3 Business Planning Tools
+++[#87CEEB] 1.3.1 Software options
++++_ LivePlan, PlanMaker, PlanWrite, Canva, WordPress.
++++_ Templates, instructions, and guided plan development.
++++_ Automates much of the business plan writing process to save time.
@endmindmap
`;
    const umlCode3 = `
@startmindmap
*[#FFD700] 1. Enterpreneurial Skills
right side
++[#FF6347] 1.1 Conducting Myself
+++[#FFA07A] 1.1.1 Confidence
+++[#FFA07A] 1.1.2 Life management  
+++[#FFA07A] 1.1.3 Responsibility
++[#FF8C00] 1.2 Thinking
+++[#FFD700] 1.2.1 Creativity
+++[#FFD700] 1.2.2 Problem-solving
+++[#FFD700] 1.2.3 Decision-making
+++[#FFD700] 1.2.4 Observation
+++[#FFD700] 1.2.5 Needs-based actions
++[#4682B4] 1.3 Interacting with People
+++[#87CEEB] 1.3.1 Teamwork
+++[#87CEEB] 1.3.2 Accepting diversity
+++[#87CEEB] 1.3.3 Inclusion
left side
--[#32CD32] 1.4 Safety and Survival
---[#90EE90] 1.4.1 Self-preservation
---[#90EE90] 1.4.2 First aid
---[#90EE90] 1.4.3 Drug abuse prevention
--[#9932CC] 1.5 What I Can Do
---[#DDA0DD] 1.5.1 Technical skills
---[#DDA0DD] 1.5.2 Crafts
---[#DDA0DD] 1.5.3 Hobbies
---[#DDA0DD] 1.5.4 Intellectual pursuits
@endmindmap
`;


    const umlCode4 = `
@startmindmap
*[#FFD700] 1. Market Analysis
right side
++[#FF6347] 1.1 Defining the Market
+++[#FFA07A] 1.1.1 Market consists of people/groups needing a product/service.
+++[#FFA07A] 1.1.2 Determined by the number of potential customers.
+++[#FFA07A] 1.1.3 Competitors are businesses providing similar products/services.
++[#FF8C00] 1.2 Assessing the Market
+++[#FFD700] 1.2.1 Conduct customer surveys to understand the market.
++++_ Gather customer demographics (age, gender, income, etc.).
++++_ Understand customer preferences and reasons for product feedback.
++++_ Determine willingness to pay and sustainability of demand.
++++_ Assess quantity needed and preferred product locations.
++++_ Identify competitors and their offerings.
++[#4682B4] 1.3 Using Market Information
+++[#87CEEB] 1.3.1 Analyze survey data to estimate market size and characteristics.
++++_ Determine if demand is sufficient.
++++_ Set acceptable pricing.
++++_ Define product/service features meeting customer needs.
++++_ Identify optimal distribution and sales locations.
++++_ Develop competitive positioning and unique value proposition.
++[#32CD32] 1.4 Importance of Market Understanding
+++[#90EE90] 1.4.1 Crucial for developing a viable business model and strategy.
++++_ Informs decisions on product development, pricing, marketing, and operations.
++++_ Increases chances of meeting customer needs and competing effectively.
@endmindmap
`;

    const umlCode5 = `
@startmindmap
*[#FFD700] 1. Defining Profit
++[#FF6347] 1.1 Difference between cost price and selling price.
++[#FF6347] 1.2 Allows business reinvestment and growth.
++[#FF6347] 1.3 Should be calculated as a reasonable percentage of the cost price.
++[#FF6347] 1.4 Example Calculation: Selling Price - Cost Price = Profit

++[#FF8C00] 2. Factors to Consider when Setting Prices
+++[#FFD700] 2.1 Cost of Production
++++_ Direct costs: materials, labor, and other expenses.
++++_ Includes entrepreneur&apos;ssalary or compensation.
+++[#FFD700] 2.2 Overhead Costs
++++_ Indirect costs: rent, utilities, insurance, marketing, etc.
+++[#FFD700] 2.3 Profit Margin
++++_ Desired profit as a percentage of the cost price.
++++_ Should be reasonable and competitive.

++[#4682B4] 3. Importance of Accurate Cost Calculation
+++[#87CEEB] 3.1 Precisely calculating costs is crucial for realistic pricing.
+++[#87CEEB] 3.2 Underestimating costs leads to insufficient profit.
+++[#87CEEB] 3.3 Overestimating costs can result in uncompetitive prices.

left side

--[#32CD32] 4. Pricing Strategies
---[#90EE90] 4.1 Cost-plus Pricing
----_ Add a markup percentage to the total cost.
---[#90EE90] 4.2 Competition-based Pricing
----_ Price in relation to competitors' offerings.
---[#90EE90] 4.3 Value-based Pricing
----_ Price based on the perceived value to the customer.

-- 5. Maintaining Profitability
---[#DDA0DD] 5.1 Regularly review and adjust prices.
---[#DDA0DD] 5.2 Balance covering costs, earning profit, and competitive pricing.
@endmindmap
`;


    const markdownContent = `
  # UML Diagram
  \`\`\`plantuml
  ${umlCode}
  \`\`\`
  `;

    return (
        <div className="p-6 bg-white text-gray-900">
            <h1 className="text-3xl font-bold mb-6">Design Thinking Process</h1>
            <div className="overflow-x-auto">
                <PlantUMLDiagram code={umlCode} />
                <h1 className="text-3xl font-bold mb-6">Business Plan Development</h1>

                <PlantUMLDiagram code={umlCode2} />
                <h1 className="text-3xl font-bold mb-6 mt-4">Enterpreneurial Skills</h1>
                <PlantUMLDiagram code={umlCode3} />
                <h1 className="text-3xl font-bold mb-6 mt-4">Defining the Market</h1>
                <PlantUMLDiagram code={umlCode4} />
                <h1 className="text-3xl font-bold mb-6 mt-4">Set My Price</h1>
                <PlantUMLDiagram code={umlCode5} />
            </div>
        </div>
    );
}

export default Page;
