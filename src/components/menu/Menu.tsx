import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./menu.scss";

export default function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="list_item" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="list_item_title">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
