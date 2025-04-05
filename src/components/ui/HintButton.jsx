import React from "react";
import { Button } from "@/components/ui/Button ";
import { Lightbulb } from "lucide-react";

const HintButton = ({ handleHint }) => {
  return (
    <Button
      onClick={handleHint}
      className="flex items-center gap-2 bg-yellow-400 text-white hover:bg-yellow-500"
    >
      <Lightbulb size={18} /> Hint
    </Button>
  );
};

export default HintButton;
