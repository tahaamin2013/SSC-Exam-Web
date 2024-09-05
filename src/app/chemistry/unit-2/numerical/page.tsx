import { FC } from "react";

const NumericalQuestions: FC = () => {
    return (
        <div className="container mx-auto py-10 px-5">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">Unit Conversions & Gas Laws</h1>
        </header>
    
        <section className="mb-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1) Unit Conversion</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold text-xl">a) 850 mm Hg to atm</h3>
            <p className="ml-4">Solution: Atm = mm of Hg / 760<br />
            Atm = 850 / 760 = <span className="font-semibold text-blue-600">1.12 atm</span></p>
          </div>
    
          <div className="mb-4">
            <h3 className="font-semibold text-xl">b) 205000 Pa to atm</h3>
            <p className="ml-4">Solution: Pa / 101325 = <span className="font-semibold text-blue-600">2.02 atm</span></p>
          </div>
    
          <div className="mb-4">
            <h3 className="font-semibold text-xl">c) 560 torr to cm Hg</h3>
            <p className="ml-4">Solution: torr × 0.01 = <span className="font-semibold text-blue-600">56 cm Hg</span></p>
          </div>
    
          <div className="mb-4">
            <h3 className="font-semibold text-xl">d) 1.25 atm to Pa</h3>
            <p className="ml-4">Solution: Atm × 101325 = <span className="font-semibold text-blue-600">126656 Pa</span></p>
          </div>
        </section>
    
        <section className="mb-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2) Temperature Conversion</h2>
    
          <div className="mb-4">
            <h3 className="font-semibold text-xl">a) 750°C to K</h3>
            <p className="ml-4">Solution: K = °C + 273 = 750 + 273 = <span className="font-semibold text-blue-600">1023 K</span></p>
          </div>
    
          <div className="mb-4">
            <h3 className="font-semibold text-xl">b) 150°C to K</h3>
            <p className="ml-4">Solution: K = 150 + 273 = <span className="font-semibold text-blue-600">423 K</span></p>
          </div>
    
          <div className="mb-4">
            <h3 className="font-semibold text-xl">c) 100 K to °C</h3>
            <p className="ml-4">Solution: °C = 100 - 273 = <span className="font-semibold text-blue-600">-173°C</span></p>
          </div>
    
          <div className="mb-4">
            <h3 className="font-semibold text-xl">d) 172 K to °C</h3>
            <p className="ml-4">Solution: °C = 172 - 273 = <span className="font-semibold text-blue-600">-101°C</span></p>
          </div>
        </section>
    
        <section className="mb-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3) Boyle&apos;s Law Problem</h2>
          
          <div className="mb-4">
            <p className="ml-4">A gas at pressure 912 mm of Hg has volume 450 cm³. What will be its volume at 0.4 atm?</p>
            <p className="ml-4 font-semibold text-blue-600">Solution: V<sub>2</sub> = 1350 cm³</p>
          </div>
        </section>
    
        <section className="mb-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4) Gas Expansion</h2>
          
          <div className="mb-4">
            <p className="ml-4">A gas occupies a volume of 800 cm³ at 1 atm. When it is allowed to expand to 1200 cm³, what will be its pressure in mm Hg?</p>
            <p className="ml-4 font-semibold text-blue-600">Solution: P<sub>2</sub> = 506.66 mm Hg</p>
          </div>
        </section>
    
        <section className="mb-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5) Charles&apos; Law Problem</h2>
          
          <div className="mb-4">
            <p className="ml-4">It is desired to increase the volume of a fixed amount of gas from 87.5 to 118 cm³ while holding the pressure constant. The initial temperature is 23°C.</p>
            <p className="ml-4 font-semibold text-blue-600">Solution: T<sub>2</sub> = 399 K = 126°C</p>
          </div>
        </section>
    
        <section className="mb-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6) Gas Cooling</h2>
          
          <div className="mb-4">
            <p className="ml-4">A sample of gas is cooled from 30°C to 10°C at constant pressure.</p>
            <p className="ml-4 font-semibold text-blue-600">Solution: The volume decreases in the ratio 1:0.93.</p>
          </div>
        </section>
    
        <section className="mb-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7) Balloon Contraction</h2>
          
          <div className="mb-4">
            <p className="ml-4">A balloon with a volume of 1.6 dm³ at standard temperature and pressure is taken underwater to a depth where its pressure increases to 3.0 atm. Temperature remains unchanged.</p>
            <p className="ml-4 font-semibold text-blue-600">Solution: The volume decreases to 0.53 dm³, and the balloon contracts.</p>
          </div>
        </section>
    
        <section className="mb-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8) Neon Gas Volume Change</h2>
          
          <div className="mb-4">
            <p className="ml-4">A sample of neon gas occupies 75.0 cm³ at 0.4 atm. What would be the volume at 1.0 atm if temperature remains constant?</p>
            <p className="ml-4 font-semibold text-blue-600">Solution: V<sub>2</sub> = 30.0 cm³</p>
          </div>
        </section>
    
        <section className="mb-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9) Gas Temperature Increase</h2>
          
          <div className="mb-4">
            <p className="ml-4">A gas occupies 35.0 dm³ at 17°C. If the temperature rises to 34°C at constant pressure, would you expect the volume to double?</p>
            <p className="ml-4 font-semibold text-blue-600">Solution: The volume will not double. V<sub>2</sub> = 37.05 dm³</p>
          </div>
        </section>
    
        <section className="mb-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10) Titan&apos;s Atmospheric Pressure</h2>
          
          <div className="mb-4">
            <p className="ml-4">The atmospheric pressure on Titan is 1.50 atm. Express this pressure in torr.</p>
            <p className="ml-4 font-semibold text-blue-600">Solution: P = 1140 torr</p>
          </div>
        </section>
      </div>
    );
};

export default NumericalQuestions;
