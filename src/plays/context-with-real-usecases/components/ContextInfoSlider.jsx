const ContextInfoSlider = () => {
  return (
    <div className="context-info-slider">
      <p className="paragraph">
        Sometime, we need to use the state in more than one component. Hence, we
        have to pass it down through <br />
        <code>{`<Parent/>`}</code> to <code>{`<Child/>`}</code> and so on.
        However sometime we may need to pass it down multiple level down the
        tree.
      </p>
      <p className="paragraph">
        and sometime, there is not even a relationship between two components.
        Thats when react context become handy.
      </p>
    </div>
  );
};

export default ContextInfoSlider;
