export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="relative">
            <div className="h-4 w-4 bg-black rounded-full animate-pulse"></div>
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
          </div>
          <div>
            <span className="font-light text-2xl tracking-[0.2em] text-black animate-pulse">HAUORA</span>
            <p className="text-sm text-gray-500 font-light animate-pulse delay-300">Admin Dashboard</p>
          </div>
        </div>

        {/* Loading Skeleton */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-2 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-24 h-2 bg-gray-200 rounded animate-pulse delay-100"></div>
            <div className="w-20 h-2 bg-gray-200 rounded animate-pulse delay-200"></div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        <p className="text-gray-600 font-light animate-pulse">Preparing dashboard...</p>
      </div>
    </div>
  )
}
