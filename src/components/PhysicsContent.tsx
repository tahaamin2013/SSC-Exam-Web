import { FC } from 'react';
import dynamic from 'next/dynamic';

const DynamicPlantUMLDiagram = dynamic(() => import('./PlantUMLDiagram'), { ssr: false });

const umlCode = `
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightcoral
    BorderColor darkred
    FontColor maroon
  }
  :depth(1) {
    BackgroundColor lightsalmon
  }
  :depth(2) {
    BackgroundColor lightpink
  }
}
</style>
*[#lightcoral] Physics
** Scope
*** Atoms to galaxies
*** Natural phenomena
*** Artificial creations
** Applications
*** GPS and navigation
*** Aeronautics
*** Communication
left side
** Key Concepts
*** Matter
*** Energy
*** Space
*** Time
** Objectives
*** Understand physical world
*** Develop theories/laws
** Notable Scientists
*** Isaac Newton
*** Albert Einstein
@endmindmap
`;

const PhysicsContent: FC = () => (
  <>
    <h2 className="text-3xl font-bold mb-4 text-indigo-700">Objectives of Physics</h2>
    <DynamicPlantUMLDiagram code={umlCode} />
    <PhysicsApplications />
  </>
);

const PhysicsApplications: FC = () => (
  <div className="mt-8">
    <h3 className="text-xl font-semibold mb-4">Applications of Physics</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ApplicationCard
        title="GPS and Navigation"
        description="Used in cell phones, aeroplanes, and ships for location and routing"
      />
      <ApplicationCard
        title="Aeronautics"
        description="Pressure difference principles for flight, thermal insulation in bird feathers"
      />
      <ApplicationCard
        title="Communication"
        description="Cell phones use electronic components and electromagnetic waves"
      />
      <ApplicationCard
        title="Climate Moderation"
        description="Large water bodies moderate nearby climates due to water&apos;sheat capacity"
      />
      <ApplicationCard
        title="Vehicles"
        description="Use of mechanics and thermodynamics for energy conversion"
      />
      <ApplicationCard
        title="Marine Vehicles"
        description="Submarines and ships operate on the principle of floatation"
      />
    </div>
  </div>
);

const ApplicationCard: FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow duration-300">
    <h4 className="text-lg font-semibold mb-2 text-indigo-600">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default PhysicsContent;