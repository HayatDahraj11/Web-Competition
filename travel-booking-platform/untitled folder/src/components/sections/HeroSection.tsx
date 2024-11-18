'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Search, Calendar, MapPin, Plane, Film, Bus, Ticket, X } from "lucide-react"

const categories = [
  { id: 'flights', icon: Plane, label: 'Flights', color: 'from-blue-600 to-indigo-600' },
  { id: 'movies', icon: Film, label: 'Movies', color: 'from-purple-600 to-pink-600' },
  { id: 'events', icon: Ticket, label: 'Events', color: 'from-orange-600 to-red-600' },
  { id: 'buses', icon: Bus, label: 'Buses', color: 'from-green-600 to-teal-600' },
]

const dummyData = {
  flights: {
    cities: ['New York', 'London', 'Tokyo', 'Paris', 'Los Angeles', 'Dubai'],
    data: [
      { id: 1, from: 'New York', to: 'Los Angeles', date: '2024-12-01', price: '$200' },
      { id: 2, from: 'London', to: 'Paris', date: '2024-12-02', price: '$150' },
      { id: 3, from: 'Tokyo', to: 'Dubai', date: '2024-12-05', price: '$500' },
    ]
  },
  movies: {
    genres: ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Horror'],
    data: [
      { id: 1, title: 'Avengers: Endgame', date: '2024-12-01', genre: 'Action', time: '18:00', price: '$15' },
      { id: 2, title: 'Inception', date: '2024-12-02', genre: 'Sci-Fi', time: '20:00', price: '$12' },
      { id: 3, title: 'The Dark Knight', date: '2024-12-05', genre: 'Action', time: '19:00', price: '$14' },
    ]
  },
  events: {
    cities: ['New York', 'San Francisco', 'Paris', 'London', 'Tokyo'],
    types: ['Concert', 'Conference', 'Exhibition', 'Sports', 'Theater'],
    data: [
      { id: 1, name: 'Rock Concert', date: '2024-12-10', city: 'New York', type: 'Concert', price: '$50' },
      { id: 2, name: 'Tech Conference', date: '2024-12-12', city: 'San Francisco', type: 'Conference', price: '$200' },
      { id: 3, name: 'Art Exhibition', date: '2024-12-15', city: 'Paris', type: 'Exhibition', price: '$30' },
    ]
  },
  buses: {
    cities: ['Chicago', 'Miami', 'Boston', 'New York', 'Los Angeles', 'San Francisco'],
    data: [
      { id: 1, from: 'Chicago', to: 'Miami', date: '2024-12-01', time: '10:00', price: '$100' },
      { id: 2, from: 'Boston', to: 'New York', date: '2024-12-05', time: '12:00', price: '$50' },
      { id: 3, from: 'Los Angeles', to: 'San Francisco', date: '2024-12-08', time: '14:00', price: '$75' },
    ]
  }
}

type SearchInputs = {
  [key: string]: string;
}

export function HeroSection() {
  const [activeCategory, setActiveCategory] = useState('flights')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [searchInputs, setSearchInputs] = useState<SearchInputs>({})

  const handleSearch = () => {
    let results = [];
    switch (activeCategory) {
      case 'flights':
      case 'buses':
        results = dummyData[activeCategory].data.filter(item =>
          (!searchInputs.from || item.from.includes(searchInputs.from)) &&
          (!searchInputs.to || item.to.includes(searchInputs.to)) &&
          (!searchInputs.date || item.date === searchInputs.date)
        );
        break;
      case 'movies':
        results = dummyData.movies.data.filter(item =>
          (!searchInputs.title || item.title.toLowerCase().includes(searchInputs.title.toLowerCase())) &&
          (!searchInputs.genre || item.genre === searchInputs.genre) &&
          (!searchInputs.date || item.date === searchInputs.date)
        );
        break;
      case 'events':
        results = dummyData.events.data.filter(item =>
          (!searchInputs.type || item.type === searchInputs.type) &&
          (!searchInputs.city || item.city === searchInputs.city) &&
          (!searchInputs.date || item.date === searchInputs.date)
        );
        break;
    }
    setSearchResults(results);
  }

  const renderSearchFields = () => {
    switch (activeCategory) {
      case 'flights':
      case 'buses':
        return (
          <>
            <div>
              <label className="text-sm text-neutral-600 font-medium">From</label>
              <select
                value={searchInputs.from || ''}
                onChange={(e) => setSearchInputs({ ...searchInputs, from: e.target.value })}
                className="w-full mt-2 px-4 py-2 bg-gray-50 border rounded-xl"
              >
                <option value="">Select departure city</option>
                {dummyData[activeCategory].cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-neutral-600 font-medium">To</label>
              <select
                value={searchInputs.to || ''}
                onChange={(e) => setSearchInputs({ ...searchInputs, to: e.target.value })}
                className="w-full mt-2 px-4 py-2 bg-gray-50 border rounded-xl"
              >
                <option value="">Select destination</option>
                {dummyData[activeCategory].cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-neutral-600 font-medium">Date</label>
              <input
                type="date"
                value={searchInputs.date || ''}
                onChange={(e) => setSearchInputs({ ...searchInputs, date: e.target.value })}
                className="w-full mt-2 px-4 py-2 bg-gray-50 border rounded-xl"
              />
            </div>
          </>
        );

      case 'movies':
        return (
          <>
            <div>
              <label className="text-sm text-neutral-600 font-medium">Movie Title</label>
              <input
                type="text"
                value={searchInputs.title || ''}
                onChange={(e) => setSearchInputs({ ...searchInputs, title: e.target.value })}
                className="w-full mt-2 px-4 py-2 bg-gray-50 border rounded-xl"
                placeholder="Enter movie title"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-600 font-medium">Genre</label>
              <select
                value={searchInputs.genre || ''}
                onChange={(e) => setSearchInputs({ ...searchInputs, genre: e.target.value })}
                className="w-full mt-2 px-4 py-2 bg-gray-50 border rounded-xl"
              >
                <option value="">Select genre</option>
                {dummyData.movies.genres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-neutral-600 font-medium">Date</label>
              <input
                type="date"
                value={searchInputs.date || ''}
                onChange={(e) => setSearchInputs({ ...searchInputs, date: e.target.value })}
                className="w-full mt-2 px-4 py-2 bg-gray-50 border rounded-xl"
              />
            </div>
          </>
        );

      case 'events':
        return (
          <>
            <div>
              <label className="text-sm text-neutral-600 font-medium">Event Type</label>
              <select
                value={searchInputs.type || ''}
                onChange={(e) => setSearchInputs({ ...searchInputs, type: e.target.value })}
                className="w-full mt-2 px-4 py-2 bg-gray-50 border rounded-xl"
              >
                <option value="">Select event type</option>
                {dummyData.events.types.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-neutral-600 font-medium">City</label>
              <select
                value={searchInputs.city || ''}
                onChange={(e) => setSearchInputs({ ...searchInputs, city: e.target.value })}
                className="w-full mt-2 px-4 py-2 bg-gray-50 border rounded-xl"
              >
                <option value="">Select city</option>
                {dummyData.events.cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-neutral-600 font-medium">Date</label>
              <input
                type="date"
                value={searchInputs.date || ''}
                onChange={(e) => setSearchInputs({ ...searchInputs, date: e.target.value })}
                className="w-full mt-2 px-4 py-2 bg-gray-50 border rounded-xl"
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="px-4 py-32 mx-auto max-w-7xl">
      <div className="flex flex-col items-center max-w-2xl gap-4 mx-auto text-center">
        <h1 className="text-5xl font-bold">
          Book your next trip
        </h1>
        <p className="text-lg text-neutral-600">
          Find and book a great experience
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-8">
        <div className="p-4 bg-white rounded-2xl shadow-md">
          <div className="flex gap-2 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id)
                  setSearchInputs({})
                  setSearchResults([])
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-neutral-50 transition-colors ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white`
                    : ''
                }`}
              >
                <cat.icon className="w-5 h-5" />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="relative">
            {/* Search Fields */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {renderSearchFields()}
              </motion.div>
            </AnimatePresence>

            {/* Search Button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={handleSearch}
                className="px-8 py-2 text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors"
              >
                Search
              </button>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-4 p-4 border rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Search Results:</h3>
                <div className="grid gap-2">
                  {searchResults.map((result) => (
                    <div key={result.id} className="p-2 border rounded-lg">
                      {activeCategory === 'flights' || activeCategory === 'buses' ? (
                        <p>{`${result.from} to ${result.to} - ${result.date} - ${result.price}`}</p>
                      ) : activeCategory === 'movies' ? (
                        <p>{`${result.title} - ${result.genre} - ${result.date} - ${result.time} - ${result.price}`}</p>
                      ) : (
                        <p>{`${result.name} - ${result.type} - ${result.city} - ${result.date} - ${result.price}`}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}