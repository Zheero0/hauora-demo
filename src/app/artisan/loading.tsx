export default function ArtisanLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="hidden lg:flex items-center space-x-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-10 w-48 bg-gray-200 rounded animate-pulse hidden md:block"></div>
              <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Mobile Search Skeleton */}
        <div className="md:hidden mb-6">
          <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Breadcrumb Skeleton */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-1 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Header Skeleton */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="h-px w-16 bg-gray-200 animate-pulse"></div>
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="space-y-3">
            <div className="h-12 w-64 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-96 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Desktop Filters Skeleton */}
          <div className="hidden lg:block lg:w-72">
            <div className="border rounded-lg p-6 space-y-6">
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Products Skeleton */}
          <div className="flex-1">
            {/* Toolbar Skeleton */}
            <div className="flex justify-between items-center mb-6">
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Products Grid Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-[4/5] bg-gray-200 rounded animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
