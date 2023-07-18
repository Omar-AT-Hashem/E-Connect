import { chatHrefConstructor, cn } from "@/lib/utils";
import { FC } from "react";
import { Toast, toast } from "react-hot-toast";

interface UnseenChatToastProps {
  t: Toast;
  sessionId: string;
  senderId: string;
}

const UnseenChatToast: FC<UnseenChatToastProps> = ({
  t,
  senderId,
  sessionId,
}) => {
  return (
    <div
      className={cn(
        "max-2-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5",
        { "animate-enter": t.visible, "animate-leave": !t.visible }
      )}
    >
      <a
        onClick={() => toast.dismiss(t.id)}
        href={`/dashboard/chat/${chatHrefConstructor(sessionId, senderId)}`}
        className="flex-1 w-0 p-4"
      ></a>
    </div>
  );
};

export default UnseenChatToast;
