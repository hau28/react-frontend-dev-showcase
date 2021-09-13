import { render, screen, cleanup } from "@testing-library/react";
import MainLayout from "./MainLayout";

test("render main layout", () => {
  render(<MainLayout />);
  const mainLayout = screen.getByTestId("main-layout");
  const navbarBrand = screen.getByTestId("navbar-brand");
  expect(mainLayout).toBeInTheDocument();
  expect(navbarBrand.textContent).toBe("FrontendShowcase");
});
