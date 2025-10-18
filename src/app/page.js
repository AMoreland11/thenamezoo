'use client'

import { useState } from 'react'
import petNamesData from './petNames.json'

export default function Home() {
  const [petType, setPetType] = useState('')
  const [displayedPetType, setDisplayedPetType] = useState('')
  const [generatedNames, setGeneratedNames] = useState([])
  const [showFullDetails, setShowFullDetails] = useState(true)
  const [sortAlphabetically, setSortAlphabetically] = useState(false)

  const generateNames = () => {
    if (!petType) {
      alert('Please select a pet type first!')
      return
    }
    
    // Update the displayed pet type only when generating
    setDisplayedPetType(petType)
    
    let names = []
    
    if (petType === 'all') {
      // Combine all pet names without category headers
      Object.values(petNamesData).forEach(petNames => {
        names.push(...petNames)
      })
    } else {
      names = petNamesData[petType] || []
    }
    
    // Sort alphabetically if enabled
    if (sortAlphabetically) {
      names = [...names].sort((a, b) => a.name.localeCompare(b.name))
    }
    
    setGeneratedNames(names)
  }

  const toggleDetailsView = () => {
    setShowFullDetails(!showFullDetails)
  }

  const toggleSort = () => {
    setSortAlphabetically(!sortAlphabetically)
    // Re-generate names with new sort setting
    if (displayedPetType) {
      setTimeout(() => {
        const newSortValue = !sortAlphabetically
        let names = []
        
        if (displayedPetType === 'all') {
          Object.values(petNamesData).forEach(petNames => {
            names.push(...petNames)
          })
        } else {
          names = petNamesData[displayedPetType] || []
        }
        
        if (newSortValue) {
          names = [...names].sort((a, b) => a.name.localeCompare(b.name))
        }
        
        setGeneratedNames(names)
      }, 0)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-100 to-violet-300 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-violet-800 mb-2">Ultimate Pet Name Generator</h1>
          <p className="text-violet-600">Find the perfect name for your furry, feathered, or finned friend</p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <select 
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
              className="w-full md:w-auto px-4 py-3 border-2 border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-violet-800 font-medium bg-white"
            >
              <option value="">Select a Pet Type</option>
              <option value="all">All Pet Names</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="fish">Fish</option>
              <option value="bunny">Bunny/Rabbit</option>
              <option value="lizard">Lizard/Reptile</option>
              <option value="hamster">Hamster</option>
              <option value="guineaPig">Guinea Pig</option>
              <option value="hedgehog">Hedgehog</option>
              <option value="ferret">Ferret</option>
            </select>
            
            <button 
              onClick={generateNames}
              className="w-full md:w-auto px-6 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors font-medium"
            >
              Generate Names
            </button>
          </div>
          
          {generatedNames.length > 0 && (
            <div className="mt-4 flex flex-col md:flex-row justify-center gap-3">
              <button 
                onClick={toggleDetailsView}
                className="px-4 py-2 bg-violet-100 text-violet-700 rounded-lg hover:bg-violet-200 transition-colors font-medium border border-violet-300"
              >
                {showFullDetails ? "Show Names Only" : "Show Full Details"}
              </button>
              
              <button 
                onClick={toggleSort}
                className={`px-4 py-2 rounded-lg transition-colors font-medium border ${
                  sortAlphabetically 
                    ? 'bg-violet-500 text-white border-violet-500 hover:bg-violet-600' 
                    : 'bg-violet-100 text-violet-700 border-violet-300 hover:bg-violet-200'
                }`}
              >
                {sortAlphabetically ? "✓ Sorted A-Z" : "Sort A-Z"}
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-violet-800 mb-6">
            {displayedPetType ? 
              (displayedPetType === 'all' ? 
                "All Pet Names" : 
                `Perfect Names for Your ${displayedPetType.charAt(0).toUpperCase() + displayedPetType.slice(1)}`) : 
              'Your Pet Names'}
          </h2>
          
          <div className="space-y-4">
            {generatedNames.length > 0 ? (
              generatedNames.map((pet, index) => (
                <div key={index}>
                  {/* Show ad blocks every 5 names, alternating between AdSense and Amazon */}
                  {index > 0 && index % 5 === 0 ? (
                    <div className="my-8">
                      {index % 10 === 0 ? (
                        // AdSense ad
                        <div className="bg-violet-50 border-2 border-dashed border-violet-300 rounded-lg p-6 text-center">
                          <h3 className="text-lg font-bold text-violet-700 mb-2">Advertisement</h3>
                          <div className="bg-violet-200 border-2 border-violet-400 rounded p-4">
                            <p className="text-violet-800">Google AdSense Ad Placement</p>
                            <p className="text-sm text-violet-600 mt-2">This is where your AdSense ad would appear</p>
                          </div>
                          <div className="mt-4 text-sm text-violet-500">
                            <p>Ads help support this free tool</p>
                          </div>
                        </div>
                      ) : (
                        // Amazon affiliate links
                        <div className="bg-violet-50 border-2 border-dashed border-violet-300 rounded-lg p-6">
                          <h3 className="text-lg font-bold text-violet-700 mb-4 text-center">Recommended Pet Products</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="border border-violet-200 rounded-lg p-4 text-center">
                              <div className="bg-violet-200 border-2 border-violet-400 rounded w-full h-32 flex items-center justify-center mb-3">
                                <p className="text-violet-800">Product Image</p>
                              </div>
                              <h4 className="font-bold text-violet-800">Premium Pet Food</h4>
                              <p className="text-violet-600 text-sm my-2">Nutritious and delicious for your pet</p>
                              <p className="font-bold text-violet-700">$24.99</p>
                              <button className="mt-2 w-full bg-violet-500 text-white py-1 rounded hover:bg-violet-600 transition-colors">
                                View Product
                              </button>
                            </div>
                            <div className="border border-violet-200 rounded-lg p-4 text-center">
                              <div className="bg-violet-200 border-2 border-violet-400 rounded w-full h-32 flex items-center justify-center mb-3">
                                <p className="text-violet-800">Product Image</p>
                              </div>
                              <h4 className="font-bold text-violet-800">Interactive Toys</h4>
                              <p className="text-violet-600 text-sm my-2">Keep your pet entertained for hours</p>
                              <p className="font-bold text-violet-700">$14.99</p>
                              <button className="mt-2 w-full bg-violet-500 text-white py-1 rounded hover:bg-violet-600 transition-colors">
                                View Product
                              </button>
                            </div>
                            <div className="border border-violet-200 rounded-lg p-4 text-center">
                              <div className="bg-violet-200 border-2 border-violet-400 rounded w-full h-32 flex items-center justify-center mb-3">
                                <p className="text-violet-800">Product Image</p>
                              </div>
                              <h4 className="font-bold text-violet-800">Comfortable Bed</h4>
                              <p className="text-violet-600 text-sm my-2">Perfect for your pet to rest</p>
                              <p className="font-bold text-violet-700">$34.99</p>
                              <button className="mt-2 w-full bg-violet-500 text-white py-1 rounded hover:bg-violet-600 transition-colors">
                                View Product
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null}
                  
                  {showFullDetails ? (
                    <div className="border border-violet-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-violet-50">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-violet-700">{pet.name}</h3>
                        {pet.gender && (
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            pet.gender === 'Male' ? 'bg-blue-100 text-blue-700' :
                            pet.gender === 'Female' ? 'bg-pink-100 text-pink-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {pet.gender}
                          </span>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="text-violet-500 font-semibold mr-2">✨ Meaning:</span>
                          <p className="text-violet-600 italic flex-1">{pet.meaning}</p>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="text-violet-500 font-semibold mr-2">🌍 Origin:</span>
                          <p className="text-violet-600 flex-1">{pet.origin}</p>
                        </div>
                        
                        {pet.personality && (
                          <div className="flex items-start">
                            <span className="text-violet-500 font-semibold mr-2">💫 Personality:</span>
                            <p className="text-violet-600 flex-1">{pet.personality}</p>
                          </div>
                        )}
                        
                        {pet.popularity && (
                          <div className="flex items-center mt-2">
                            <span className="text-violet-500 font-semibold mr-2">📊 Popularity:</span>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              pet.popularity === 'Extremely popular' ? 'bg-green-100 text-green-700' :
                              pet.popularity === 'Very popular' ? 'bg-emerald-100 text-emerald-700' :
                              pet.popularity === 'Popular' ? 'bg-teal-100 text-teal-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {pet.popularity}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="border border-violet-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center justify-between">
                      <h3 className="text-xl font-bold text-violet-700">{pet.name}</h3>
                      {pet.gender && (
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          pet.gender === 'Male' ? 'bg-blue-100 text-blue-700' :
                          pet.gender === 'Female' ? 'bg-pink-100 text-pink-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {pet.gender}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-violet-600 py-8">Select a pet type and click "Generate Names" to get started!</p>
            )}
          </div>
        </div>

        <footer className="text-center py-6 text-violet-600">
          <p>© 2025 Ultimate Pet Name Generator | Helping pet owners find the perfect name</p>
        </footer>
      </div>
    </div>
  )
}