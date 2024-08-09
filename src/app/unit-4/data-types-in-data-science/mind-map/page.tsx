import React from 'react'
import PlantUMLDiagram from '@/components/PlantUMLDiagram'; // Ensure this component handles PlantUML code

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
  .type {
    BackgroundColor #99FF99
  }
  .dataset {
    BackgroundColor #9999FF
  }
  .role {
    BackgroundColor #FFFF99
  }
  .collection {
    BackgroundColor #FF99FF
  }
  .storage {
    BackgroundColor #99FFFF
  }
  .visualization {
    BackgroundColor #FFCC99
  }
  .statistics {
    BackgroundColor #CC99FF
  }
}
</style>
* Data Science <<root>>
** Data Types <<type>>
*** Qualitative (Categorical)
**** Ordinal data
**** Nominal data
*** Quantitative (Numerical)
**** Discrete data
**** Continuous data
** Dataset and Database <<dataset>>
*** Dataset
*** Database
**** Relational Databases
**** Non-Relational Databases
** Role of database <<role>>
*** Better organized data structure
*** Dependence of data science on data
** Data Collection <<collection>>
*** Primary methods
**** Surveys and Questionnaires
**** Interviews
**** Observations
**** Experiments
**** Focus groups
**** Sensors
**** IoT devices
**** Biometric devices
*** Secondary methods
**** Published sources
**** Public databases
**** Government and institutional records
**** Past surveys and questionnaires
**** Social media data/posts
**** Publicly available data
**** Past research studies
left side
** Data Storage <<storage>>
*** Relational/NoSQL databases
*** Data warehouse
*** Distributed file systems
*** Cloud-based data storage
*** Blockchain
** Data Visualization <<visualization>>
*** Charts
*** Graphs
*** Maps
*** Figures
*** Dashboards
** Summary statistics <<statistics>>
*** Total number of values
*** Minimum value
*** Maximum value
*** Mean value
*** Standard deviation
@endmindmap
  `;
    return (
        <div>      <h2 className="text-3xl font-bold m-4">Data types in Data Science</h2>
            <div className="container mx-auto p-4">
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">Topic</th>
        <th className="py-3 px-6 text-left">Subtopics</th>
        <th className="py-3 px-6 text-left">Details</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 text-sm font-light">
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">Data Types</td>
        <td className="py-3 px-6 text-left">Qualitative (Categorical)</td>
        <td className="py-3 px-6 text-left">Ordinal data, Nominal data</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left"></td>
        <td className="py-3 px-6 text-left">Quantitative (Numerical)</td>
        <td className="py-3 px-6 text-left">Discrete data, Continuous data</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left">Dataset and Database</td>
        <td className="py-3 px-6 text-left">Dataset</td>
        <td className="py-3 px-6 text-left">Structured collection of data associated with unique body of work</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left"></td>
        <td className="py-3 px-6 text-left">Database</td>
        <td className="py-3 px-6 text-left">Organized collection of data stored in multiple datasets or tables</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left">Types of Databases</td>
        <td className="py-3 px-6 text-left"></td>
        <td className="py-3 px-6 text-left">Relational, Non-Relational</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left">Role of Database</td>
        <td className="py-3 px-6 text-left"></td>
        <td className="py-3 px-6 text-left">Better organized data structure, Dependence of data science on data</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left">Data Collection</td>
        <td className="py-3 px-6 text-left">Primary Methods</td>
        <td className="py-3 px-6 text-left">Surveys, Interviews, Observations, Experiments, Focus groups, Sensors, IoT devices, Biometric devices</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left"></td>
        <td className="py-3 px-6 text-left">Secondary Methods</td>
        <td className="py-3 px-6 text-left">Published sources, Public databases, Government records, Past surveys, Social media data, Publicly available data, Past research studies</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left">Data Storage</td>
        <td className="py-3 px-6 text-left">Methods</td>
        <td className="py-3 px-6 text-left">Relational/NoSQL databases, Data warehouse, Distributed file systems, Cloud-based storage, Blockchain</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left">Data Visualization</td>
        <td className="py-3 px-6 text-left">Types</td>
        <td className="py-3 px-6 text-left">Charts, Graphs, Maps, Figures, Dashboards</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left">Summary Statistics</td>
        <td className="py-3 px-6 text-left">Measures</td>
        <td className="py-3 px-6 text-left">Total number of values, Minimum value, Maximum value, Mean value, Standard deviation</td>
      </tr>
    </tbody>
  </table>
</div>

            <PlantUMLDiagram code={umlCode} />

        </div>
    )
}

export default page