const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
        <p className="text-gray-600 text-lg">Loading course...</p>
      </div>
    </div>
  );
};
export default Loading;
