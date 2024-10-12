function AccordionData({ title, content, isActive, onClick }) {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default AccordionData;
