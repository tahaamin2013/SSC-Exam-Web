// pages/daily-life-applications.tsx

import { NextPage } from 'next';
import Head from 'next/head';

const DailyLifeApplications: NextPage = () => {
    return (
        <>
            <Head>
                <title>Daily Life Applications of Chemistry</title>
                <meta name="description" content="Applications of Chemistry in Daily Life" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="p-8 bg-gray-100 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8">1.4 Daily Life Applications of Chemistry</h1>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Organic Chemistry</h2>
                            <p>
                                To treat diseases, organic chemists synthesize new medicines that interact with specific targets like proteins or enzymes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Inorganic Chemistry</h2>
                            <p>
                                Lithium-ion (Li-ion) batteries are used as rechargeable batteries for electronics, toys, wireless headphones, handheld power tools, small and large appliances, electrical storage devices, and electric vehicles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Analytical Chemistry</h2>
                            <p>
                                Forensic chemistry is the application of analytical chemistry. It involves the examination of physical traces, such as body fluids, bones, fibers, and drugs. It can be used to identify an unknown compound. For example, drugs are often found in various colored powders and are analyzed to determine their content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Physical Chemistry</h2>
                            <p>
                                Physical chemistry is a part of our everyday life. The batteries in our vehicles are built on the principle of electrochemistry.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Environmental Chemistry</h2>
                            <p>
                                Environmental chemistry is used to protect water that has been poisoned by soil and dust by using different methods, such as sedimentation, filtration, and disinfection.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};

export default DailyLifeApplications;
