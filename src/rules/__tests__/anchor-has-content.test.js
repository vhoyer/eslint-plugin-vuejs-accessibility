const rule = require("../anchor-has-content");
const makeRuleTester = require("./makeRuleTester");

makeRuleTester("anchor-has-content", rule, {
  valid: [
    "<a>Anchor Content!</a>",
    "<a is='TextWrapper' />",
    "<a v-text='msg' />",
    "<a v-html='msg' />",
    "<a><slot /></a>",
    "<Anchor  />",
    "<a aria-label='This is my label' />"
  ],
  invalid: [
    "<a />",
    {
      code: "<Anchor  />",
      options: [{ components: ["Anchor"] }],
      errors: [{ messageId: "default" }]
    }
  ]
});
