"use client";

import { useState } from "react";
import { create, all } from "mathjs";

const math = create(all, { precision: 64 });

export default function Home() {
  const [input, setInput] = useState("");
  const [roundTo, setRoundTo] = useState<number | null>(null);
  const [result, setResult] = useState<{
    answer: string;
    sigFigs: number;
    decimals: number;
    scientificNotation: string;
  } | null>(null);

  const calculateSigFigs = (num: string): number => {
    const trimmed = num.replace(/^-?0+/, "").replace(/\.?0+$/, "");
    if (trimmed.includes(".")) {
      return trimmed.replace(/\./g, "").length;
    }
    return trimmed.replace(/0+$/, "").length;
  };

  const countDecimals = (num: string): number => {
    const parts = num.split(".");
    return parts.length > 1 ? parts[1].length : 0;
  };

  const toScientificNotation = (num: number): string => {
    return num.toExponential();
  };

  const roundToSigFigs = (num: number, sigFigs: number): number => {
    if (num === 0) return 0;
    const magnitude = Math.floor(Math.log10(Math.abs(num))) + 1;
    const scale = Math.pow(10, sigFigs - magnitude);
    return Math.round(num * scale) / scale;
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = math.evaluate(input);
      const number = parseFloat(calculatedResult.toString());
      
      if (isNaN(number)) {
        alert("Please enter a valid expression");
        return;
      }

      const roundedNumber = roundTo ? roundToSigFigs(number, roundTo) : number;
      const roundedString = roundTo ? roundedNumber.toString() : calculatedResult.toString();

      setResult({
        answer: roundedString,
        sigFigs: calculateSigFigs(roundedString),
        decimals: countDecimals(roundedString),
        scientificNotation: toScientificNotation(roundedNumber),
      });
    } catch (error) {
      alert("Invalid expression");
    }
  };

  const handleCalcButton = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleCalcClear = () => {
    setInput("");
    setResult(null);
    setRoundTo(null);
  };

  const handleRoundToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setRoundTo(isNaN(value) ? null : value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-lg w-96 border border-blue-200 border-opacity-30">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
          Sig Fig Calculator
        </h1>
        <div className="mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 border-2 border-blue-300 rounded-lg bg-white bg-opacity-20 text-white placeholder-blue-200"
            placeholder="Enter an expression"
          />
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "(", ")"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleCalcButton(btn)}
              className="bg-blue-600 bg-opacity-50 text-white p-2 rounded-lg hover:bg-blue-700 hover:bg-opacity-50 transition-colors"
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="mb-4">
          <label className="text-white block mb-2">Round to significant figures (optional):</label>
          <input
            type="number"
            value={roundTo || ''}
            onChange={handleRoundToChange}
            min="1"
            className="w-full p-2 border-2 border-blue-300 rounded-lg bg-white bg-opacity-20 text-white placeholder-blue-200"
            placeholder="Enter number of sig figs"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <button
            onClick={handleCalculate}
            className="bg-blue-500 bg-opacity-70 text-white p-3 rounded-lg hover:bg-blue-600 hover:bg-opacity-70 transition-colors"
          >
            Calculate
          </button>
          <button
            onClick={handleCalcClear}
            className="bg-red-500 bg-opacity-70 text-white p-3 rounded-lg hover:bg-red-600 hover:bg-opacity-70 transition-colors"
          >
            Clear
          </button>
        </div>
        {result && (
          <div className="mt-6 bg-white bg-opacity-20 p-4 rounded-lg">
            <p className="text-white">
              <strong>Answer:</strong> {result.answer}
            </p>
            <p className="text-white">
              <strong>Significant Figures:</strong> {result.sigFigs}
            </p>
            <p className="text-white">
              <strong>Decimals:</strong> {result.decimals}
            </p>
            <p className="text-white">
              <strong>Scientific Notation:</strong> {result.scientificNotation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}