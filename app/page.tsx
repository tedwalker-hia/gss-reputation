export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            GSS Reputation Management
          </h1>
          <p className="text-xl text-gray-600">
            AI-Powered Review Management for Hotels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">📊 Dashboard</h2>
            <p className="text-gray-600">
              Monitor reviews across all platforms in real-time
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">🤖 AI Responses</h2>
            <p className="text-gray-600">
              Generate intelligent responses with Claude AI
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">📈 Analytics</h2>
            <p className="text-gray-600">
              Track sentiment trends and guest satisfaction
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            System Status: Connected to Local Development
          </div>
        </div>
      </div>
    </main>
  )
}