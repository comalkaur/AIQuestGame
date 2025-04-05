import React from "react";
import { Button } from "@/components/ui/Button ";
import { ChevronRight } from "lucide-react";

const NextButton = ({ handleNext }) => {
  return (
    <Button
      onClick={handleNext}
      className="flex items-center gap-2 bg-green-500 text-white hover:bg-green-600"
    >
      Next <ChevronRight size={18} />
    </Button>
  );
};

export default NextButton;
