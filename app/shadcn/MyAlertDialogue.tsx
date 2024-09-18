import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function MyAlertDialogue({
  trigger,
  title,
  body,
  T_style,
}: {
  trigger: string;
  title: string;
  body: React.ReactNode;
  T_style?: string;
}) {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className={T_style}>{trigger}</AlertDialogTrigger>
        <AlertDialogContent className="max-h-[560px] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{body}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {/* <AlertDialogAction></AlertDialogAction> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default MyAlertDialogue;
