import Portal from "@/components/layout/Portal";
import { useState } from "react";
import Button from "../button";
import Checkbox from "../checkbox/Checkbox";
import Icon from "../icon";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  closable?: boolean;
  maskClosable?: boolean;
}

function Modal({ visible, closable, maskClosable, onClose }: ModalProps) {
  if (!visible) return null;

  const [checked, setChecked] = useState(false);

  return (
    <Portal selector="modal">
      <div className="w-screen h-screen bg-black/50 absolute top-0 left-0 flex justify-center items-center">
        <div className="max-w-screen-md relative bg-white mx-4 flex flex-col justify-between gap-1">
          <div
            className="absolute top-6 right-6 cursor-pointer"
            onClick={onClose}
          >
            <Icon name="close" />
          </div>

          <div className="p-6">
            <h1 className="font-semibold text-center mb-6">회원 탈퇴</h1>

            <div className="h-36 overflow-auto bg-[#F1F1F1] p-4 mb-8 text-sm">
              <ul className="space-y-2">
                <li className="custom-list-style-dash">
                  탈퇴 후 동일한 카카오 계정으로 재가입이 가능하지만, 탈퇴
                  이전의 정보(이름, 서점/프로그램 찜 목록, 취향 테스트 결과,
                  리뷰 내역, 검색 기록)는 저장되지 않습니다.
                </li>
                <li className="custom-list-style-dash">
                  탈퇴 후 동일한 카카오 계정으로 재가입이 가능하지만, 탈퇴
                  이전의 정보(이름, 서점/프로그램 찜 목록, 취향 테스트 결과,
                  리뷰 내역, 검색 기록)는 저장되지 않습니다.
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Checkbox
                checked={checked}
                onToggle={() => {
                  setChecked(!checked);
                }}
                text="내용을 확인했으며 모든 내용에 동의합니다."
                size="sm"
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
