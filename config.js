// 패스트파인드 공개 배포 설정. 이 파일만 고치면 됩니다. (DEPLOY.md 참고)
window.FF_CONFIG = {
  // 1) 구글 Apps Script 웹 앱 URL (https://script.google.com/macros/s/.../exec)
  //    비워 두면 신청 버튼은 동작하지만 아무 데도 저장되지 않습니다.
  formEndpoint: '',

  // 2) 메타 픽셀 ID (숫자만, 예: '1234567890123456')
  //    비워 두면 픽셀을 불러오지 않습니다.
  metaPixelId: '',

  // 3) 운영자 정보: 사이트 하단과 개인정보처리방침에 표시됩니다. 광고 전에 꼭 채우세요.
  //    사업자가 아니면 ceo·bizNo·address는 비워 두세요. 없는 번호를 지어 넣으면 안 됩니다.
  operator: {
    name: '',                  // 예: '패스트파인드 (운영: 홍길동)'
    ceo: '',
    bizNo: '',
    address: '',
    phone: '',                 // 문자 받을 번호
    email: '',
    privacyOfficer: '',        // 개인정보 보호책임자 이름
    privacyEffectiveDate: ''   // 예: '2026년 11월 1일'
  }
};
