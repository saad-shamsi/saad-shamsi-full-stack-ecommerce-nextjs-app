import { defineType, defineField } from "sanity";

export const gender = defineType({
  name: "gender",
  title: "Gender",
  type: "document",
  fields: [
    defineField({
      name: "sizes",
      type: "array",
      title: "Sizes",
      of: [
        {
          name: " size",
          type: "string",
          title: "Size",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],
});
