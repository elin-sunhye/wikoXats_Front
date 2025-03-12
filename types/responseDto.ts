export interface responseDto<T> {
  /**
   * 전체 페이지 수
   */
  totalPage: number;
  /**
   * 현재 페이지
   */
  page: number;
  /**
   * 현재 페이지가 첫번쨰 페이지인지
   */
  firstPage: boolean;
  /**
   * 현재 페이지가 마지막 페이지인지
   */
  lastPage: boolean;
  /**
   * 총 갹체 갯수
   */
  totalElement: number;
  /**
   * 데이터
   */
  data: T;
}
