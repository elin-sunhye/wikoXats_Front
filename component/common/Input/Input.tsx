'use client';

import './input.scss';
interface InputProps {
  size?: 'sm' | 'md' | 'xlg';

  // 웹접근성
  id: string;
  labelNm: string;
  type: string;
}

/**
 * @size ?: 버튼의 사이즈 기본 lg
 *
 * * 접근성
 *
 * @id : id
 *
 * @labelNm :  인풋 이름 라벨
 *
 * @type : 인풋 타입
 */

export default function Input({
  size,
  id,
  labelNm,
  type,
  ...props
}: InputProps & React.HTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <label htmlFor={id} className="screen_out">
        {labelNm}
      </label>
      <input type={type} id={id} className={size ? size : 'lg'} {...props} />
    </>
  );
}
