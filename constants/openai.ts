export const OPENAI_MODELS = {
  GPT_4_O: 'gpt-4o',
  GPT_4_1_MINI: 'gpt-4.1-mini',
} as const;

export const OPENAI_PROMPTS = {
  ANALYZE_IMAGE: `Проаналізуй фото їжі:
  1. Знайди усі продукти та інгредієнти на фото.
  2. Визнач їх вагу.
  3. Відповідь дай у такому форматі:
  {
    "ingredients": [
    {
      name: "назва продукту",
      quantity: "приблизна вага продукту",
      unit: "одиниця виміру (г, кг, мл, л тощо)"
    }
    ]
  }
  і більше нічого не пиши  
  `,
};
