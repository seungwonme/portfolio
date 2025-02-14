import Image from 'next/image';
import Link from 'next/link';

export default async function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Exceed IT 로고"
                width={100} // 로고의 너비를 설정하세요
                height={30} // 로고의 높이를 설정하세요
              />
            </div>
            <p className="text-gray-400">
              최고의 기술력과 창의력으로 디지털 혁신을 선도하는 웹/앱 개발 전문
              기업입니다.
            </p>
          </div>

          <div>
            <h3 className="footer-heading">바로가기</h3>
            <ul className="footer-links">
              <li>
                <Link href="/portfolio">포트폴리오</Link>
              </li>
              <li>
                <Link href="/contact">문의하기</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">연락처</h3>
            <ul className="footer-info">
              <li>
                <Image
                  src="/footer-call-icon.png"
                  alt="전화 아이콘"
                  width={16}
                  height={16}
                />
                010-7662-0146
              </li>
              <li>
                <Image
                  src="/footer-email-icon.png"
                  alt="이메일 아이콘"
                  width={16}
                  height={16}
                />
                aiden.pren@gmail.com
              </li>
              <li>
                <Image
                  src="/footer-location-icon.png"
                  alt="위치 아이콘"
                  width={12}
                  height={16}
                />
                서울특별시 강남구 개포로 416
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © 2025 Company. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social media icons */}
          </div>
        </div>
      </div>
    </footer>
  );
}
