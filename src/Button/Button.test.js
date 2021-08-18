import React from "react";
import { render } from "@testing-library/react";

import Button from "./index";

test("renders button correctly", () => {
  render(<Button>Test Button</Button>);
});
