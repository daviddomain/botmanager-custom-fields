const errorHandler = (attributes) => {
  const MISSING_ACTION = "Missing an action attribute on botmanager-form.";

  if (!attributes.action) throw new Error(MISSING_ACTION);
};

export default errorHandler;
