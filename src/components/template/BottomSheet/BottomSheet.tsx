import Icon from "@/components/common/icon";
import Portal from "@/components/layout/Portal";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface ModalBottomProps {
  onClose(): void;
  children: React.ReactNode;
}

/**
 * Modal Bottom Sheet
 * - 밑에서 위로 자연스럽게 올라오는 모달
 */
export default function BottomSheet({ onClose, children }: ModalBottomProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Portal selector="modal">
      <div className="fixed top inset-0 bg-black/50 z-10 flex justify-center items-end">
        <div
          className={cn(
            "relative w-full max-w-screen-md h-[420px] bg-white px-4 pb-10 animate-[bottom-sheet-up_200ms_ease-in-out]"
          )}
        >
          <div
            className="absolute top-[-48px] right-[4px] p-2 rounded-full"
            onClick={onClose}
          >
            <Icon
              name="close"
              className="stroke-white"
              width={32}
              height={32}
              viewBox="0 0 22 22"
            />
          </div>

          {/* <div className="w-12 h-1 rounded bg-[#909090] mx-auto mt-3 mb-7" /> */}
          {children}
        </div>
      </div>
    </Portal>
  );
}
