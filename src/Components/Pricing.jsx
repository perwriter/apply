import React from 'react';

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Our Pricing Plans</h2>
        <div className="grid gap-8 md:grid-cols-4">

          {/* Daily Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Daily</h3>
            <p className="text-gray-600 mb-6">$25/day</p>
            <p className="text-gray-600 mb-6">- We apply approximately 5-20 relevant jobs daily.</p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark">
              Choose Plan
            </button>
          </div>

          {/* One-Week Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">One Week</h3>
            <p className="text-gray-600 mb-6">$100/week</p>
            <p className="text-gray-600 mb-6">- We apply approximately 5-20 relevant jobs every day for one week.</p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark">
              Choose Plan
            </button>
          </div>

          {/* Two-Week Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Two Weeks</h3>
            <p className="text-gray-600 mb-6">$190/ Biweekly</p>
            <p className="text-gray-600 mb-6">- We apply approximately 5-20 relevant jobs every day for two weeks.</p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark">
              Choose Plan
            </button>
          </div>

          {/* Monthly Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">One Month</h3>
            <p className="text-gray-600 mb-6">$350/month</p>
            <p className="text-gray-600 mb-6">- We apply approximately 5-20 relevant jobs every day for one month.</p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark">
              Choose Plan
            </button>
          </div>

        </div>

        {/* Subscription Plan */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Subscription Plan</h3>
          <p className="text-gray-600 mb-6">$10/month</p>
          <p className="text-gray-600 mb-6">- Access filtered job links with a higher probability of recruiter replies.</p>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
