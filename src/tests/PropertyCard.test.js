import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

const property = {
  id: "123",
  title: "Family House",
  type: "Detached House",
  bathrooms: "2",
  bedrooms: "3",
  price: "250000",
  city: "Manchester",
  email: "example@example.com",
};

describe("PropertyCard", () => {
  it("renders all the details of the property correctly", () => {
    const { getByText } = render(<PropertyCard property={property} />);
    expect(getByText(property.title)).toBeInTheDocument();
    expect(getByText(property.type)).toBeInTheDocument();
    expect(getByText(`${property.bedrooms} bedrooms`)).toBeInTheDocument();
    expect(getByText(`${property.bathrooms} bathrooms`)).toBeInTheDocument();
    expect(getByText(property.city)).toBeInTheDocument();
    expect(getByText(property.price)).toBeInTheDocument();
  });
});
