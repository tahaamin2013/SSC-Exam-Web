import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`
            @startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightBlue
    FontColor black
    FontSize 14
  }
  :depth(1) {
    BackgroundColor lightGreen
  }
  :depth(2) {
    BackgroundColor gold
  }
  :depth(3) {
    BackgroundColor pink
  }
  :depth(4) {
    BackgroundColor gray
  }
  .radioisotopes {
    BackgroundColor yellow
  }
  .isotopes {
    BackgroundColor cyan
  }
  .unstable {
    BackgroundColor lightPink
  }
  .examples {
    BackgroundColor lightGreen
  }
}
</style>

* Impact of Political Environment on Businesses

** Ways Political Factors Affect Business
*** Government Spending
**** Left-wing: Public Services, Welfare, Free Healthcare, Education
**** Right-wing: Defense, International Security, Expansion
*** Taxation
**** Revenue Generation for Public Spending
**** Controlling Private Sector Investment
**** Impact on Business Overheads & Profit Margins
**** Tax Policies by Political Ideologies
***** Republican & Conservative: Tax Cuts for Growth
***** Issues in Pakistan: Narrow Tax Net, Dependence on Indirect Taxation
*** Economic Policies
**** Different Approaches: Pro-Agriculture vs. Industrial Growth
**** Impact on Different Sectors
*** Labor Laws
**** Minimum Wages, Insurance, and Employment Terms
**** Effect on Business Expenses
**** International Influence on Local Labor Regulations
***** Health & Safety Standards
***** Child Labor Restrictions
***** Inspections & Certifications for Global Trade
*** International Relations & Policies
**** Foreign Investment Policies
**** Protectionism vs. Global Trade
**** Small Businesses & Global Supply Chains
** Political Decisions Affecting Business
*** Economic and Business Implications
**** State Control vs. Private Capital
**** Foreign Investment Policies
**** Industrial & Trade Policies
*** Role of Political Ideologies
**** Government's Economic Goals
**** Stability vs. Growth Trade-offs
** Case Study: Socialist Regime Impact
*** Z. A. Bhutto's Nationalization (1971-77)
**** Nationalization of Industries, Banks, Insurance, Rice Husking Units
**** Economic Disparities & Redistribution Goals
**** Economic Inefficiency & Slow Growth
**** Counterarguments: Economic Disparities vs. Growth
**** Long-term Lessons for Business Managers
@endmindmap
`}
        />

     
      </section>

    </div>
  );
};

export default MagneticMindmap;