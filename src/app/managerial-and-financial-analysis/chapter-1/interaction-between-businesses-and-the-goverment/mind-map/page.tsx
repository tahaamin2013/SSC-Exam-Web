import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <PlantUMLDiagram
          code={`@startmindmap
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

* Interaction Between Businesses and the Government
** Pressure Groups & Lobbying
*** Influence on Government Decisions
*** Support for Political Parties
**** Votes & Economic Contributions
**** Impact on Policy Decisions
** Financial Incentive Strategy
*** Economic Leverage
**** Threat to Relocate
**** Persuasion of Government Actions
** Promoting a Constituency-Building Strategy
*** Stakeholder Coalitions
**** Employees
**** Stockholders
**** Customers
**** Local Community
*** Advocacy Advertising
**** Issue-Based Ads
**** Media Outreach
*** Trade Associations
**** Federation of Pakistani Chambers of Commerce & Industry
**** Overseas Investors Chambers of Commerce and Industry (OICCI)
**** American Business Council (ABC)
**** All Pakistan Textile Manufacturers Association (APTMA)
**** Pakistan Automotive Manufacturers Association (PAMA)
**** Collective Industrial Action
***** APTMA on Energy Issues
***** OICCI for Business-Friendly Policies
** Managing the Political Environment
*** Public Affairs Department
**** Government Relations
**** Policy Advocacy
**** Direct Lobbying
**** Hosting Political Visits
**** Fundraising Activities
@endmindmap
`}
        />

     
      </section>

    </div>
  );
};

export default MagneticMindmap;