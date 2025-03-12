export type MenusType = {
  /**
   * 메뉴 고유 스퀀스
   */
  menuId: number;
  /**
   * 부모 고유 시퉌스
   */
  parentSeq: number;
  /**
   * 메뉴이름
   */
  menu: string;
  /**
   * 메뉴 주소
   */
  url: string;
  /**
   * 메뉴 바로가기 이름
   */
  title: string;
  /**
   * 종류
   * admin, main
   */
  type: string;
  /**
   * 메뉴 depth
   */
  level: number;
  /**
   * 하위 메뉴 여부
   */
  hasChild: boolean;
};
