"use client";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function showToast({ title, description, actionLabel, actionCallback }) {
  const { toast } = useToast();

  toast({
    title: title || "Default Title",
    description: description || "Default Description",
    action: (
      <ToastAction altText={actionLabel || "Default Alt Text"} onClick={actionCallback}>
        {actionLabel || "Undo"}
      </ToastAction>
    ),
  });
}
