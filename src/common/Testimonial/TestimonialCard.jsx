import React from 'react';

const TestimonialCard = () => {
  return (
    <div class="flex h-screen flex-col justify-center">
      <div class="relative mx-auto flex max-w-xs flex-col space-y-3 rounded-xl border border-gray-300 bg-white p-2 shadow-lg md:max-w-3xl md:space-y-8">
        <div class="flex flex-col md:flex-row">
          <div class="grid w-full place-items-center md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              class="h-full rounded-xl object-contain"
            />
          </div>
          <div class="flex w-full flex-col justify-start items-start space-y-4 bg-white p-5 md:w-2/3 md:p-10">
            <h3 class="text-xl font-black text-gray-800 md:text-3xl">About ReactPlay</h3>
            <p class="text-base text-left text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laborum veritatis
              deleniti, sint possimus iste quae tenetur corporis laboriosam dicta molestiae,
              quibusdam quas.
            </p>
            <h3 class="text-gray-900">Maria Santos</h3>
            <div class="flex justify-between">
              <div class="flex items-center space-x-2">
                <span class="rounded-full bg-green-300 px-2 py-1 text-xs text-gray-800">
                  General
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
