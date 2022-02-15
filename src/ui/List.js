const List = ({ icon, description, style }) => (
  <li className="list">
    {icon}
    {description && <p>{description}</p>}
  </li>
);

export default List;
