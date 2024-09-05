import React from 'react';

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Define Matter.",
    answer: "Everything which occupies some space and has mass is called matter. Example: Air, Wood, H₂SO₄, etc."
  },
  {
    id: 2,
    question: "Write down the names of different states of matter.",
    answer: "There are three states of matter: (i) Solid, (ii) Liquid, (iii) Gas."
  },
  {
    id: 3,
    question: "Describe gaseous state of matter.",
    answer: "Matter in gaseous state does not have definite shape and volume. Gases occupy all available space and have very weak intermolecular forces."
  },
  {
    id: 4,
    question: "Define Diffusion. On what factor diffusion of gases depends?",
    answer: "Diffusion is spontaneous mixing up of molecules by random motion and collisions to form a homogeneous mixture. Rate of diffusion depends upon the molecular mass of the gas."
  },
  {
    id: 5,
    question: "Define Effusion. On what factor it depends?",
    answer: "Effusion is the escaping of gas molecules through a tiny hole into a space with lesser pressure. For example, when a tire gets punctured, air effuses out. Effusion depends upon the molecular masses of gases."
  },
  {
    id: 6,
    question: "Define Pressure. Write down its SI unit.",
    answer: "Pressure is the force (F) exerted per unit surface area (A), P=F/A. The SI unit of pressure is Pascal (Pa), which is also called Nm². One Pascal (Pa) = 1 Nm²."
  },
  {
    id: 7,
    question: "Write down the name of instruments with the help of which we measure the pressure.",
    answer: "There are two instruments to measure pressure: (i) Barometer, used to measure atmospheric pressure, and (ii) Manometer, used to measure pressure in the laboratory."
  },
  {
    id: 8,
    question: "Define standard atmospheric pressure.",
    answer: "Standard atmospheric pressure is defined as the pressure exerted by a mercury column of 760 mm height at sea level. It is sufficient pressure to support a column of mercury in height at sea level."
  },
  {
    id: 9,
    question: "How are Gases compressible?",
    answer: "Gases are highly compressible due to empty spaces between their molecules."
  },
  {
    id: 10,
    question: "Describe the mobility of gas molecules.",
    answer: "Gas molecules are always in a state of continuous motion. They can move from one place to another because gas molecules possess very high kinetic energy."
  },
  {
    id: 11,
    question: "Describe the density of gases.",
    answer: "Density is the ratio of mass and volume (m/v). Gases have lower density than liquids and solids. Density of gases is expressed in grams per dm³."
  },
  {
    id: 12,
    question: "Why is the rate of diffusion of gases faster than that of liquids?",
    answer: "Gas molecules have insignificant intermolecular forces compared to liquids. Therefore, the rate of diffusion of gases is faster than that of liquids."
  },
  {
    id: 13,
    question: "What do you mean by Pascal? How many Pascals are equal to 1 atm?",
    answer: "Pascal is the SI unit of pressure. One Pascal (Pa) = 1 Nm². 1 atm = 101325 Pa."
  },
  {
    id: 14,
    question: "Does the density of a gas decrease on cooling?",
    answer: "The density of gases increases by cooling because their volume decreases. For example, at normal atmospheric pressure, the density of oxygen gas is 1.4 g/dm³ at 20°C and 1.5 g/dm³ at 0°C."
  },
  {
    id: 15,
    question: "Why is the density of gas measured in g/dm³, while that of a liquid is expressed in g/cm³?",
    answer: "Gases have low densities due to light mass and more volume occupied by the gas molecules. That is why gas density is expressed in grams per dm³, whereas liquid and solid densities are expressed in grams per cm³ because liquids and solids are 1000 times denser than gases."
  },
  {
    id: 16,
    question: "Convert the following: a) 70 cm of Hg to atm",
    answer: "We know that 760 cm Hg = 1 atm. Therefore, 70 cm Hg = 70 / 760 = 0.092 atm."
  },
  {
    id: 17,
    question: "Convert the following: b) 3.5 atm to torr",
    answer: "1 atm = 760 torr. Therefore, 3.5 atm = 3.5 × 760 = 2660 torr."
  },
  {
    id: 18,
    question: "Convert the following: c) 1.5 atm to Pa",
    answer: "1 atm = 101325 Pa. Therefore, 1.5 atm = 1.5 × 101325 = 151987.5 Pa."
  },
  {
    id: 19,
    question: "Define Boyle's law.",
    answer: "Boyle's law states that the volume of a given mass of a gas is inversely proportional to its pressure, provided the temperature remains constant."
  },
  {
    id: 20,
    question: "Who was Robert Boyle?",
    answer: "Robert Boyle (1627-1691) was a natural philosopher, chemist, physicist, and inventor. He is famous for Boyle's law of gases."
  },
  {
    id: 21,
    question: "Is Boyle's law applicable to liquids?",
    answer: "No, Boyle's law is only applicable to gases."
  },
  {
    id: 22,
    question: "Is Boyle's law valid at very high temperatures?",
    answer: "No, Boyle's law is only valid at constant temperatures."
  },
  {
    id: 23,
    question: "What will happen if the pressure on a sample of gas is raised three times and its temperature is kept constant?",
    answer: "If the pressure on a sample of gas is raised three times at constant temperature, the volume will decrease to one-third of its original volume."
  },
  {
    id: 24,
    question: "Who was J. Charles?",
    answer: "J. Charles (1746-1823) was a French inventor, scientist, mathematician, and balloonist. He described how gases tend to expand when heated."
  },
  {
    id: 25,
    question: "Define Charles' law.",
    answer: "Charles' law, presented by J. Charles in 1789, states that the volume of a given mass of a gas is directly proportional to the absolute temperature if the pressure is kept constant."
  },
  {
    id: 26,
    question: "What is the absolute temperature scale?",
    answer: "The absolute temperature scale or Kelvin scale, introduced by Lord Kelvin, starts from 0 K (absolute zero), which is -273.15°C. It is the temperature at which an ideal gas would have zero volume."
  },
  {
    id: 27,
    question: "Which parameters are kept constant in Charles's Law?",
    answer: "In Charles's Law, pressure remains constant."
  },
  {
    id: 28,
    question: "Why does the volume of gas decrease with an increase in pressure?",
    answer: "The volume of gas decreases with an increase in pressure because pressure and volume are inversely proportional to each other. When pressure increases, volume decreases, and vice versa."
  },
  {
    id: 29,
    question: "Does the Kelvin scale show a negative temperature?",
    answer: "No, the Kelvin scale does not show negative values. 0 K is equivalent to -273°C."
  },
  {
    id: 30,
    question: "When a gas is allowed to expand, what will be its effect on its temperature?",
    answer: "When a gas expands, its temperature will increase because volume and temperature are directly proportional to each other."
  },
  {
    id: 31,
    question: "Can you cool a gas by increasing its volume?",
    answer: "Yes, by suddenly increasing the volume of a gas, it results in a cooling effect."
  },
  {
    id: 32,
    question: "In which units is body temperature measured?",
    answer: "Body temperature is measured in Fahrenheit. Normal body temperature is 98.6°F, which is equivalent to 37°C."
  },
  {
    id: 33,
    question: "What is meant by liquid?",
    answer: "Matter that has an indefinite shape but a definite volume is called a liquid. Examples include water, milk, etc."
  },
  {
    id: 34,
    question: "Define evaporation. On which factors does it depend?",
    answer: "Evaporation is the process of molecules escaping spontaneously from the surface of a liquid. It depends on the following factors: (i) Temperature, (ii) Surface area, (iii) Wind speed, (iv) Humidity."
  },
  {
    id: 35,
    question: "Why does a liquid have a definite volume?",
    answer: "A liquid has a definite volume because the intermolecular forces are strong enough to keep the liquid molecules together, unlike gases."
  },
  {
    id: 36,
    question: "How can you measure the density of a liquid?",
    answer: "Density of a liquid can be measured using a hydrometer or by calculating mass per unit volume using a balance and graduated cylinder."
  },
  {
    id: 37,
    question: "How do you convert temperature from Fahrenheit to Celsius?",
    answer: "To convert Fahrenheit to Celsius, use the formula: (°F - 32) × 5/9 = °C. For example, to convert 98.6°F to Celsius: (98.6 - 32) × 5/9 = 37°C."
  },
  {
    id: 38,
    question: "Why does ice float on water?",
    answer: "Ice floats on water because it is less dense than liquid water. When water freezes, it expands and becomes less dense."
  },
  {
    id: 39,
    question: "What happens to the density of a gas if its temperature is increased?",
    answer: "When the temperature of a gas is increased, its volume expands, which decreases its density because density is the mass divided by volume."
  },
  {
    id: 40,
    question: "Define the term 'pressure' in terms of force and area.",
    answer: "Pressure is the force exerted per unit area. It can be calculated using the formula: Pressure = Force / Area."
  },
];

const ShortAnswerQuestions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Short Answer Questions</h1>
      {questions.map((q) => (
        <div key={q.id} className="mb-6">
          <h2 className="font-semibold text-lg text-gray-800 mb-2">
            Q{q.id}. {q.question}
          </h2>
          <p className="text-gray-600">{q.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default ShortAnswerQuestions;
