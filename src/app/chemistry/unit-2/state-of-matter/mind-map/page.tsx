import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">STATE OF MATTER</h1>
        <PlantUMLDiagram
          code={`
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
      BackgroundColor pink
    }
    :depth(3) {
      BackgroundColor lightyellow
    }
}
</style>
* States of Matter
** Four Main States
*** Gas
*** Liquid
*** Solid
*** Plasma
** Characteristics
*** Determined by particle arrangement and movement
*** Influenced by intermolecular and atomic forces
*** Can change with energy input
** Energy and State Changes
*** Heating solids can turn them into liquids or gases
*** High temperatures or strong electric fields can create plasma
*** Normal conditions usually maintain one distinct state
** Special States
*** Liquid Crystal
**** Forms when some crystalline solids are heated
**** Has properties of both liquids and solids
**** Exists within a certain temperature range
*** Bose-Einstein Condensates (BEC)
**** Occurs at extremely low temperatures
**** Found in superfluids and superconductors
left side
** Macroscopic Properties
*** Density
*** Fluidity
*** Compressibility
** State Characteristics
*** Gas
**** Low density
**** Very compressible
**** Can flow
*** Liquid
**** High density
**** Moderately compressible
**** Can flow
*** Solid
**** High density
**** Not compressible
**** Cannot flow
** State Transitions
*** Can be achieved through physical techniques
*** Chemical composition remains unchanged
@endmindmap`}
        />

<div class="container mx-auto p-8">
        <header class="mb-12 text-center">
            <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 mb-4">States of Matter</h1>
            <p class="text-lg text-gray-800">Understanding the different forms of matter and their properties.</p>
        </header>

        <section class="mb-8">
            <h2 class="text-3xl font-semibold text-teal-600 mb-4">Main States of Matter</h2>
            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <li class="card bg-gradient-to-r from-red-200 to-red-100 p-6 rounded-lg shadow-lg hover-effect">
                    <h3 class="text-xl font-bold text-black mb-2">Solid</h3>
                    <p class="text-gray-800">Defined shape and volume. Particles are closely packed and vibrate in place.</p>
                </li>
                <li class="card bg-gradient-to-r from-blue-200 to-blue-100 p-6 rounded-lg shadow-lg hover-effect">
                    <h3 class="text-xl font-bold text-black mb-2">Liquid</h3>
                    <p class="text-gray-800">Defined volume but no fixed shape. Particles are less packed and flow past each other.</p>
                </li>
                <li class="card bg-gradient-to-r from-green-200 to-green-100 p-6 rounded-lg shadow-lg hover-effect">
                    <h3 class="text-xl font-bold text-black mb-2">Gas</h3>
                    <p class="text-gray-800">No fixed shape or volume. Particles are spread out and move freely.</p>
                </li>
                <li class="card bg-gradient-to-r from-purple-200 to-purple-100 p-6 rounded-lg shadow-lg hover-effect">
                    <h3 class="text-xl font-bold text-black mb-2">Plasma</h3>
                    <p class="text-gray-800">Ionized gas with high energy. Particles are electrically charged.</p>
                </li>
            </ul>
        </section>

        <section class="mb-12 gradient-bg p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-semibold text-black mb-4">Changing States of Matter</h2>
            <p class="text-black mb-4">Energy can change matter from one state to another. Heat can turn a solid into a liquid or gas. Very high heat can turn a gas into plasma.</p>
            <p class="text-black mb-4">On Earth, most things are solid, liquid, or gas. We don't see plasma much. It's too hot here for atoms to break apart into plasma.</p>
            <p class="text-black mb-4">Some solids turn into a cloudy liquid when heated. This is called a liquid crystal. It's part liquid, part solid. Heat it more, and it becomes a clear liquid.</p>
            <p class="text-black">There are other rare states too. One is called Bose-Einstein condensate. It happens when atoms get very, very cold.</p>
        </section>

        <section class="mb-12">
            <h2 class="text-3xl font-semibold text-teal-600 mb-4">Properties of Matter States</h2>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-2xl font-semibold text-black mb-4">Gases</h3>
                <ul class="list-disc pl-5 text-gray-800">
                    <li>Not dense</li>
                    <li>Easy to squeeze</li>
                    <li>Can flow</li>
                </ul>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg mt-6">
                <h3 class="text-2xl font-semibold text-black mb-4">Liquids</h3>
                <ul class="list-disc pl-5 text-gray-800">
                    <li>Dense</li>
                    <li>Can be squeezed a bit</li>
                    <li>Can flow</li>
                </ul>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg mt-6">
                <h3 class="text-2xl font-semibold text-black mb-4">Solids</h3>
                <ul class="list-disc pl-5 text-gray-800">
                    <li>Dense</li>
                    <li>Hard to squeeze</li>
                    <li>Can't flow</li>
                </ul>
            </div>
        </section>

        <footer class="text-center">
            <p class="text-gray-800">We can change states by heating or cooling. Like when water boils and turns to steam. The tiny bits that make up water don't change. Just how they move and stick together.</p>
        </footer>
    </div>
       
      </section>
    </div>
  );
};

export default MagneticMindmap;