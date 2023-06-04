import { defineType, defineField } from "sanity";

export const gender = defineType({
  name: "gender",
  title: "Gender",
  type: "document",
  fields: [
    defineField({
      name: "gender",
      type: "string",
      title: "Gender",
    }),
  ],
});
