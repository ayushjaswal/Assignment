import NavBar from "./NavBar";

const Dashboard = () => {
  return (
    <div className="md:flex md:h-[100vh]">
      <NavBar />
      <div className="">
        <div className="m-3 flex rounded-md w-full items-center justify-center border-4 ">
          Dashboard Layout
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
