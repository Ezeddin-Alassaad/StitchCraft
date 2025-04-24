export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-coral-500 animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-teal-500 animate-spin opacity-75" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
    </div>
  );
}