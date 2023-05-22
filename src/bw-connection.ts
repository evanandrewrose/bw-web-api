export type BroodWarApiVersion = "1" | "2";
export type BroodWarApiPath = `web-api/v${BroodWarApiVersion}/${string}`;

export interface IBroodWarConnection {
  fetch(url: BroodWarApiPath): Promise<string>;
}

export class BroodWarConnection implements IBroodWarConnection {
  constructor(private server: string) {}

  public fetch = async (path: BroodWarApiPath): Promise<string> => {
    const fetchResult = await fetch(`${this.server}/${path}`);
    return fetchResult.text();
  };
}
