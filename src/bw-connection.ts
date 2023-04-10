export type BroodWarApiVersion = "1" | "2";
export type BroodWarApiPath = `web-api/v${BroodWarApiVersion}/${string}`;

export interface IBroodWarConnection {
  fetch(url: BroodWarApiPath): Promise<Response>;
}

export class BroodWarConnection implements IBroodWarConnection {
  constructor(private server: string) {}

  public fetch = async (path: BroodWarApiPath): Promise<Response> => {
    return await fetch(`${this.server}/${path}`);
  };
}
