"use client";

import { useState } from "react";
import Script from "next/script";
import petNamesData from "./petNames.json";

export default function Home() {
  const [petType, setPetType] = useState("");
  const [displayedPetType, setDisplayedPetType] = useState("");
  const [generatedNames, setGeneratedNames] = useState([]);
  const [showFullDetails, setShowFullDetails] = useState(true);
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  // Amazon product data using SHORT LINKS
  const petProducts = {
    dog: [
      {
        name: "Premium Dog Food Bowl Set",
        affiliateLink: "https://amzn.to/43s9CKl",
        image: "https://m.media-amazon.com/images/I/71pXY1ra6ZL._AC_UL320_.jpg",
        description: "Stainless steel, non-slip dog bowls",
      },
      {
        name: "Interactive Dog Toy",
        affiliateLink: "https://amzn.to/4o1bNwX",
        image: "https://m.media-amazon.com/images/I/61ZgPGqgKPL._AC_UL320_.jpg",
        description: "Durable Motion Activated Automatic Rolling Ball Toys",
      },
      {
        name: "Dog Training Treats",
        affiliateLink: "https://amzn.to/3L4FUot",
        image: "https://m.media-amazon.com/images/I/712apjMiu8L._AC_UL320_.jpg",
        description:
          "Soft Dog Treats for Training, Made With Natural Ingredients",
      },
    ],
    cat: [
      {
        name: "Cat Scratching Post",
        affiliateLink: "https://amzn.to/42IawlS",
        image: "https://m.media-amazon.com/images/I/51Db+BT9n9L._AC_UL320_.jpg",
        description:
          "Amazon Basics Cat Scratcher - Indoor Classic Single Cat & Kittens Scratching Post",
      },
      {
        name: "Interactive Cat Toy",
        affiliateLink: "https://amzn.to/4o1c2YT",
        image: "https://m.media-amazon.com/images/I/71dkOAWwCZL._AC_UL320_.jpg",
        description:
          "nteractive Cat Toy Ball Automatic Interactive Cat Toys for Indoor Cats with 3 Tails Birdsong 3 Modes",
      },
      {
        name: "Nutrish Indoor Complete Premium Natural Dry Cat Food",
        affiliateLink: "https://amzn.to/46Z9YdS",
        image: "https://m.media-amazon.com/images/I/71GjD3rDroL._AC_UL320_.jpg",
        description:
          "Dry Cat Food, Chicken with Lentils & Salmon Recipe, 14 Pounds",
      },
    ],
    bird: [
      {
        name: "Top Large Parrot Bird Cage with Detachable Rolling Stand",
        affiliateLink: "https://amzn.to/47cBd3l",
        image: "https://m.media-amazon.com/images/I/71xl+m86LPL._AC_UL320_.jpg",
        description:
          "Bird Cage with Detachable Rolling Stand for Parakeets Finches Canaries Lovebirds Cockatiels Budgies Small Quaker Conures Flight Birdcage with Swing and Perch",
      },
      {
        name: "Bird Toys Set",
        affiliateLink: "https://amzn.to/3JhspkG",
        image: "https://m.media-amazon.com/images/I/71JtO53C4-L._AC_UL320_.jpg",
        description:
          "7 Packs Parakeet Natural Wood Toys Parrot Hanging Cage Toy Perch Stand",
      },
      {
        name: "Kaytee Nut & Fruit Wild Bird Seed",
        affiliateLink: "https://amzn.to/3WgkdnQ",
        image: "https://m.media-amazon.com/images/I/81AZwrZmXGL._AC_UL320_.jpg",
        description: "Kaytee Nut & Fruit Wild Bird Seed, 5 lb",
      },
    ],
    fish: [
      {
        name: "Tetra Whisper IQ Power Filter",
        affiliateLink: "https://amzn.to/3JlBBEN",
        image: "https://m.media-amazon.com/images/I/91kKqVAf6eL._AC_UL320_.jpg",
        description: "20 Gallons, 130 GPH, with Stay Clean Technology",
      },
      {
        name: "PietyPet Fish Tank Decorations",
        affiliateLink: "https://amzn.to/3JhTggE",
        image: "https://m.media-amazon.com/images/I/81GXsiaasoL._AC_UL320_.jpg",
        description:
          "10pcs Green Fish Tank Decorations, Aquarium Decor Plastic Plants",
      },
      {
        name: "Tetra Goldfish Flakes",
        affiliateLink: "https://amzn.to/42OIMfk",
        image: "https://m.media-amazon.com/images/I/715UHWnCfmL._AC_UL320_.jpg",
        description:
          "Nutritionally Balanced Diet For Aquarium Fish, Vitamin C Enriched Flakes, 7.06 oz",
      },
    ],
    bunny: [
      {
        name: "Extra Large Wood Rabbit Hutch",
        affiliateLink: "https://amzn.to/49bb0op",
        image: "https://m.media-amazon.com/images/I/91I5dYaDikL._AC_UL320_.jpg",
        description:
          "82inches Wood Rabbit Hutch Outdoor/Indoor with Cleaning Tray & Waterproof Roof for Small and Medium Bunny Rabbit Chick (Grey)",
      },
      {
        name: "Natural Rabbit Toys Apple Wood Grass Timothy Sticks Chew",
        affiliateLink: "https://amzn.to/47gT1dM",
        image: "https://m.media-amazon.com/images/I/81UtwO9FU-L._AC_UL320_.jpg",
        description: "20 PCS Bunny Chew Toys for Teeth",
      },
      {
        name: "Kaytee Wafer Cut",
        affiliateLink: "https://amzn.to/3Lh6GtO",
        image: "https://m.media-amazon.com/images/I/81QUyj0AY1S._AC_UL320_.jpg",
        description:
          "All Natural Timothy Hay for Pet Guinea Pigs, Rabbits & Other Small Animals, 60 Ounce",
      },
    ],
    lizard: [
      {
        name: "Reptile Terrarium",
        affiliateLink: "https://amzn.to/4n8qhtH",
        image: "https://m.media-amazon.com/images/I/71zdcZWX-SL._AC_UL320_.jpg",
        description: "50 Gallon Reptile Glass Terrarium Tank",
      },
      {
        name: "Heat Lamp for Reptiles",
        affiliateLink: "https://amzn.to/4owjew2",
        image: "https://m.media-amazon.com/images/I/71XUlsHALJL._AC_UL320_.jpg",
        description:
          "Heat Lamp with Clamp, UVA UVB Reptile Light with Intelligent Cycle Timer",
      },
      {
        name: "Fluker's All-Natural",
        affiliateLink: "https://amzn.to/3KWPdH9",
        image: "https://m.media-amazon.com/images/I/71fow1eEXNL._AC_UL320_.jpg",
        description: "Calcium Fortified Mealworm Treat - 3oz",
      },
    ],
    hamster: [
      {
        name: "Hamster Cage",
        affiliateLink: "https://amzn.to/4hlQaF1",
        image: "https://m.media-amazon.com/images/I/71fow1eEXNL._AC_UL320_.jpg",
        description:
          "Chewproof, Large Hamster Cages and Habitats, Openable Top with Acrylic Sheets, Solid Built",
      },
      {
        name: "Hamster Wheel",
        affiliateLink: "https://amzn.to/47cchci",
        image: "https://m.media-amazon.com/images/I/61KFElqVLdL._AC_UL320_.jpg",
        description:
          "Quiet Spinner Hamster Running Wheels with Adjustable Stand",
      },
      {
        name: "Kaytee Forti-Diet",
        affiliateLink: "https://amzn.to/4ovyv04",
        image: "https://m.media-amazon.com/images/I/81NET2GFEAL._AC_UL320_.jpg",
        description:
          "Nutrition Backed by Science, Digestive Health, Immune Support, 3 Pounds",
      },
    ],
    guineaPig: [
      {
        name: "Guinea Pig Playpen",
        affiliateLink: "https://amzn.to/3KYYmyQ",
        image: "https://m.media-amazon.com/images/I/81gc1EgxwrL._AC_UL320_.jpg",
        description: "Small Animal Playpen with 2 Doors",
      },
      {
        name: "Guinea Pig Hideout",
        affiliateLink: "https://amzn.to/4hiytGp",
        image: "https://m.media-amazon.com/images/I/81XG8Oifc9L._AC_UL320_.jpg",
        description: "Washable Guinea Pig Tunnel Set, 2 Pack Guinea Pigs",
      },
      {
        name: "Oxbow Essentials",
        affiliateLink: "https://amzn.to/3WJ0vRJ",
        image: "https://m.media-amazon.com/images/I/81ARlKQbgcL._AC_UL320_.jpg",
        description:
          "Made with Oxbow Timothy Hay, Pet Food Pellets with Vitamin C, Small Animal Pet Products, Made in USA, High Fiber, 5 lb. bag",
      },
    ],
    hedgehog: [
      {
        name: "Hedgehog Cage",
        affiliateLink: "https://amzn.to/4qgwkiz",
        image: "https://m.media-amazon.com/images/I/61qbUHIpXzL._AC_UL320_.jpg",
        description: "Hedgehog Cage with Storage Cabinet",
      },
      {
        name: "Hedgehog Bed Cave",
        affiliateLink: "https://amzn.to/470zUG1",
        image: "https://m.media-amazon.com/images/I/71zkbSd4qbL._AC_UL320_.jpg",
        description: "Small Animals Cage Supplies Warm House-Gray",
      },
      {
        name: "ZOOPRO Hedgehog Essential",
        affiliateLink: "https://amzn.to/3IPO3N2",
        image: "https://m.media-amazon.com/images/I/81Xlf-qaFTL._AC_UL320_.jpg",
        description: "Chicken Kibble with Mealworms (1.75 Pound)",
      },
    ],
    ferret: [
      {
        name: "Ferret Cage",
        affiliateLink: "https://amzn.to/3JfJyLL",
        image: "https://m.media-amazon.com/images/I/81QYKJ8q4BL._AC_UL320_.jpg",
        description:
          "Large Two Full Story Deluxe Double Unit 4-Tiers Tight 1/2-Inch Bar Spacing Durable Front Doors",
      },
      {
        name: "Ferret Hammock",
        affiliateLink: "https://amzn.to/4qpohjB",
        image: "https://m.media-amazon.com/images/I/71773VGpyXL._AC_UL320_.jpg",
        description: "Cage Accessories Hide,Play and Sleep,2 Pack,Blue Star",
      },
      {
        name: "Wild Harvest",
        affiliateLink: "https://amzn.to/4hhfKed",
        image: "https://m.media-amazon.com/images/I/91kDDTV53CL._AC_UL320_.jpg",
        description:
          "Advanced Nutrition Ferret, High Protein And Taurine Diet, 3 Pounds",
      },
    ],
  };

  const generateNames = () => {
    if (!petType) {
      alert("Please select a pet type first!");
      return;
    }

    setDisplayedPetType(petType);

    let names = [];

    if (petType === "all") {
      Object.values(petNamesData).forEach((petNames) => {
        names.push(...petNames);
      });
    } else {
      names = petNamesData[petType] || [];
    }

    if (sortAlphabetically) {
      names = [...names].sort((a, b) => a.name.localeCompare(b.name));
    }

    setGeneratedNames(names);
  };

  const toggleDetailsView = () => {
    setShowFullDetails(!showFullDetails);
  };

  const toggleSort = () => {
    setSortAlphabetically(!sortAlphabetically);
    if (displayedPetType) {
      setTimeout(() => {
        const newSortValue = !sortAlphabetically;
        let names = [];

        if (displayedPetType === "all") {
          Object.values(petNamesData).forEach((petNames) => {
            names.push(...petNames);
          });
        } else {
          names = petNamesData[displayedPetType] || [];
        }

        if (newSortValue) {
          names = [...names].sort((a, b) => a.name.localeCompare(b.name));
        }

        setGeneratedNames(names);
      }, 0);
    }
  };

  // Get products for current pet type
  const getCurrentProducts = () => {
    if (displayedPetType === "all" || !displayedPetType) {
      return petProducts.dog; // Default to dog products
    }
    return petProducts[displayedPetType] || petProducts.dog;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-100 to-violet-300 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-violet-800 mb-2">
            Ultimate Pet Name Generator
          </h1>
          <p className="text-violet-600">
            Find the perfect name for your furry, feathered, or finned friend
          </p>
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
              className="w-full md:w-auto px-6 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors font-medium shadow-md"
            >
              Generate Names
            </button>

            {generatedNames.length > 0 && (
              <>
                <button
                  onClick={toggleDetailsView}
                  className="w-full md:w-auto px-6 py-3 bg-violet-400 text-white rounded-lg hover:bg-violet-500 transition-colors font-medium shadow-md"
                >
                  {showFullDetails ? "Show Names Only" : "Show Full Details"}
                </button>

                <button
                  onClick={toggleSort}
                  className="w-full md:w-auto px-6 py-3 bg-violet-300 text-violet-800 rounded-lg hover:bg-violet-400 transition-colors font-medium shadow-md"
                >
                  {sortAlphabetically ? "Default Order" : "Sort A-Z"}
                </button>
              </>
            )}
          </div>
        </div>

        {displayedPetType && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-violet-800 text-center mb-4">
              {displayedPetType === "all"
                ? "All Pet Names"
                : `${
                    displayedPetType.charAt(0).toUpperCase() +
                    displayedPetType.slice(1)
                  } Names`}
            </h2>
          </div>
        )}

        <div className="space-y-4">
          {generatedNames.map((nameObj, index) => (
            <div key={index}>
              {showFullDetails ? (
                <div className="bg-gradient-to-r from-violet-50 to-violet-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-violet-500">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-violet-800">
                      {nameObj.name}
                    </h3>
                    <div className="flex gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          nameObj.gender === "Male"
                            ? "bg-blue-200 text-blue-800"
                            : nameObj.gender === "Female"
                            ? "bg-pink-200 text-pink-800"
                            : "bg-purple-200 text-purple-800"
                        }`}
                      >
                        {nameObj.gender}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          nameObj.popularity === "Very Popular"
                            ? "bg-green-200 text-green-800"
                            : nameObj.popularity === "Popular"
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {nameObj.popularity}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-violet-700">
                    <p>
                      <span className="font-semibold">✨ Meaning:</span>{" "}
                      {nameObj.meaning}
                    </p>
                    <p>
                      <span className="font-semibold">🌍 Origin:</span>{" "}
                      {nameObj.origin}
                    </p>
                    <p>
                      <span className="font-semibold">💫 Personality:</span>{" "}
                      {nameObj.personality}
                    </p>
                    <p>
                      <span className="font-semibold">📊 Popularity:</span>{" "}
                      {nameObj.popularity}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-violet-400">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-violet-800">
                      {nameObj.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        nameObj.gender === "Male"
                          ? "bg-blue-200 text-blue-800"
                          : nameObj.gender === "Female"
                          ? "bg-pink-200 text-pink-800"
                          : "bg-purple-200 text-purple-800"
                      }`}
                    >
                      {nameObj.gender}
                    </span>
                  </div>
                </div>
              )}

              {/* Show ad blocks every 5 names, alternating between AdSense and Amazon */}
              {(index + 1) % 5 === 0 && (
                <div className="my-6">
                  {(index + 1) % 10 === 0 ? (
                    // AdSense ads at positions 10, 20, 30, etc.
                    <div className="bg-violet-50 border-2 border-dashed border-violet-300 rounded-lg p-6">
                      <div className="text-center">
                        <p className="text-violet-600 text-sm mb-2">
                          Advertisement
                        </p>
                        <div className="bg-violet-200 border-2 border-violet-400 rounded h-32 flex items-center justify-center">
                          <Script
                            async
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9079975836016176"
                            crossorigin="anonymous"
                          />
                          <ins
                            className="adsbygoogle"
                            style={{display: "block"}}
                            data-ad-format="fluid"
                            data-ad-layout-key="-fb+5w+4e-db+86"
                            data-ad-client="ca-pub-9079975836016176"
                            data-ad-slot="4599766774"
                          ></ins>
                          <script>
                            (adsbygoogle = window.adsbygoogle || []).push({});
                          </script>
                        </div>
                        <p className="text-violet-500 text-xs mt-2">
                          Ads help support this free tool
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Amazon affiliate links at positions 5, 15, 25, etc.
                    <div className="bg-violet-50 border-2 border-dashed border-violet-300 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-violet-700 mb-4 text-center">
                        Recommended{" "}
                        {displayedPetType.charAt(0).toUpperCase() +
                          displayedPetType.slice(1)}{" "}
                        Products
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {getCurrentProducts().map((product, prodIndex) => (
                          <div
                            key={prodIndex}
                            className="border border-violet-200 rounded-lg p-4 bg-white hover:shadow-lg transition-shadow"
                          >
                            <div className="mb-3">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-22 object-contain rounded"
                              />
                            </div>
                            <h4 className="font-bold text-violet-800 mb-2">
                              {product.name}
                            </h4>
                            <p className="text-violet-600 text-sm mb-3">
                              {product.description}
                            </p>
                            <a
                              href={product.affiliateLink}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              className="block w-full bg-violet-500 text-white py-2 rounded text-center hover:bg-violet-600 transition-colors font-medium"
                            >
                              View on Amazon
                            </a>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-violet-500 text-center mt-4">
                        As an Amazon Associate, we earn from qualifying
                        purchases.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {generatedNames.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-violet-700 font-medium">
              Showing {generatedNames.length} names
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
