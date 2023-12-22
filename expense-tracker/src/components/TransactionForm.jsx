import React from "react";

const TransactionForm = () => {
  return (
    <div class="w-full max-w-xs">
      <form class="max-w-sm mx-auto">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="">
            <label
              for="number-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a number:
            </label>
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="00.00"
              step="0.01"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
