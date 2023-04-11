import Icon from "@/components/common/icon";
import Portal from "@/components/layout/Portal";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface ModalBottomProps {
  onClose(): void;
  children: React.ReactNode;
}
// translate-y-[420px]
/**
 * Modal Bottom Sheet
 * - 밑에서 위로 자연스럽게 올라오는 모달
 */
export default function BottomSheet({ onClose, children }: ModalBottomProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <Portal selector="modal">
      <div className="w-screen h-screen bg-black/50 absolute top-0 left-0 flex justify-center items-end z-10">
        <div
          className={cn(
            "relative w-full max-w-screen-md h-[420px] bg-white rounded-t-lg px-4 pb-10 animate-[bottom-sheet-up_200ms_ease-in-out]"
          )}
        >
          <div
            className="absolute top-[-48px] left-[50%] translate-x-[-50%] bg-white p-2 rounded-full"
            onClick={onClose}
          >
            <Icon name="close" />
          </div>

          <div className="w-12 h-1 rounded bg-[#909090] mx-auto mt-3 mb-7" />
          {children}
        </div>
      </div>
    </Portal>
  );
}
