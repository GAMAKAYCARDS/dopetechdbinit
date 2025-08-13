export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#F7DD0F] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#F7DD0F] font-semibold">Loading DopeTech...</p>
      </div>
    </div>
  );
}
