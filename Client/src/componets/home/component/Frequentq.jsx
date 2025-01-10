import React, { useState } from 'react';

const Frequentq = () => {
  // State to manage which question is open
  const [openQuestion, setOpenQuestion] = useState(null);

  // Function to toggle the open/closed state of a question
  const toggleQuestion = (questionNumber) => {
    if (openQuestion === questionNumber) {
      setOpenQuestion(null); // Close the question if it's already open
    } else {
      setOpenQuestion(questionNumber); // Open the clicked question
    }
  };

  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className=" text-4xl font-bold text-blue-900 mb-12 ">
              Explore Common Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {[1, 2, 3, 4].map((questionNumber) => (
              <div
                key={questionNumber}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(questionNumber)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">
                    {questionNumber === 1
                      ? 'What services we you offer?'
                      : questionNumber === 2
                      ? 'How do I create a profile as a customer or service provider?'
                      : questionNumber === 3
                      ? 'Is there a fee for using the platform?'
                      : 'How do I leave feedback for a service provider?'}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                      openQuestion === questionNumber ? 'rotate-0' : '-rotate-180'
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openQuestion === questionNumber && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>
                      {questionNumber === 1
                        ? 'We offer a variety of services, including home chores, tutoring, consultations, and professional connections between customers and service providers. Our platform helps you find the right service tailored to your needs, ensuring quality and reliability.'
                        : questionNumber === 2
                        ? 'To create a profile, click on the "Sign Up" button on our website. You\'ll be prompted to select whether you want to register as a Customer or a Service Provider. After making your selection, fill out the required information, including your name, email, and password. Once you submit your details, check your email for verification to activate your profile. After verification, complete your profile with any additional information relevant to your role.'
                        : questionNumber === 3
                        ? 'Yes, our platform is free for customers to use. They can browse services and connect with service providers without any fees. Service providers, however, will pay a commission based on their earnings from completed jobs. This model ensures that customers can access necessary services without any financial barriers. For more details about the commission structure, please check our pricing page or contact customer support.'
                        : 'To leave feedback for a service provider, simply navigate to the service provider’s profile after your service has been completed. Look for the "Leave Feedback" or "Rate" option, and fill out the form with your comments and rating. Your feedback helps other customers make informed decisions and supports service providers in improving their offerings. Thank you for contributing to our community!'}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-base mt-9">
            Still have questions?
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
              Contact our support
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Frequentq;
