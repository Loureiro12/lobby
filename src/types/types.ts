export interface FormData {
  fullName: string;
  cpfCnpj: string;
  email: string;
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  shirtSize: string;
  hobby: string;
  commercialTeam: string;
  birthday: string;
  iceCreamFlavors: string[];
  [key: `question_${string}`]: string;
}

export interface Product {
  id: string;
  status: string;
  title: string;
  welcome_title: string;
  welcome_phrase: string;
  logo_url: string;
  background_color: string;
  button_color: string;
  items: Array<{
    customer_product_id: string;
    name: string;
    quantity: number;
    optional: boolean;
    image_url: string;
    sizes_grid: { name: string } | null;
    sizes: Array<{ id: string; name: string }>;
  }>;
  extra_questions: Array<{
    id: number;
    answer_type: string;
    question: string;
    position: number;
    options: string[];
  }>;
}