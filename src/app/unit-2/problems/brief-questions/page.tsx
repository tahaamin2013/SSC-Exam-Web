import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
    { question: "What factors should be considered when deciding what to produce?", answer: "Factors include market demand, resource availability, production costs, and potential profitability." },
    { question: "How can businesses effectively manage limited budgets?", answer: "Businesses can prioritize essential expenditures, adopt cost-saving technologies, and regularly review financial plans to manage limited budgets effectively." },
    { question: "What strategies can improve access to medicines in rural areas?", answer: "Strategies include increasing distribution networks, partnering with local organizations, and utilizing telemedicine services." },
    { question: "How can we effectively combat infectious diseases?", answer: "Effective measures include vaccination programs, improving sanitation and hygiene, and increasing public awareness." },
    { question: "What are effective methods to increase literacy rates in developing countries?", answer: "Methods include improving access to education, training teachers, and providing educational resources and technology." },
    { question: "Which subject areas in education require more focus?", answer: "Subject areas such as STEM (Science, Technology, Engineering, and Mathematics), literacy, and vocational training often require more focus." },
    { question: "What are the causes of the increasing number of vehicles on the road?", answer: "Causes include population growth, increased income levels, and urbanization." },
    { question: "What measures can reduce the frequency of motorway accidents?", answer: "Measures include improving road infrastructure, implementing stricter traffic laws, and promoting driver education and awareness." },
    { question: "How can mobile banking transactions be secured against cyber threats?", answer: "Security can be enhanced through encryption, multi-factor authentication, and regular security updates." },
    { question: "What are the reasons behind unwanted advertisements on websites?", answer: "Reasons include ad revenue generation, targeted advertising practices, and tracking user behavior for marketing purposes." },
    { question: "How does exposure to 5G cell phone signals impact human health?", answer: "Current research indicates that 5G signals are generally considered safe, but ongoing studies are needed to fully understand long-term health effects." },
    { question: "What role do trees play in producing oxygen for the Earth?", answer: "Trees produce oxygen through photosynthesis, a process that converts carbon dioxide and sunlight into oxygen and glucose." },
    { question: "How can we optimize resource allocation in manufacturing?", answer: "Optimization can be achieved through lean manufacturing practices, advanced planning systems, and regular performance reviews." },
    { question: "What are the challenges in managing inflation?", answer: "Challenges include balancing monetary policy, managing fiscal deficits, and ensuring stable economic growth." },
    { question: "What innovations are needed to address global health crises?", answer: "Innovations include developing new treatments and vaccines, improving healthcare infrastructure, and enhancing global health monitoring systems." },
    { question: "How can we reduce healthcare costs without compromising quality?", answer: "Cost reduction can be achieved through efficient resource management, adopting preventive care practices, and leveraging technology." },
    { question: "What strategies can be employed to improve teacher training?", answer: "Strategies include professional development programs, mentorship opportunities, and incorporating feedback from classroom experiences." },
    { question: "How can technology be used to enhance learning outcomes?", answer: "Technology can enhance learning through interactive tools, online resources, and personalized learning experiences." },
    { question: "What are the environmental impacts of increasing vehicle numbers?", answer: "Impacts include increased air pollution, higher greenhouse gas emissions, and greater demand for natural resources." },
    { question: "How can public transportation systems be improved?", answer: "Improvements can include expanding service coverage, increasing frequency, and investing in modern infrastructure." },
    { question: "How can online privacy be better protected?", answer: "Online privacy can be protected through the use of strong passwords, encryption, and privacy-focused browsing practices." },
    { question: "What measures can prevent the spread of misinformation online?", answer: "Measures include promoting media literacy, fact-checking, and implementing stricter content moderation policies." },
    { question: "How do pesticides affect the environment?", answer: "Pesticides can harm wildlife, contaminate water sources, and disrupt ecosystems by affecting non-target species." },
    { question: "What are the benefits of biodiversity for ecosystems?", answer: "Biodiversity supports ecosystem stability, resilience, and productivity by providing a range of species that contribute to ecological functions." },
    { question: "How can small businesses compete with larger corporations?", answer: "Small businesses can compete by focusing on niche markets, offering personalized services, and leveraging local networks." },
    { question: "What are the effects of globalization on local economies?", answer: "Effects include increased market access, greater competition, and potential loss of local industries due to global trade practices." },
    { question: "What are effective ways to promote mental health?", answer: "Effective ways include increasing access to mental health services, reducing stigma, and promoting healthy lifestyles and coping mechanisms." },
    { question: "How can vaccination rates be increased globally?", answer: "Increasing vaccination rates can be achieved through public education campaigns, improving vaccine availability, and addressing vaccine hesitancy." },
    { question: "What are the benefits of incorporating STEM education in schools?", answer: "Benefits include preparing students for future careers, fostering problem-solving skills, and encouraging innovation and critical thinking." },
    { question: "How can educational institutions better support students with disabilities?", answer: "Support can be enhanced through accessible facilities, individualized learning plans, and providing specialized resources and accommodations." },
];

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers (3 marks each)
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
