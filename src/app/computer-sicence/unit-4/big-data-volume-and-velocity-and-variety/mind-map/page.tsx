import React from "react";
import PlantUMLDiagram from "@/components/PlantUMLDiagram"; // Ensure this component handles PlantUML code

const page = () => {
  const umlCode = `
@startmindmap
<style>
mindmapDiagram {
  node {
    FontColor black
    FontSize 14
    FontStyle bold
  }
  .root {
    BackgroundColor #FF9999
    FontSize 18
  }
  .threeVs {
    BackgroundColor #99FF99
  }
  .history {
    BackgroundColor #9999FF
  }
  .benefits {
    BackgroundColor #FFFF99
  }
  .challenges {
    BackgroundColor #FF99FF
  }
  .applications {
    BackgroundColor #99FFFF
  }
}
</style>
* Big Data <<root>>
** Three Vs <<threeVs>>
*** Volume
**** Example: Jet engine data
*** Velocity
*** Variety
** History <<history>>
*** Emerged in early 2000s
*** Key Milestone: Hadoop open-sourced in 2005
** Advantages and Benefits <<benefits>>
*** Product development
*** Predictive maintenance
*** Customer experience/satisfaction
*** Fraud and compliance
**** Example: Netflix show recommendations
** Challenges <<challenges>>
*** Data Quality
*** Data Security and privacy
*** Rapid growth of data
*** Big data tool selection
*** Data Integration
**** Example: GDPR compliance
left side
** Applications in Business <<applications>>
*** Healthcare
**** Predicting epidemic outbreaks
**** Real-time alerting
**** Personalized treatments
**** Example: Wearable device data for heart attack prevention
*** Media and Entertainment
**** Targeting audiences
**** Predicting content preferences
**** Example: Spotify&apos;spersonalized playlists
*** IoT
**** Enhancing capabilities of IoT devices
**** Example: Smart homes optimizing energy usage
*** Manufacturing
**** Predictive maintenance
**** Supply chain optimization
**** Quality control
**** Example: Predicting machine failures
*** Government
**** Improving public services
**** Combating fraud
**** Enhancing national security
**** Example: Predictive policing
*** Other Applications
**** Agriculture
**** Aviation
**** Cyber security
**** Crime prevention
**** E-commerce
**** Fake news detection
**** Fraud detection
**** Pharmaceutical research
**** Scientific research
**** Weather forecasting
**** Tax compliance
@endmindmap
  `;
  return (
    <div>
      {" "}
      <h2 className="text-3xl font-bold m-4">Data types in Data Science</h2>
      <div className="container mx-auto p-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Topic</th>
              <th className="py-3 px-6 text-left">Subtopics</th>
              <th className="py-3 px-6 text-left">Details</th>
              <th className="py-3 px-6 text-left">Examples</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">Big Data Definition</td>
              <td className="py-3 px-6 text-left">Three Vs</td>
              <td className="py-3 px-6 text-left">Volume, Velocity, Variety</td>
              <td className="py-3 px-6 text-left">Jet engine generating 10+ terabytes in 30 minutes</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">History</td>
              <td className="py-3 px-6 text-left">Timeline</td>
              <td className="py-3 px-6 text-left">Emerged in early 2000s</td>
              <td className="py-3 px-6 text-left">Hadoop open-sourced in 2005</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">Advantages and Benefits</td>
              <td className="py-3 px-6 text-left">Key Areas</td>
              <td className="py-3 px-6 text-left">Product development, Predictive maintenance, Customer experience, Fraud and compliance</td>
              <td className="py-3 px-6 text-left">Netflix show recommendations</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">Challenges</td>
              <td className="py-3 px-6 text-left">Main Issues</td>
              <td className="py-3 px-6 text-left">Data Quality, Security and privacy, Rapid growth, Tool selection, Data Integration</td>
              <td className="py-3 px-6 text-left">GDPR compliance</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">Applications in Healthcare</td>
              <td className="py-3 px-6 text-left">Use Cases</td>
              <td className="py-3 px-6 text-left">Predicting epidemics, Real-time alerting, Personalized treatments</td>
              <td className="py-3 px-6 text-left">Wearable devices predicting heart attacks</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">Applications in Media and Entertainment</td>
              <td className="py-3 px-6 text-left">Use Cases</td>
              <td className="py-3 px-6 text-left">Targeting audiences, Predicting content preferences</td>
              <td className="py-3 px-6 text-left">Spotify&apos;s personalized playlists</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">Applications in IoT</td>
              <td className="py-3 px-6 text-left">Use Cases</td>
              <td className="py-3 px-6 text-left">Enhancing IoT device capabilities</td>
              <td className="py-3 px-6 text-left">Smart homes optimizing energy usage</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">Applications in Manufacturing</td>
              <td className="py-3 px-6 text-left">Use Cases</td>
              <td className="py-3 px-6 text-left">Predictive maintenance, Supply chain optimization, Quality control</td>
              <td className="py-3 px-6 text-left">Predicting machine failures</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">Applications in Government</td>
              <td className="py-3 px-6 text-left">Use Cases</td>
              <td className="py-3 px-6 text-left">Improving public services, Combating fraud, Enhancing national security</td>
              <td className="py-3 px-6 text-left">Predictive policing</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">Other Applications</td>
              <td className="py-3 px-6 text-left">Various Industries</td>
              <td className="py-3 px-6 text-left">Agriculture, Aviation, Cyber security, Crime prevention, E-commerce, Fake news detection, Fraud detection, Pharmaceutical research, Scientific research, Weather forecasting, Tax compliance</td>
              <td className="py-3 px-6 text-left">N/A</td>
            </tr>
          </tbody>
        </table>
      </div>

      <PlantUMLDiagram code={umlCode} />
    </div>
  );
};

export default page;
