# Pet Name Generator - Next.js Application

A comprehensive web-based tool for generating creative and appealing names for various types of pets including dogs, cats, birds, and fish. This generator provides name suggestions along with their meanings and origins to help pet owners make informed decisions.

## Features

- **Diverse Name Selection**: Offers 20+ name suggestions for each pet type (dogs, cats, birds, and fish)
- **Meanings & Origins**: Each name comes with its meaning and cultural/linguistic origin
- **Easy to Use**: Simple dropdown selection and generate button
- **Responsive Design**: Works on both desktop and mobile devices
- **Alternating Content**: Displays Google AdSense ads and Amazon affiliate links every 5 names
- **SEO Optimized**: Structured for search engine visibility

## Tech Stack

- **Next.js 14** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Reusable component library
- **React** - JavaScript library for building user interfaces

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd pet-name-generator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production

To build and start the production server:

```bash
npm run build
npm start
```

## Implementation Details

### Name Database
The generator includes carefully curated names for each pet type with:
- Traditional and unique options
- Names that are easy to pronounce, remember, and spell
- Cultural and mythological references
- Pop culture inspirations

### Alternating Content
Every 5 names, the application displays alternating content:
- **AdSense Ads**: Appear at positions 5, 15, 25, etc.
- **Amazon Affiliate Links**: Appear at positions 10, 20, 30, etc.

### Color Theme
The application uses a violet-500 color theme as specified:
- Primary color: violet-500 (#8b5cf6)
- Secondary colors: violet-100, violet-300, violet-600, violet-700, violet-800

## Customization

To customize the AdSense integration:
1. Replace the publisher ID in the ad component
2. Update the ad slot ID in the ad component

To customize the affiliate products:
1. Modify the product arrays in the page component
2. Update the image URLs, product names, prices, and affiliate links

To add more pet types:
1. Add a new option to the select element
2. Add a new array of names to the petNamesDatabase object

## File Structure

```
pet-name-generator/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Preview

The application is currently running and can be previewed at:
https://3000-b999dc8d-9f8b-4144-b7ca-1da4a2c2905d.proxy.daytona.works

## License

This project is open source and available under the MIT License.# thenamezoo
# thenamezoo
