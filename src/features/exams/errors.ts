export class ExamAccessError extends Error {
  constructor(
    message: string,
    public readonly status: 400 | 401 | 403 | 404 | 409 = 403,
  ) {
    super(message);
  }
}
