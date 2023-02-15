export type TagStructure = {
    id: string;
    key: string;
    rev: string;
    name: string;
    open: boolean;
    children?: TagStructure[];
  };
  