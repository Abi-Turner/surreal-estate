# Surreal Estate - Property Search Engine

Surreal Estate is a single-page web application built with React that allows users to search for different properties, add new properties, and view property details. This README file provides an overview of the application and instructions on how to run it locally.

## Getting Started

To get started with Surreal Estate, you should first clone the repository from GitHub:

```shell
git clone https://github.com/your-username/surreal-estate.git
```

Once you have cloned the repository, navigate to the project directory:

```shell
cd surreal-estate
```

Install the necessary dependencies by running:

```shell
npm install
```

## Running the Application

Surreal Estate is a client-side routed application, meaning it uses client-side routing to handle navigation within the application. To run the application, follow the steps below:

1. Start the Surreal Estate API server by following the instructions provided in the [Surreal Estate API repository](https://github.com/CommandShiftHQ/surreal-estate-api). Make sure the API is running and accessible.

2. Open the `src/api/config.js` file and update the `API_URL` constant with the appropriate API URL where the Surreal Estate API is running.

3. Start the Surreal Estate front-end application by running:

```shell
npm start
```

The application should open automatically in your default web browser at `http://localhost:3000`.

## Pages

Surreal Estate has three main pages:

- **Listings Page**: The listings page allows users to search for different properties and sort/filter the results. Users can filter properties by location, price, and number of bedrooms.

- **Add Property Page**: The add property page allows users to add new properties to the database. Users can enter the property details, such as the title, location, price, and number of bedrooms, and upload photos of the property.

- **Property Page**: The property page displays the details of a single property. Users can view the property photos, description, location, price, and other details.

## Docker Setup

Surreal Estate can be run in a Docker container. To set up the application using Docker, follow the steps below:

1. Make sure you have Docker installed on your machine.

2. Run the Surreal Estate API in a Docker container by executing the following command in the project directory:

```shell
docker run -p 4000:4000 -d commandshift/surreal-estate-api
```

3. Start the Surreal Estate front-end application by running:

```shell
npm start
```

The application should open automatically in your default web browser at `http://localhost:3000`.

## Contributing

If you would like to contribute to Surreal Estate, please open a pull request on GitHub. We welcome contributions from all developers, whether you are a beginner or an experienced developer.

## Dependencies

Surreal Estate relies on the following key dependencies:

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for React applications.
- Axios: A promise-based HTTP client for making API requests.


## Backend API

Surreal Estate relies on a separate API for the backend. The Surreal Estate API can be found at [https://github.com/CommandShiftHQ/surreal-estate-api](https://github.com/CommandShiftHQ/surreal-estate-api). Please follow the instructions provided in the API repository to set up and run the API.

## License

Surreal Estate is open source software licensed under the MIT license.

## Author

Abi Turner
