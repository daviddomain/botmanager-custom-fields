const errorHandler = (attributes) => {
  const MISSING_SLOT = "Missing a slot attribute on botmanager-input.";
  const MISSING_NAME = "Missing a name attribute on botmanager-input.";
  const MISSING_VALUE = "Missing a value attribute on botmanager-input.";
  const WRONG_TYPE = `Slider will only work with input type="number". Please fix input ${attributes.name.value}.`;

  if (!attributes.slot) throw new Error(MISSING_SLOT);
  if (!attributes.name) throw new Error(MISSING_NAME);
  if (!attributes.value) throw new Error(MISSING_VALUE);
  if (
    (attributes.slider && !attributes.type) ||
    (attributes.slider && attributes.type.value === "text")
  )
    throw new Error(WRONG_TYPE);
};

export default errorHandler;
