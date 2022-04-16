export type QQInfo =
  | {
      code: 1;
      qq: string;
      name: string;
      qlogo: string;
    }
  | {
      code: 201701 | 201702;
      msg: string;
    };
