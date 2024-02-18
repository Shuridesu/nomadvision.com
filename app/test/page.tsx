import Loading from "@/components/Loading";
import Menu from "./components/Menu";
import TryIcon from "../Icons/TryIcon";
import JoinIcon from "../Icons/JoinIcon";

export default async function page() {
  return (
    <div className="">

      <div className="flex flex-col justify-center items-center h-[70vh]">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
        <div className="text-gray-500 ms-2 mt-2">Loading...</div>
      </div>
      <div>
        <TryIcon/>
      </div>
      <div>
        <JoinIcon/>
      </div>
    </div>
  );
}
