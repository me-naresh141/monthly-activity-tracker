import React from "react";
import { RxCrossCircled } from "react-icons/rx";
const Main = (props) => {
  return (
    <div className="max-w-[1800px]  flex justify-around flex-col px-20">
      {props.data.map(({ activityN, days, monthN, monthNum }, i) => {
        return (
          <div className="flex  my-6 p-5   shadow-2xl rounded" key={i} id={i}>
            <div className="min-w-[27%]  bg-sky-100 flex justify-center items-center flex-col break-all">
              <h2 className="font-bold text-2xl capitalize">{activityN}</h2>
              <h3 className="bg-orange-600 px-2 py-1 rounded font-bold text-white">
                {monthN[monthNum - 1]}
              </h3>
            </div>

            <div className="min-w-[70%]  flex flex-wrap gap-8 p-5">
              {days.map(({ index, isActive }, ind) => {
                return (
                  <button
                    key={ind}
                    className={
                      isActive
                        ? "border-solid border-2 px-6 py-1 font-semibold rounded border-solid bg-emerald-300 hover:border-indigo-600"
                        : "border-solid border-2 px-6 py-1 font-semibold rounded border-solid hover:border-indigo-600 "
                    }
                    onClick={() => props.handleActive(ind, i)}
                  >
                    {index}
                  </button>
                );
              })}
            </div>
            {/* cross btn */}
            <RxCrossCircled
              onClick={() => props.handleDelete(i)}
              className="text-rose-600  text-7xl cursor-pointer "
            />
          </div>
        );
      })}
    </div>
  );
};

export default Main;

{
  /* {props.props.map((obj) => {
        return (
          <>
            <div className="min-w-[20%] border-solid border-2 border-emerald-400 bg-sky-100 flex justify-center items-center flex-col ">
              <h2>{obj.activity}</h2>
              <h3 className="bg-orange-600 p-1 rounded text-2xl text-white">
                {obj.month}
              </h3>
            </div>

            <div className="min-w-[60%] border-solid border-2 border-violet-600 grid gap-x-4 gap-y-8 grid-cols-10 ">
              <button className="border-solid border-2 px-6 py-1 font-semibold rounded border-solid">
                1
              </button>
            </div>

            <div className="min-w-[2%] border-solid border-2 border-pink-400">
              <button>❌</button>
            </div>
          </>
        );
      })} */
}
