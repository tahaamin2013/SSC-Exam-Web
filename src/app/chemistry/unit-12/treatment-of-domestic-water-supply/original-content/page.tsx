import React from 'react';

const DomesticWaterTreatment = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">12.2 TREATMENT OF DOMESTIC WATER SUPPLY</h1>

      <p className="mb-4">The treatment of domestic water supply involves several processes to ensure that water is safe for human use.</p>

      <h2 className="text-2xl font-semibold mb-4">RAW WATER TREATMENT</h2>
      <p className="mb-4">Raw water is treated in a municipal water purification plant, to make it fit for drinking and domestic purposes. Various stages in this treatment are:</p>

      <ol className="list-decimal pl-6 mb-6">
        <li className="mb-2"><strong>Sedimentation:</strong> It is the process in which water is allowed to stand in a reservoir. The suspended matter sinks to the bottom.</li>
        <li className="mb-2"><strong>Coagulation:</strong> it is the process in which water is treated with slaked lime and alum. These materials react to form a gelatinous mass of aluminum hydroxide</li>
        <li className="mb-2">3Ca (OH)2(aq) + Al2(SO4)3(aq) →2Al(OH)3(s) + 3CaSO4(aq)</li>
        <li className="mb-2">The aluminum Filtration: carries down dirt particles and bacteria. The water is then filtered through sand and gravel. Sometimes it through charcoal to remove coloured and odorous componye 2 Is filtered</li>
        <li className="mb-2"><strong>Chlorination:</strong> in the final step, chlorine is added to kill any remaining bacteria, Chlorine reacts with water to form hypochlorous acid HClO which kill maining b</li>
        <li className="mb-2">Cl2(aq) + H2O(1) HCIO(aq) + H (aq) + Cl</li>
      </ol>

      <div className="mb-6">
        <p className="font-semibold">Water</p>
        <p>↓</p>
        <p>Sedimentation</p>
        <p>↓</p>
        <p>Coagulation</p>
        <p>↓</p>
        <p>Fitration</p>
        <p>↓</p>
        <p>Chionmallon</p>
        <p>↓</p>
        <p>Pure Water</p>
      </div>

      <p className="mb-4">Figure 12.1: Flow sheet diagram for water purification plant</p>

      <h2 className="text-2xl font-semibold mb-4">12.2.1 Distilled Water</h2>
      <p className="mb-4">Water purified by distillation is called distilled water. The process of distillation involves heating water to boiling point, collecting the vapors, and condensing it back into the liquid. The impurities are left behind. Distilled water is free of any contaminants. The electrical conductivity of distilled water is very low. The pH of distilled water is 7.</p>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
        <h3 className="font-bold">DO YOU KNOW?</h3>
        <p>Long-term drinking of distilled water can cause mineral deficiency because it lacks essential minerals found in natural water sources. For drinking purposes, it is better to use treated tap water, bottled water or natural spring water.</p>
      </div>

      <h3 className="text-xl font-semibold mb-2">Uses in chemistry:</h3>
      <ol className="list-decimal pl-6 mb-6">
        <li>Distilled water is usually used in laboratories to prepare chemical reagents and solutions.</li>
        <li>Distilled water is used in the calibration of sensors in analytical instruments, e.g. pH meter.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">12.2.2 Tap water:</h2>
      <p className="mb-4">Water supplied through the municipal water system to households and for commercial purposes is called tap water. It comes from various sources, including, streams, rivers, lakes, reservoirs, and groundwater. It undergoes processes to meet safety standards to make it safe for people.</p>

      <h3 className="text-xl font-semibold mb-2">Applications in Chemistry Laboratory</h3>
      <ol className="list-decimal pl-6 mb-6">
        <li>Tap water is used as a solvent for general purposes, such as cleaning glassware, equipment, etc.</li>
        <li>It is also used for educational and simple demonstration as a readily available solvent.</li>
      </ol>
    </div>
  );
};

export default DomesticWaterTreatment;