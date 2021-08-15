export type ISuccessResponse<S = any> = {
  success: true;
  data: S;
};

export type IErrorResponse = {
  success: false;
  error?: {
    message: string;
  };
};

export type IResponse<S> = ISuccessResponse<S> | IErrorResponse;
