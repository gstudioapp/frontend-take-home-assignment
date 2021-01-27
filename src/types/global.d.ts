declare global {
  interface Window {
    fbq: any;
    ga: any;
    __NEXT_DATA__: any;
  }
}

declare namespace NodeJS {
  interface Document {
    createRange: () => {
      setStart: () => void;
      setEnd: () => void;
      commonAncestorContainer: {
        nodeName: string;
        ownerDocument: Document;
      };
    };
  }
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
  }
}
