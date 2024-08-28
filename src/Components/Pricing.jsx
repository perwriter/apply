import React from 'react';

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Our Pricing Plans</h2>
        <div className="grid gap-8 md:grid-cols-3">

          {/* Biweekly Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biweekly</h3>
            <p className="text-gray-600 mb-6">$60</p>
            <p className="text-gray-600 mb-6">
              - Apply to 5-20 relevant jobs every day for 6 days.
            </p>
            <p className="text-gray-600 mb-6">
              - Fill in details in your account.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark">
              Choose Plan
            </button>
          </div>

          {/* Monthly Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Monthly</h3>
            <p className="text-gray-600 mb-6">$100</p>
            <p className="text-gray-600 mb-6">
              - Apply to 1-200 relevant jobs every day.
            </p>
            <p className="text-gray-600 mb-6">
              - Fill in the jobs in your account.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark">
              Choose Plan
            </button>
          </div>

          {/* 6-Month Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">6-Month Offer</h3>
            <p className="text-gray-600 mb-6">$250</p>
            <p className="text-gray-600 mb-6">
              - Apply to approximately 200-1000 relevant jobs until you're hired within 6 months.
            </p>
            <p className="text-gray-600 mb-6">
              - Fill in the jobs in your account.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark">
              Choose Plan
            </button>
          </div>

        </div>

        {/* Monthly Subscription */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Monthly Subscription</h3>
          <p className="text-gray-600 mb-6">$5</p>
          <p className="text-gray-600 mb-6">
            - Access filtered job links directly from company websites.
          </p>
          <p className="text-gray-600 mb-6">
            - Get links with a higher probability of recruiter replies.
          </p>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
