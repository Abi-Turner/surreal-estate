import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  it("renders the title correctly", () => {
    const title = "Beautiful House";
    const { getByText } = render(<PropertyCard title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });

  it("renders the type correctly", () => {
    const type = "Apartment";
    const { getByText } = render(<PropertyCard type={type} />);
    expect(getByText(type)).toBeInTheDocument();
  });

  it("renders the bathrooms correctly", () => {
    const bathrooms = 2;
    const { getByText } = render(<PropertyCard bathrooms={bathrooms} />);
    expect(getByText(`${bathrooms} bathrooms`)).toBeInTheDocument();
  });

  it("renders the bedrooms correctly", () => {
    const bedrooms = 3;
    const { getByText } = render(<PropertyCard bedrooms={bedrooms} />);
    expect(getByText(`${bedrooms} bedrooms`)).toBeInTheDocument();
  });

  it("renders the price correctly", () => {
    const price = 2000;
    const { getByText } = render(<PropertyCard price={price} />);
    const priceElement = getByText(price.toString());
    expect(priceElement).toBeInTheDocument();
  });

  it("renders the city correctly", () => {
    const city = "New York";
    const { getByText } = render(<PropertyCard city={city} />);
    expect(getByText(city)).toBeInTheDocument();
  });

  it("renders the email correctly", () => {
    const email = "john@example.com";
    const { getByText } = render(<PropertyCard email={email} />);
    expect(getByText(email)).toBeInTheDocument();
  });
});
