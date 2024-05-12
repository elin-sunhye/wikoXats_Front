// Input 이벤트에서 유효성 검사를 통과하였는지를, input tag 바로 아래에 메시지로 출력하기 위해 사용하는 Type
export interface InputErrorMsgType {
  isSuccess: boolean;
  msg: string;
}

// autoAlert에서 사용하는 StatusType
export type StatusType = "success" | "warning" | "info" | "error";

// 아직 결정된 File type이 아님
export interface FileType {
  fileMainSeq: number | null;
  workName: string;
  compName: string;
  fileNameCli: string;
  fileExt: string;
  fileSize: number;
  fileNameSvr: string;
  filePathSvr: string;
}
