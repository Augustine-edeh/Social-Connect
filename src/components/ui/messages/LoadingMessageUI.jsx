import * as Icons from "@heroicons/react/24/outline";

const LoadingMessageUI = () => {
  return (
    <div className="flex flex-col place-items-center mt-80">
      <Icons.ArrowPathIcon className="animate-spin h-8 mx-auto mb-6" />
      <p>Loading Messages</p>
    </div>
  );
};

export default LoadingMessageUI;
