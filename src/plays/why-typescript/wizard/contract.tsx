export interface IDataContract {}

export class IPageData {
  title: String;
  details: Array<String>;
}

export class PageData implements IDataContract, IPageData {
  title: String;
  details: Array<String>;
  constructor(data: IPageData) {
    this.details = data.details;
    this.title = data.title;
  }
}

export interface IWizardData {
  title: String;
  pages: Array<PageData>;
}

export class WizardData implements IDataContract, IWizardData {
  title: String;
  pages: Array<PageData> = [];
  constructor(title: String, pages: Array<object>) {
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
