import React, { useState } from "react";

function CoinSearch() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <div className="relative border flex md:w-full bg-[#1f1f1f] items-stretch rounded-lg">
        <input
          type="search"
          className="relative m-0 block md:w-52 min-w-0 flex-auto rounded bg-transparent bg-clip-padding px-3 py-[0.25rem] text-xs font-normal leading-[1.6] text-gray-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-gray-400 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:focus:border-primary"
          placeholder="Search token or contract"
          onClick={openDialog}
        />
        <span
          className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-700 dark:text-neutral-200 cursor-pointer"
          aria-label="Search"
        >
          {/* Search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-[#101010] bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex  items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-[#1f1f1f] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-[#1f1f1f] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        class="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        class="text-base leading-6 text-gray-300"
                        id="modal-title"
                      >
                        Sorry, our search feature is currently unavailable.
                        <br />
                        Please explore our website in the meantime. Thank you
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="bg-[#1f1f1f] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={closeDialog}
                    type="button"
                    class="mt-2 inline-flex w-full justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CoinSearch;
