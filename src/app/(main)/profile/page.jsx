import Profile from "@/components/Profile";


const page = () => {
    return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <Profile />
      </div>
    </div>
    );
};

export default page;