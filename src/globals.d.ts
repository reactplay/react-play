declare module '*.jpg' {
  const value: any;
  export = value;
}
declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.svg' {
  const value: string;
  export = value;
}

declare module "*.scss" {
    const content: {[className: string]: string};
    export = content;
}

declare module "*.css" {
    const content: {[className: string]: string};
    export = content;
}
