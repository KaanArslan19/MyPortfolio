const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "showcase", "work", "skills", "contact"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#a0ff01" } : {}}
      >
        <span className="sr-only">{item}</span>
      </a>
    ))}
  </div>
);

export default NavigationDots;
