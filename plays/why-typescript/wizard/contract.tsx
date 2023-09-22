// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDataContract {}

export class IPageData {
  title: string;
  details: Array<string>;
}

export class PageData implements IDataContract, IPageData {
  title: string;
  details: Array<string>;
  constructor(data: IPageData) {
    this.details = data.details;
    this.title = data.title;
  }
}

export interface IWizardData {
  title: string;
  pages: Array<PageData>;
}

export class WizardData implements IDataContract, IWizardData {
  title: string;
  pages: Array<PageData> = [];
  constructor(title: string, pages: Array<object>) {
    this.title = title;
    pages.forEach((o) => {
      const pagedata: IPageData = o as IPageData;
      this.pages.push(new PageData(pagedata));
    });
  }
}

export type AppProps = {
  wizdata?: IWizardData;
  pagedata?: IPageData;
};
