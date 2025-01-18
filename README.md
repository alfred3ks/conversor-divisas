# Currency Converter Application

This is a simple currency converter application that uses the [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch real-time exchange rates. The application is designed to be lightweight, efficient, and user-friendly, making it an essential tool for travelers, traders, and anyone dealing with multiple currencies.

## Features

- Fetches real-time exchange rates from ExchangeRate-API.
- Supports conversion between multiple currencies.
- Intuitive user interface for ease of use.
- Error handling for invalid inputs and network issues.
- Lightweight and responsive design.

## Prerequisites

Before running the application, ensure you have the following:

- **API Key:** Sign up at [ExchangeRate-API](https://www.exchangerate-api.com/) to get a free API key.
- **Node.js** (for web-based applications) or a compatible development environment.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/currency-converter-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd currency-converter-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your API key:
   ```env
   EXCHANGE_RATE_API_KEY=your-api-key
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and go to the URL provided by Vite (e.g., `http://localhost:3000`).

3. Enter the amount and select the currencies you want to convert.

4. View the converted result in real-time.

## Project Structure

The project is organized as follows:

```bash
src/
├── components/
│   ├── Layout/                   # Contiene el componente Layout
│   │   ├── Layout.js
│   │   ├── layout.module.css
│   ├── Header/                   # Componente Header
│   │   ├── Header.js
│   │   ├── header.module.css
│   ├── Footer/                   # Componente Footer
│   │   ├── Footer.js
│   │   ├── footer.module.css
│   ├── Conversor/                # Componente Conversor
│   │   ├── Conversor.js
│   │   ├── conversor.module.css
├── pages/                        # Opcional: Páginas de la app (si usas rutas)
│   ├── Home.js
│   ├── About.js
├── App.js                        # Entrada principal de la app
├── app.module.css                # Estilos globales para App
├── main.js                       # Punto de entrada de React
├── reset.css                     # Estilos generales (reset, etc.)
```

## API Integration

This application uses the [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch live exchange rates. Below is an example of how the API is utilized in the application:

```javascript
const fetchExchangeRates = async (baseCurrency) => {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/latest/${baseCurrency}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
```

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript (or React for advanced applications)
- **Build Tool:** Vite
- **Backend:** Node.js (optional)
- **API:** ExchangeRate-API

## Contributions

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any queries or support, feel free to reach out:

- Email: alfred3ks@proton.me
- GitHub: [alfred3ks](https://github.com/alfred3ks)

### by: @alfred3ks
