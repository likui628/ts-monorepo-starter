import React from "react";
import { Button } from "@likui628/components/button";
import { meaningOfLife } from "@likui628/foo";
import { useTest } from "@hooks/test";

export const App = () => {
  useTest();

  return (
    <div>
      {meaningOfLife}
      <Button />
    </div>
  );
};
