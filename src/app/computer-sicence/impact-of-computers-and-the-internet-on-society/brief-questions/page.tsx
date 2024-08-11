import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How has email changed business communication?",
        answer: "Email has made business communication faster, more efficient, and global. It allows for instant messaging, document sharing, and asynchronous communication across time zones, significantly reducing the need for traditional mail and phone calls."
    },
    {
        question: "Describe two ways social media has impacted social interactions.",
        answer: "Social media has enabled people to maintain connections with a larger network of friends and acquaintances. It has also changed how people share personal information, with many now broadcasting life events and opinions to a wide audience."
    },
    {
        question: "What is telemedicine and how does it benefit patients?",
        answer: "Telemedicine is the remote diagnosis and treatment of patients using telecommunications technology. It benefits patients by providing access to healthcare services from a distance, reducing travel time and costs, and enabling care for those in remote areas."
    },
    {
        question: "How has e-commerce affected traditional retail?",
        answer: "E-commerce has led to a decline in brick-and-mortar stores, changed consumer shopping habits towards online purchasing, and forced traditional retailers to develop online presences to remain competitive."
    },
    {
        question: "Explain two ways in which computers have advanced scientific research.",
        answer: "Computers have enabled complex simulations of physical and biological systems, allowing researchers to model phenomena that would be impossible or impractical to study directly. They have also facilitated the analysis of massive datasets, revealing patterns and insights that would be difficult to discern manually."
    },
    {
        question: "How has the internet impacted access to education?",
        answer: "The internet has dramatically expanded access to education by enabling online learning platforms, providing free educational resources, and allowing students to attend classes remotely from anywhere in the world."
    },
    {
        question: "What are two major concerns related to digital privacy?",
        answer: "Two major concerns are the collection and storage of personal data by companies and governments, which could be misused or breached, and the potential for surveillance through digital devices and online activities."
    },
    {
        question: "How have streaming services changed the entertainment industry?",
        answer: "Streaming services have shifted consumption from traditional TV and cinema to on-demand viewing, altered production and distribution models in the film and TV industry, and changed how content is created and marketed to appeal to binge-watching habits."
    },
    {
        question: "Describe two ways in which digital technology has impacted the music industry.",
        answer: "Digital technology has revolutionized music production, making it possible to create professional-quality recordings at home. It has also changed music distribution and consumption through streaming platforms, significantly altering how artists earn money from their music."
    },
    {
        question: "How has remote work impacted traditional office environments?",
        answer: "Remote work has reduced the need for large office spaces, changed communication patterns to rely more on digital tools, and altered work-life balance for many employees by blurring the lines between work and home life."
    },
    {
        question: "What is the significance of Electronic Health Records (EHRs) in healthcare?",
        answer: "EHRs have improved patient care by providing instant access to comprehensive medical histories, reduced medical errors through better record-keeping, and facilitated the sharing of patient information among healthcare providers."
    },
    {
        question: "How has digital marketing changed business advertising strategies?",
        answer: "Digital marketing has enabled more targeted and personalized advertising based on user data, shifted advertising budgets from traditional media to online platforms, and allowed for real-time measurement and adjustment of marketing campaigns."
    },
    {
        question: "Explain two ways in which video games have impacted society.",
        answer: "Video games have become a major form of entertainment and a significant industry, creating new job opportunities. They have also been used for educational purposes and have raised concerns about their potential effects on behavior and addiction."
    },
    {
        question: "How has the internet facilitated global collaboration in research?",
        answer: "The internet has enabled researchers to easily share data and findings globally, collaborate on projects across geographical boundaries, and access research papers and resources from institutions worldwide."
    },
    {
        question: "What are two ways in which cybersecurity has become a critical issue?",
        answer: "Cybersecurity has become crucial for protecting sensitive personal and financial information from theft and fraud. It is also vital for safeguarding critical infrastructure and national security from cyber attacks."
    },
    {
        question: "How have computers and the internet changed journalism?",
        answer: "They have accelerated the news cycle to 24/7 coverage, enabled citizen journalism through social media, and changed how news is consumed, with many people now getting their news primarily from online sources."
    },
    {
        question: "Describe two impacts of social media on political discourse.",
        answer: "Social media has provided a platform for direct communication between politicians and the public, bypassing traditional media. It has also contributed to the spread of misinformation and the creation of echo chambers where people are exposed primarily to views they already agree with."
    },
    {
        question: "How has digital technology impacted the field of archaeology?",
        answer: "Digital technology has revolutionized archaeology through the use of advanced imaging techniques like LiDAR for site discovery, 3D modeling for artifact preservation and study, and big data analysis for understanding patterns in historical data."
    },
    {
        question: "What are two ways in which the internet has affected language?",
        answer: "The internet has led to the development of new forms of language such as internet slang and emojis. It has also accelerated the spread of language changes and new words across global communities."
    },
    {
        question: "How has the availability of online information impacted critical thinking skills?",
        answer: "While the internet has made vast amounts of information readily available, it has also necessitated stronger critical thinking skills to evaluate the credibility of sources and distinguish between factual information and misinformation or biased content."
    },
];

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers on Computer History (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="py">{faq.question}</AccordionTrigger>
                            <AccordionContent className="pl-4">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
