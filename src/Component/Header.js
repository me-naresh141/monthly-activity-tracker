import React from "react";

const Header = ({ addActivity }) => {
  return (
    <div className="max-w-[1800px]   text-center ">
      <h1 className="text-5xl mt-16 mb-8 font-semibold text-cyan-400 capitalize">
        Monthly Activity Tracker!
      </h1>
      {/* form div */}

      <form onSubmit={addActivity}>
        <input
          placeholder="e.g. coding"
          className="border-solid border-2 rounded-l text-xl  hover:shadow-inner p-2 px-10"
        />

        <button
          type="submit"
          className="bg-emerald-300 text-white p-2 text-xl border-solid border-2 border-emerald-300 "
        >
          Add Activity
        </button>
      </form>
    </div>
  );
};

export default Header;
