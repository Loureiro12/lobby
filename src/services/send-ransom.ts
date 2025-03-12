import { FormData, Product } from "@/types/types";

interface RedeemRequestData {
  redeemer_name: string;
  redeemer_email: string;
  redeemer_document_number: string;
  redeemer_zipcode: string;
  redeemer_street: string;
  redeemer_number: string;
  redeemer_complement: string;
  redeemer_neighborhood: string;
  redeemer_city: string;
  redeemer_state: string;
  redeemer_country: string;
  redeemer_phone: string;
  extra_question_responses: Array<{
    extra_question_id: number;
    answer: string;
  }>;
  items: Array<{
    customer_product_id: string;
    size_name: string;
  }>;
}

export const redeemProduct = async (
  productId: string,
  formData: FormData,
  products: Product[],
  selectedItems: string[]
): Promise<Response> => {
  const requestData: RedeemRequestData = {
    redeemer_name: formData.fullName,
    redeemer_email: formData.email,
    redeemer_document_number: formData.cpfCnpj,
    redeemer_zipcode: formData.zipCode,
    redeemer_street: formData.street,
    redeemer_number: formData.number,
    redeemer_complement: formData.complement,
    redeemer_neighborhood: formData.neighborhood,
    redeemer_city: formData.city,
    redeemer_state: formData.state,
    redeemer_country: formData.country,
    redeemer_phone: "",
    extra_question_responses: products
      .flatMap((product) => product.extra_questions || [])
      .map((question) => ({
        extra_question_id: question.id,
        answer: formData[`question_${question.id}`] || "",
      })),
    items: [
      ...selectedItems.map((itemId) => {
        const item = products
          .flatMap((product) => product.items)
          .find((item) => item.customer_product_id === itemId);
        return {
          customer_product_id: itemId,
          size_name: item?.sizes?.[0]?.name || "",
        };
      }),
      ...products
        .flatMap((product) =>
          product.items.filter((item: { optional: boolean }) => !item.optional)
        )
        .map((item) => ({
          customer_product_id: item.customer_product_id,
          size_name: item.sizes?.[0]?.name || "",
        })),
    ],
  };

  const response = await fetch(
    `https://server.lobby.tech/api/v1/redeem_pages/${productId}/redeem`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      body: JSON.stringify(requestData),
    }
  );

  return response;
};
