import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export const MyAlert = ({
  title,
  description,
  alertStyle,
}: {
  title: string;
  description: string;
  alertStyle: string;
}) => {
  return (
    <Alert className={alertStyle}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description} </AlertDescription>
    </Alert>
  );
};
