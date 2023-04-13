import Icon from "@/components/common/icon";
import Portal from "@/components/layout/Portal";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  isFull?: boolean;
}

/**
 * 모달 컴포넌트 - 기본 모달(Popup)부터 전체 모달(LNB)까지 가능하도록 구현
 */
export default function Modal({ onClose, children, isFull }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Portal selector="modal">
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
        <div
          className={cn(
            "max-w-screen-md relative bg-white mx-4",
            isFull && "fixed inset-0 mx-0"
          )}
        >
          <div
            className={cn(
              "absolute top-6 right-6 cursor-pointer",
              isFull && "static text-2xl px-4 py-5 flex flex-row-reverse"
            )}
            onClick={onClose}
          >
            {isFull ? (
              <Icon name="close" width={32} height={32} />
            ) : (
              <Icon name="close" width={20} height={20} />
            )}
          </div>

          {children}
        </div>
      </div>
    </Portal>
  );
}
