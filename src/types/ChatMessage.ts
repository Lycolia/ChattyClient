/**
 * チャットのメッセージ
 */
export type ChatMessage = {
  /** ユーザーID */
  userId: string;
  /** ユーザー名 */
  username: string;
  /** メッセージテキスト */
  text: string;
  /** 送信時刻 */
  timestamp: string;
  /** 自分のメッセージかどうか */
  isOwn: boolean;
};
