export interface signupDto {
  /**
   * 사용자 이름 (아이디)
   * Username.
   */
  username: string;

  /**
   * 사용자 비밀번호
   * Password.
   */
  password: string;

  /**
   * 이름
   * Full name.
   */
  name: string;

  /**
   * 이메일
   * Email address.
   */
  email: string;

  /**
   * 전화번호
   * Phone number.
   */
  phoneNum: string;

  /**
   * 직급 이름
   * Rank name or position.
   */
  rankName: string;

  /**
   * 직급 이름
   * Rank name or position.
   */
  file?: any;
}
