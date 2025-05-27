export function extractJsonCodeBlockFromAIResponse(content: string): string {
  const regex = /```json\s*([\s\S]*?)\s*```/i;
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}
