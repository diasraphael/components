export type Option = {
  selected: boolean;
  label: string;
  key: number;
  content: string[];
  colorCode: string;
};
type Size = {
  imperial: string;
  metric: string;
};
type Image = {
  id: string;
  weight: number;
  height: number;
  url: string;
};
export type DropdownType = {
  weight: Size;
  height: Size;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
  image: Image;
};

export const initialState: Option = {
  selected: false,
  label: "",
  key: 0,
  content: [],
  colorCode: "",
};
export const placeholderText = "Velg hunderase";
export const title = "Hunderase";
