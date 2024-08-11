// components/ScienceContent.tsx
import { FC } from 'react';
import dynamic from 'next/dynamic';

const DynamicPlantUMLDiagram = dynamic(() => import('./PlantUMLDiagram'), { ssr: false });

const umlCode = `
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightblue
    BorderColor darkblue
    FontColor navy
  }
  :depth(1) {
    BackgroundColor lightyellow
  }
  :depth(2) {
    BackgroundColor lightgreen
  }
}
</style>
*[#lightblue] Science
** Origin
*** Latin "Scientia"
** Methods
*** Imagination
*** Experimentation
*** Deduction
** Knowledge gained
*** Experiments
*** Observations
*** Trials
left side
** Physical Sciences
*** Physics
*** Chemistry
*** Geology
*** Astronomy
*** Meterelogy
** Biological Sciences
*** Botany
*** Zoology
*** Genetics
*** Medicine
@endmindmap
`;

const ScienceContent: FC = () => (
  <>
    <h2 className="text-3xl font-bold mb-4 text-indigo-700">Nature of Science</h2>
    <DynamicPlantUMLDiagram code={umlCode} />
    <SummaryTable />
  </>
);

const SummaryTable: FC = () => (
  <div className="mt-8">
    <h3 className="text-xl font-semibold mb-4">Summary of Science</h3>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-indigo-200 p-2">Aspect</th>
            <th className="border border-indigo-200 p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-indigo-200 p-2 font-semibold">Definition</td>
            <td className="border border-indigo-200 p-2">Study of physical nature and its aspects</td>
          </tr>
          <tr>
            <td className="border border-indigo-200 p-2 font-semibold">Origin</td>
            <td className="border border-indigo-200 p-2">Latin word &quot;Scientia&quot; meaning &quot;to know&quot;</td>
          </tr>
          <tr>
            <td className="border border-indigo-200 p-2 font-semibold">Components</td>
            <td className="border border-indigo-200 p-2">Imagination, Experimentation, Deduction</td>
          </tr>
          <tr>
            <td className="border border-indigo-200 p-2 font-semibold">Knowledge Acquisition</td>
            <td className="border border-indigo-200 p-2">Experiments, Observations, Trials</td>
          </tr>
          <tr>
            <td className="border border-indigo-200 p-2 font-semibold">Main Branches</td>
            <td className="border border-indigo-200 p-2">Physical Sciences, Biological Sciences</td>
          </tr>
          <tr>
            <td className="border border-indigo-200 p-2 font-semibold">Physical Sciences</td>
            <td className="border border-indigo-200 p-2">Physics, Chemistry, Geology, Geography</td>
          </tr>
          <tr>
            <td className="border border-indigo-200 p-2 font-semibold">Biological Sciences</td>
            <td className="border border-indigo-200 p-2">Botany, Zoology, Genetics, Medicine</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ScienceContent;