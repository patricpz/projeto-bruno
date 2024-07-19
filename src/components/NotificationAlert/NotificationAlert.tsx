import { RocketIcon } from "@radix-ui/react-icons";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export function NotificationAlert({ title, description }) {
  return (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>{title || "Heads up!"}</AlertTitle>
      <AlertDescription>
        {description || "You can add components to your app using the cli."}
      </AlertDescription>
    </Alert>
  );
}
