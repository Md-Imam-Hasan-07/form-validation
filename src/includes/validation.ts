import {
  alpha_spaces as alphaSpaces,
  confirmed,
  email,
  max,
  max_value as maxVal,
  mimes,
  min,
  min_value as minVal,
  not_one_of as excluded,
  required,
  size,
} from "@vee-validate/rules";
import {
  configure,
  defineRule,
  ErrorMessage,
  Field as VeeField,
  Form as VeeForm,
} from "vee-validate";

export default {
  install(app: any) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("password_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("country_excluded", excluded);
    defineRule("mimes", mimes);
    defineRule("size", size);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetical character.`,
          email: `The field ${ctx.field} must be a valid email.`,
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          excluded: `You are nit allowed to use this value for the field ${ctx.field}.`,
          country_excluded:
            "Due to restriction, we do not accept user from this location",
          password_mismatch: "The passwords don't match",
          tos: "You must accept the Terms of Service",
          mimes: "Invalid file extension",
          size: "File size must be under 1000 kilobytes",
        };

        const message = messages[ctx?.rule?.name]
          ? messages[ctx?.rule?.name]
          : `The field ${ctx.field} is invalid`;

        return message;
      },
      // validateOnInput: true, // i added it cause i think this better
    });
  },
};
