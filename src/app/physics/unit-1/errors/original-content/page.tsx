const ErrorsSection = () => {
    return (
        <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 text-transparent bg-clip-text">
                1.8 ERRORS
            </h2>
            <p className="text-lg text-gray-700">
                Every measurement, no matter how carefully taken, has a certain amount of doubt known as error. Error is simply the uncertainty that arises during measurement. This means that all measurements are only approximate due to the presence of errors.
                There are two main types of errors in measurement: systematic errors and random errors.
            </p>

            <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                1.8.1 SYSTEMATIC ERRORS
            </h3>
            <p className="text-lg text-gray-700">
                Systematic errors tend to occur consistently in one direction, either positive or negative. Some sources of systematic errors include:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700">
                <li>Instrumental errors, which result from imperfections in the design or calibration of the measuring instrument, as well as zero errors.</li>
                <li>Imperfections in the experimental technique or procedure, such as changes in external conditions like temperature, humidity, or wind velocity, which can systematically affect the measurement.</li>
                <li>Personal errors, which arise from an individual&apos;   s bias, improper setup of the apparatus, or carelessness in taking observations without following proper precautions.</li>
            </ul>
            <p className="text-lg text-gray-700">
                Systematic errors can be reduced by improving experimental techniques, choosing better instruments, and minimizing personal bias as much as possible. These errors can be estimated to some extent for a given setup, and the necessary adjustments can be made to the measurements.
            </p>

            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text">
                1.8.2 RANDOM ERRORS
            </h3>
            <p className="text-lg text-gray-700">
                Random errors are unpredictable and uncontrollable errors that can happen irregularly. These errors can be caused by fluctuations in experimental conditions or imperfections in measuring instruments. The person conducting the measurements can also introduce variability due to factors like reaction time or technique.
            </p>
            <p className="text-lg text-gray-700">
                Because of this, if the same person repeats an observation multiple times, they are likely to get different readings each time. To minimize random errors, it is important to take repeated measurements and use statistical analysis to account for the variability.
            </p>
            <p className="text-lg text-gray-700">
                During measurements, it is always a good idea to take multiple of the same measurement and find the mean, as it reduces errors.
            </p>
        </div>
    );
};

export default ErrorsSection;
