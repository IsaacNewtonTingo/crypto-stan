import Title from "../components/title";
import { AppContext } from "../context/app-context";
import React, { useContext, useEffect } from "react";
import AppLayout from "../layouts/app-layout";

export default function FAQs() {
  const { setActivePath } = useContext(AppContext);
  useEffect(() => {
    setActivePath(window.location.href);
  }, []);
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
      <div className="px-40 py-[100px]">
        <Title className={"mb-4 text-primary-900"}>
          Frequently Asked Questions
        </Title>

        <details className=" bg-primary-50 rounded-lg p-4 mb-2">
          <summary class="cursor-pointer font-bold">
            Who can Participate on Our Investment Program?
          </summary>
          <p className="text-gray-500 ml-2">
            Any person or corporation from any country can register an account
            with us and we will be glad to accept investors from anywhere in the
            world.
          </p>
        </details>

        <details className=" bg-primary-50 rounded-lg p-4 mb-2">
          <summary class="cursor-pointer font-bold">
            Who can Participate on Our Investment Program?
          </summary>
          <p className="text-gray-500 ml-2">
            Any person or corporation from any country can register an account
            with us and we will be glad to accept investors from anywhere in the
            world.
          </p>
        </details>

        <details className=" bg-primary-50 rounded-lg p-4 mb-2">
          <summary class="cursor-pointer font-bold">
            Who can Participate on Our Investment Program?
          </summary>
          <p className="text-gray-500 ml-2">
            Any person or corporation from any country can register an account
            with us and we will be glad to accept investors from anywhere in the
            world.
          </p>
        </details>
      </div>
    </AppLayout>
  );
}
