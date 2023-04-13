import Button from "@/components/common/button";
import Checkbox from "@/components/common/checkbox";
import Modal from "@/components/template/Modal";
import { useState } from "react";

interface ExitModalProps {
  onClose: () => void;
}

/**
 * 회원 탈퇴 팝업
 */
export default function ExitModal({ onClose }: ExitModalProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Modal onClose={onClose}>
      <>
        <div className="p-6">
          <h1 className="font-semibold text-center mb-6">회원 탈퇴</h1>

          <div className="h-36 overflow-auto bg-[#F1F1F1] p-4 mb-8 text-sm">
            <ul className="space-y-2">
              <li className="custom-list-style-dash">
                탈퇴 후 동일한 카카오 계정으로 재가입이 가능하지만, 탈퇴 이전의
                정보(이름, 서점/프로그램 찜 목록, 취향 테스트 결과, 리뷰 내역,
                검색 기록)는 저장되지 않습니다.
              </li>
              <li className="custom-list-style-dash">
                탈퇴 후 동일한 카카오 계정으로 재가입이 가능하지만, 탈퇴 이전의
                정보(이름, 서점/프로그램 찜 목록, 취향 테스트 결과, 리뷰 내역,
                검색 기록)는 저장되지 않습니다.
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
      </>
    </Modal>
  );
}
