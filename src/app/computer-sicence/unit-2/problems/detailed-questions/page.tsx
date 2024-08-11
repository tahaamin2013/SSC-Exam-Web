import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
    // Economic
    { question: "What to produce?", answer: "Deciding what to produce involves analyzing market demand, resource availability, and potential profitability." },
    { question: "How to manage limited budgets?", answer: "Effective budget management involves prioritizing spending, tracking expenses, and finding cost-saving measures." },
    { question: "How to address inflation in a growing economy?", answer: "Addressing inflation may involve monetary policy adjustments, managing supply chain issues, and controlling public spending." },
    { question: "What are effective strategies for reducing unemployment?", answer: "Strategies include job creation programs, workforce training, and economic incentives for businesses." },
    { question: "How to balance economic growth with environmental sustainability?", answer: "Balancing growth with sustainability involves adopting green technologies, enforcing environmental regulations, and promoting sustainable practices." },

    // Healthcare
    { question: "How to expand access to medicines?", answer: "Expanding access can be achieved through improving distribution networks, subsidizing costs, and increasing local production." },
    { question: "How to stop infectious diseases?", answer: "Preventing infectious diseases involves vaccination programs, improving sanitation, and public health education." },
    { question: "What are the most effective ways to improve mental health services?", answer: "Improving mental health services can include increasing funding, training healthcare providers, and expanding access to therapy and counseling." },
    { question: "How can we reduce the cost of healthcare while maintaining quality?", answer: "Reducing costs can be achieved through preventive care, streamlining administrative processes, and leveraging technology." },
    { question: "How to tackle the issue of antibiotic resistance?", answer: "Addressing antibiotic resistance involves promoting proper use of antibiotics, increasing research, and improving infection control measures." },

    // Education
    { question: "How to increase literacy rates in Pakistan?", answer: "Increasing literacy rates can be done through improving educational infrastructure, teacher training, and community literacy programs." },
    { question: "What subject areas of education should be focused on more?", answer: "Focus areas may include STEM education, critical thinking skills, and digital literacy." },
    { question: "How to incorporate technology effectively in classrooms?", answer: "Effective incorporation involves using interactive tools, providing training for educators, and ensuring access to necessary hardware and software." },
    { question: "What methods can be used to reduce dropout rates in schools?", answer: "Methods include implementing mentorship programs, improving student engagement, and addressing socioeconomic barriers." },
    { question: "How to ensure equal educational opportunities for students from different socio-economic backgrounds?", answer: "Ensuring equality involves providing financial aid, equitable resource distribution, and inclusive curriculum development." },

    // Transportation
    { question: "Why is the number of vehicles growing up?", answer: "Vehicle growth can be attributed to increased urbanization, higher incomes, and greater demand for personal transportation." },
    { question: "Why are the accidents on motorways increasing?", answer: "Increasing accidents may be due to factors such as speeding, distracted driving, and inadequate road safety measures." },
    { question: "How to improve public transportation infrastructure in urban areas?", answer: "Improving infrastructure involves expanding transit networks, investing in modern vehicles, and enhancing service reliability." },
    { question: "What are the best solutions for reducing traffic congestion?", answer: "Solutions include optimizing traffic flow, investing in public transit, and implementing congestion pricing." },
    { question: "How to promote the use of electric vehicles?", answer: "Promoting electric vehicles involves providing incentives, investing in charging infrastructure, and raising public awareness." },

    // Internet
    { question: "How to secure mobile banking transactions?", answer: "Securing transactions involves using encryption, multi-factor authentication, and regularly updating security protocols." },
    { question: "Why do websites show unwanted advertisements?", answer: "Unwanted ads often appear due to ad networks targeting based on user data and the monetization strategies of websites." },
    { question: "How to protect personal data online?", answer: "Protecting personal data involves using strong passwords, enabling privacy settings, and avoiding sharing sensitive information." },
    { question: "What are the risks of using public Wi-Fi?", answer: "Risks include data interception, unauthorized access, and exposure to malware." },
    { question: "How can we prevent online scams and phishing attacks?", answer: "Prevention involves being cautious with emails and links, using security software, and educating users about common scams." },

    // Biology
    { question: "How do 5G cell phone signals harm humans?", answer: "The potential risks of 5G signals are still under investigation, but concerns include possible impacts on cellular health and increased exposure to electromagnetic fields." },
    { question: "How do trees give earth all its oxygen?", answer: "Trees produce oxygen through photosynthesis, where they convert carbon dioxide and water into glucose and oxygen using sunlight." },
    { question: "What role do microorganisms play in soil health?", answer: "Microorganisms decompose organic matter, enhance nutrient availability, and support plant growth by maintaining soil structure." },
    { question: "How do genetic mutations contribute to evolution?", answer: "Genetic mutations create variations in organisms, which can lead to evolutionary changes when beneficial traits are passed down." },
    { question: "What is the significance of biodiversity for ecosystems?", answer: "Biodiversity contributes to ecosystem stability, resilience, and productivity by supporting a wide range of species and ecological functions." },

    // General
    { question: "How does climate change affect wildlife?", answer: "Climate change affects wildlife through habitat loss, altered food sources, and changing migration patterns." },
    { question: "What are the main sources of renewable energy?", answer: "Main sources include solar, wind, hydroelectric, and geothermal energy." },
    { question: "How can we reduce plastic pollution in the oceans?", answer: "Reducing plastic pollution involves minimizing plastic use, improving waste management, and supporting cleanup initiatives." },
    { question: "What strategies can be used to address global water scarcity?", answer: "Strategies include improving water management, investing in desalination technology, and promoting water conservation practices." },
    { question: "How does human activity impact natural habitats?", answer: "Human activity impacts habitats through deforestation, pollution, and urbanization, which can lead to habitat destruction and loss of biodiversity." }
];

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Long Answer Questions (8 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {questionsAndAnswers.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default Page
