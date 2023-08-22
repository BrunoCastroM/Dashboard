import { topDealUsers } from "../../data";
import formatCurrency from "../../utils/formatCurrency";
import "./topbox.scss";

export default function TopBox() {
  return (
    <div className="top_box">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="list_item" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />

              <div className="user_texts">
                <span className="username">{user.username}</span>
                <span className="email"> {user.email}</span>
              </div>
            </div>
            <span className="amount">{formatCurrency(user.amount, "USD")}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
