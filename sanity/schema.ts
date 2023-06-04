import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { category } from "./category";
import { gender } from "./gender";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, gender],
};
