import Title from "../components/title";
import { AppContext } from "../context/app-context";
import React, { useContext, useEffect } from "react";
import AppLayout from "../layouts/app-layout";

export default function FAQs() {
  const { setActivePath } = useContext(AppContext);
  useEffect(() => {
    setActivePath(window.location.href);
  }, []);

  const faqs = [
    {
      question: "What is Smart Cash Investors?",
      answer:
        "Smart Cash Investors is an online platform that provides secure and profitable trading and investment opportunities, ensuring 100% guaranteed profit returns.",
    },
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button on our homepage, fill out the required information, and follow the instructions to complete the registration process.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we employ advanced encryption technologies and robust security measures to ensure the safety and confidentiality of your personal and financial information.",
    },
    {
      question: "What types of investments do you offer?",
      answer:
        "We offer a wide range of investment opportunities, including cryptocurrencies, stocks, commodities, and more. Detailed information about each type of investment can be found on our platform.",
    },
    {
      question: "How can I deposit funds into my account?",
      answer:
        "You can deposit funds using various payment methods such as bank transfers, credit/debit cards, and cryptocurrency transfers. Detailed instructions are available in the 'Deposit Funds' section of your account.",
    },
    {
      question: "What are the fees associated with trading?",
      answer:
        "Our platform operates with transparent fee structures. You can find detailed information about trading fees, withdrawal fees, and other charges in the 'Fees' section on our website.",
    },
    {
      question: "How do I withdraw my profits?",
      answer:
        "To withdraw your profits, log in to your account, navigate to the 'Withdraw Funds' section, select your preferred withdrawal method, and follow the prompts to complete the process.",
    },
    {
      question: "What is the minimum investment amount?",
      answer:
        "The minimum investment amount varies depending on the type of investment. Please refer to the specific investment pages for detailed information on minimum requirements.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team through the 'Contact Us' page on our website, where you'll find various methods of communication, including email and live chat.",
    },
    {
      question: "Do you offer educational resources for beginners?",
      answer:
        "Yes, we provide a comprehensive suite of educational materials, including tutorials, articles, and market insights, to help both novice and experienced investors make informed decisions.",
    },
    {
      question: "Are there any guarantees on returns?",
      answer:
        "Yes, Smart Cash Investors guarantees 100% profit returns on all investments, ensuring that your financial growth is secure and predictable.",
    },
    {
      question: "How do I stay updated on market trends?",
      answer:
        "Our platform offers real-time market insights, news updates, and analytical tools to help you stay informed about the latest market trends and developments.",
    },
  ];

  return (
    <AppLayout>
      {/* <Head>
        <title>FAQs - Custom Jerseys Kenya</title>
        <meta
          name="description"
          content="What file formats do you accept for custom logos or designs? Can I see a sample of my jersey before I order? Can I make changes to my order after I place it? "
        />

        <meta property="og:title" content={`FAQs - Custom Jerseys Kenya`} />
        <meta
          property="og:description"
          content={`What file formats do you accept for custom logos or designs? Can I see a sample of my jersey before I order? Can I make changes to my order after I place it? `}
        />
        <meta property="og:url" content="https://customjerseys.co.ke/faqs" />
        <meta property="og:image" content="/custom-jerseys-og-image.png" />
      </Head> */}
      <div className="px-10 lg:px-40 py-[100px] w-full lg:w-[60%]">
        <Title className={"mb-4 text-primary-900"}>
          Frequently Asked Questions
        </Title>

        <details className=" bg-primary-50 rounded-lg p-4 mb-2">
          <summary className="cursor-pointer font-bold text-[18px]">
            What is Smart Cash Investors?
          </summary>
          <p className="text-gray-500 ml-4">
            Smart Cash Investors is an online platform that provides secure and
            profitable trading and investment opportunities, ensuring 100%
            guaranteed profit returns.
          </p>
        </details>

        {faqs.map((faq, index) => (
          <details key={index} className="bg-primary-50 rounded-lg p-4 mb-2">
            <summary className="cursor-pointer font-bold text-[18px]">
              {faq.question}
            </summary>
            <p className="text-gray-500 ml-4">{faq.answer}</p>
          </details>
        ))}
      </div>
    </AppLayout>
  );
}
