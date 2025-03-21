'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import createNotionPage from '@/libs/notion';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0.5rem',
    padding: '2rem',
    maxWidth: '400px',
    width: '90%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
  },
};

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    // Modal root element 설정
    Modal.setAppElement(document.body);
  }, []);

  const handleSubmit = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const content = formData.get('content') as string;

    try {
      await createNotionPage(name, email, content);
      setModalMessage('문의가 성공적으로 접수되었습니다.');
      setIsModalOpen(true);
      // 폼 초기화
      const form = document.querySelector('form') as HTMLFormElement;
      form?.reset();
    } catch (err) {
      setModalMessage('문의 접수 중 오류가 발생했습니다.');
      setIsModalOpen(true);
      console.error(err);
    }
  };

  return (
    <div id="contact" className="w-full py-20 bg-white">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
        contentLabel="문의 결과"
      >
        <div className="text-center">
          <h2 className="mb-4 text-xl font-bold">{modalMessage}</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 text-white rounded bg-primary-600 hover:bg-primary-700"
          >
            확인
          </button>
        </div>
      </Modal>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                <span className="text-primary-600">자신있는 프로젝트만</span>{' '}
                진행합니다
              </h2>
              <p className="mb-12 text-lg text-gray-600">
                100% 내부 개발팀의 철저한 품질 관리와 파격적인 환불 보장제도를
                제공합니다.
                <br className="hidden md:block" />
                <span className="inline-block mt-2 font-semibold text-primary-600">
                  2025년 딱 1개만 더
                </span>{' '}
                추가 진행 합니다.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="tel:010-4718-8591"
                className="flex items-center justify-center gap-3 px-4 py-2 btn-primary-lg"
              >
                <PhoneIcon className="w-4 h-4" />
                <span className="text-sm sm:text-base">010-4718-8591</span>
              </Link>
              <Link
                href="mailto:sunghyun4718@gmail.com"
                className="flex items-center justify-center gap-3 px-4 py-2 btn-secondary-lg"
              >
                <EnvelopeIcon className="w-4 h-4" />
                <span className="text-sm sm:text-base truncate">
                  sunghyun4718@gmail.com
                </span>
              </Link>
            </div>
          </div>

          <form action={handleSubmit} className="space-y-6">
            <div>
              <label className="form-label">이름</label>
              <input
                name="name"
                type="text"
                placeholder="홍길동"
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="form-label">이메일</label>
              <input
                name="email"
                type="email"
                placeholder="example@email.com"
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="form-label">문의내용</label>
              <textarea
                name="content"
                placeholder="프로젝트에 대해 설명해주세요."
                rows={4}
                className="form-input"
                required
              ></textarea>
            </div>
            <button className="w-full btn-primary">문의하기</button>
          </form>
        </div>
      </div>
    </div>
  );
}
