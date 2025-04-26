# Brain Wave Mental Health Analyzer

A React-based web application for analyzing brain wave data and providing mental health insights.

## Features

- Real-time brain wave data analysis
- Interactive visualization with pie charts
- Personalized analysis reports
- Practical recommendations based on analysis results

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/ahamedfoisal/neurotiq-react
cd neurotiq-react
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```
REACT_APP_API_URL=http://localhost:5000
```

## Running the Application

1. Start the development server:
```bash
npm start
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `build` directory.

## Technology Stack

- React
- TypeScript
- Material-UI
- Recharts
- Axios

## Project Structure

```
src/
  ├── components/       # React components
  ├── services/        # API services
  ├── types/           # TypeScript type definitions
  ├── App.tsx          # Main application component
  └── index.tsx        # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
