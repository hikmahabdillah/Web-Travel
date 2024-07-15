const FilterModal = ({toggleModal, isModalOpen, filter, handleChange, sortBy, handleSort, sortType, handleSortType }) => {
  return (
    <>
      <button
              onClick={toggleModal}
              className="block w-max text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="button"
            >
              <i className="fa-solid fa-filter fa-lg mr-2" style={{color: "#f7f7f7"}}></i>
              Filter
            </button>

            {/* <!-- Top Right Modal --> */}
            {isModalOpen && (
            <div
              id="top-right-modal"
              className="w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full fixed top-0 right-0 z-50"
            >
              <div className="sm:absolute sm:top-5 sm:right-5 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-slate-100 rounded-lg shadow ">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                    <h3 className="text-xl font-medium text-gray-900">
                      Filter & Sort
                    </h3>
                    <button
                      type="button"
                      onClick={toggleModal}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="p-4 md:p-5 space-y-4">
                    <span className="flex gap-4 items-center max-w-sm w-full bg-slate-50 rounded-lg py-1 px-3">
                      <p className="text-base md:text-lg font-semibold text-gray-600 text-nowrap">
                        Filter By Type :
                      </p>
                      <form className="w-full">
                        <label htmlFor="underline_select" className="sr-only">
                          Underline select
                        </label>
                        <select
                          id="underline_select"
                          value={filter}
                          className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                          onChange={handleChange}
                        >
                          <option value="">All Type</option>
                          <option value="longtrip">Long Trip</option>
                          <option value="opentrip">Open Trip</option>
                          <option value="privatetrip">Private Trip</option>
                          <option value="cheaptrip">Cheap Trip</option>
                        </select>
                      </form>
                    </span>
                    <span className="flex gap-4 items-center max-w-sm w-full bg-slate-50 rounded-lg py-1 px-3">
                      <p className="text-base md:text-lg font-semibold text-gray-600 text-nowrap">
                        Sort By :
                      </p>
                      <form className="w-full">
                        <label htmlFor="underline_select" className="sr-only">
                          Underline select
                        </label>
                        <select
                          id="underline_select"
                          value={sortBy}
                          className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                          onChange={handleSort}
                        >
                          <option value="">All Type</option>
                          <option value="name">Name</option>
                          <option value="price">Price</option>
                        </select>
                      </form>
                    </span>
                    <span className="flex gap-4 items-center max-w-sm w-full bg-slate-50 rounded-lg py-1 px-3">
                      <p className="text-base md:text-lg font-semibold text-gray-600 text-nowrap">
                        Asc / Desc :
                      </p>
                      <form className="w-full">
                        <label htmlFor="underline_select" className="sr-only">
                          Underline select
                        </label>
                        <select
                          id="underline_select"
                          value={sortType}
                          className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                          onChange={handleSortType}
                        >
                          <option value="">Random</option>
                          <option value="asc">ascending</option>
                          <option value="desc">descending</option>
                        </select>
                      </form>
                    </span>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b ">
                    <button
                      onClick={toggleModal}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </div>
            )}
    </>
  )
}

export default FilterModal;