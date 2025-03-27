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

* Politics in the World
** Origin and Evolution
*** Started after Agricultural Revolution
*** Evolved based on societal experiences and needs
** Definition of Politics
*** No single definition satisfies all perspectives
*** Vladimir Lenin: "Politics is the most concentrated expression of economics."
*** Sir Bernard Crick: "Politics is a distinctive form of rule for resolving differences and making public policies."
** Impact of Politics
*** Society
*** State
*** Individual
*** Economy
*** Government
left side
** Politics and Business
*** Business activity depends on political policies
*** Government decides business-conducive policies
** Factors Affecting Political Setup
*** Political Ideology
**** Ruling party's ideology
**** People's ideology
**** Originated in Europe over the past three centuries
*** Existing Laws and Regulations
*** Socio-Religious Norms and Constraints
*** Political Opposition and Economic Agendas
** Interconnection of Business and Politics
*** Business and politics are interdependent
*** Essential for business executives to understand this relationship
*** Indicators of policy-making can be analyzed in advance
*** Business managers must be aware of political environments
*** Capitalize on opportunities and mitigate risks
@endmindmap
`}
        />

     
      </section>

    </div>
  );
};

export default MagneticMindmap;