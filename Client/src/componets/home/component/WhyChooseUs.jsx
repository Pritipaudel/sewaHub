import React from 'react';
import pic1 from '../../../assets/1.jpg'
import pic2 from '../../../assets/2.jpg'
import pic3 from '../../../assets/3.jpg'
import pic4 from '../../../assets/4.jpg'
const WhyChooseSajhaSewa = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Why Choose SajhaSewa?
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          At SajhaSewa, we bridge the gap between skilled service providers who struggle to find work
          and service seekers looking for the perfect fit. Our platform connects people, creating opportunities
          for growth and success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Empowering Service Providers */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <img src={pic4} alt="Empowering Providers Icon" className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900">Empowering Service Providers</h3>
            <p className="text-gray-500 mt-2">
              We help skilled professionals get the work they deserve by connecting them with potential clients.
            </p>
          </div>

          {/* Easy Access for Service Seekers */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <img src={pic3} alt="Easy Access Icon" className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900">Easy Access for Service Seekers</h3>
            <p className="text-gray-500 mt-2">
              Our platform makes it easy for you to find the right service provider who fits your needs with just a few clicks.
            </p>
          </div>

          {/* Quality and Trust */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <img src={pic1} alt="Quality and Trust Icon" className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900">Quality and Trust</h3>
            <p className="text-gray-500 mt-2">
              We vet service providers to ensure they are experienced and trustworthy, ensuring peace of mind for service seekers.
            </p>
          </div>

          {/* Equal Opportunity for All */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <img src={pic2} alt="Equal Opportunity Icon" className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900">Equal Opportunity for All</h3>
            <p className="text-gray-500 mt-2">
              We believe in providing equal opportunities for everyone, connecting people from all walks of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSajhaSewa;
