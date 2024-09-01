import React from 'react';

type SIContentItem = {
    subtitle: string;
    items: string[];
};

type ContentItem = string | SIContentItem;

type Section = {
    title: string;
    content: ContentItem[];
};

const sections: Section[] = [
    {
        title: "1. Purpose of Prefixes",
        content: [
            "Express numbers in convenient powers of ten",
            "Simplify standard form/scientific notation",
            "Allow use of more appropriate units for scale"
        ]
    },
    {
        title: "2. Key SI Prefixes",
        content: [
            {
                subtitle: "Large numbers:", items: [
                    "Exa (E): 10^18",
                    "Peta (P): 10^15",
                    "Tera (T): 10^12",
                    "Giga (G): 10^9",
                    "Mega (M): 10^6",
                    "Kilo (k): 10^3"
                ]
            },
            {
                subtitle: "Small numbers:", items: [
                    "Milli (m): 10^-3",
                    "Micro (μ): 10^-6",
                    "Nano (n): 10^-9",
                    "Pico (p): 10^-12",
                    "Femto (f): 10^-15",
                    "Atto (a): 10^-18"
                ]
            }
        ]
    },
    {
        title: "3. Examples of Usage",
        content: [
            "Time: 86,400 s = 8.64 x 10^4 s = 86.4 ks",
            "Distance: 4.132 x 10^16 m = 41.32 Pm",
            "Length: 4.0 x 10^-4 m = 40 mm",
            "Mass: 1.0 x 10^-4 g = 100 mg"
        ]
    },
    {
        title: "4. Volume Relationships",
        content: [
            "1 L = 1 dm^3 = 1000 cm^3",
            "1 mL = 1 cm^3"
        ]
    },
    {
        title: "5. Scientific Scale Examples",
        content: [
            "Sun&apos;smass: 1.97 x 10^30 kg",
            "Hydrogen atom radius: 5 x 10^-11 m",
            "Earth&apos;s age: 1.433 x 10^17 s",
            "Paper thickness: 1 x 10^5 nm = 1 x 10^-4 m",
            "Pakistan power capacity: 4 x 10^4 MW",
            "Hard disk capacity: 30 x 10^12 bytes"
        ]
    },
    {
        title: "6. Key Points",
        content: [
            "Prefixes allow for more intuitive expression of very large or small quantities",
            "Useful for converting between different scales and units",
            "Essential in scientific and engineering communications"
        ]
    }
];

const ScientificNotationPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Prefixes and Powers of Ten in Scientific Notation
                </h1>
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h2 className="text-lg leading-6 font-medium text-gray-900">
                                    {section.title}
                                </h2>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <dl className="sm:divide-y sm:divide-gray-200">
                                    {section.content.some(item => typeof item === 'object' && 'subtitle' in item) ? (
                                        section.content.map((item, index) => (
                                            typeof item === 'object' && 'subtitle' in item ? (
                                                <div key={index} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">{item.subtitle}</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            {item.items.map((subItem, subIndex) => (
                                                                <li key={subIndex}>{subItem}</li>
                                                            ))}
                                                        </ul>
                                                    </dd>
                                                </div>
                                            ) : null
                                        ))
                                    ) : (
                                        <div className="py-4 sm:py-5 sm:px-6">
                                            <ul className="list-disc pl-5 space-y-1">
                                                {section.content.map((item, index) => (
                                                    typeof item === 'string' ? (
                                                        <li key={index} className="text-sm text-gray-900">{item}</li>
                                                    ) : null
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </dl>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScientificNotationPage;
