import Portal from "@/components/layout/Portal";
import Button from "../button";
import Checkbox from "../checkbox/Checkbox";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  closable?: boolean;
  maskClosable?: boolean;
}

function Modal({ visible, closable, maskClosable, onClose }: ModalProps) {
  if (!visible) return null;

  return (
    <Portal selector="modal">
      <div className="w-screen h-screen bg-gray-500 opacity-80 absolute top-0 left-0 flex justify-center items-center">
        <div className="relative bg-white w-5/6 flex flex-col justify-between gap-4 opacity-100">
          <div className="absolute top-8 right-8" onClick={onClose}>
            X
          </div>

          <div className="p-8">
            <h1 className="font-bold text-xl text-center mb-4">회원 탈퇴</h1>

            <div className="h-48 overflow-auto bg-[#F1F1F1] p-4 mb-8">
              <p>
                - 탈퇴 후 동일한 카카오 계정으로 재가입이 가능하지만, 탈퇴
                이전의 정보(이름, 서점/프로그램 찜 목록, 취향 테스트 결과, 리뷰
                내역, 검색 기록)는 저장되지 않습니다.
              </p>
              <p>
                - 탈퇴 후 동일한 카카오 계정으로 재가입이 가능하지만, 탈퇴
                이전의 정보(이름, 서점/프로그램 찜 목록, 취향 테스트 결과, 리뷰
                내역, 검색 기록)는 저장되지 않습니다.
              </p>
            </div>

            <div>
              <Checkbox
                checked={true}
                onToggle={() => {
                  console.log("wefij");
                }}
                text="내용을 확인했으며 모든 내용에 동의합니다."
              />
            </div>
          </div>

          <div className="flex">
            <Button type="normal">탈퇴하기</Button>
            <Button type="outline">다시생각하기</Button>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
