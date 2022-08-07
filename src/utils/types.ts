export interface Link {
  name: string;
  url: string;
  icon: string;
  alternate_url?: string;
  new_window?: boolean;
}

export interface Introduction {
  introduction: string;
  avatar: string;
}