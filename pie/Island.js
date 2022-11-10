const serialize = require('serialize-javascript');

module.exports = function Island(props) {
  const { children } = props;
  const forward = { ...props, children: undefined };
  return (
    <p-island
      name={children.type.name}
      props={serialize(children.props, { isJSON: true })}
      whenIdle={ forward.whenVisible ? undefined : true }
      { ...forward }
    >
      {children}
    </p-island>
  );
}
