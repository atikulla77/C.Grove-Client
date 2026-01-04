import { SpinnerCircularFixed } from "spinners-react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SpinnerCircularFixed
        size={60}
        thickness={100}
        speed={130}
        color="rgba(23, 23, 23, 1)"
        secondaryColor="rgba(0, 0, 0, 0.14)"
      />
    </div>
  );
};

export default Loading;
